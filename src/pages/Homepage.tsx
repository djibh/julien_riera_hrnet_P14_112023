import PeopleIcon from '@mui/icons-material/People';
import HubIcon from '@mui/icons-material/Hub';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EmployeesTable from '../components/employees/EmployeeTable';
import { useState } from 'react';
import EmployeeContext from '../context/EmployeeContext';
import { ToastContainer } from 'react-toastify';
import initialEmployees from '../data/initialEmployees'
import styled from 'styled-components';
import colors from '../design';

export default function Homepage() {
  const [employees, setEmployees] = useState(initialEmployees)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const ContextValue = {
    employees,
    setEmployees,
    isModalOpen,
    setIsModalOpen
  }

  return (
    <EmployeeContext.Provider value={ContextValue}>
        <LayoutStyle>
          <div className='container'>
            <div className='sidebar'>
                <h2>MATIME</h2>
              <div className='sidebar-items'>
                <div className='sidebar-items__btn'>
                  <PeopleIcon />
                  <div>Employés</div>
                </div>
                <div className='sidebar-items__btn'>
                  <HubIcon />
                  <div>Services</div>
                </div>
                <div className='sidebar-items__btn'>
                  <AssignmentIcon />
                  <div>Services</div>
                </div>
              </div>
            </div>
            <div className='content'>
              <EmployeesTable/>
            </div>
          </div>
        </LayoutStyle>
      {/* toast notification for employee form submission */}
      <ToastContainer position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light" />
    </EmployeeContext.Provider>
  );
}

const LayoutStyle = styled.div`
  .container {
    display: flex;

    > * {
      padding-top: 1.5em;
    }
  }

  .sidebar {
    width: 200px;
    padding-left: 1.2em;
    min-height: 90vh;
    background-color: ${colors.primary};

    &-items {
      display: flex;
      flex-direction: column;
      gap: 1.5em;

      &__btn {
        display: flex;
        gap: 10px;
      }
    }
  }

  .content {
    flex: 1;
  }
`;