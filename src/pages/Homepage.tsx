import PeopleIcon from '@mui/icons-material/People';
import HubIcon from '@mui/icons-material/Hub';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EmployeesTable from '@/components/employees/EmployeeTable';
import { useState } from 'react';
import EmployeeContext from '@/context/EmployeeContext';
import { ToastContainer } from 'react-toastify';
import initialEmployees from '@/data/initialEmployees'
import styled from 'styled-components';
import theme from '@/design/theme';

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
                <button className='sidebar-items__btn'>
                  <PeopleIcon />
                  <div>Employés</div>
                </button>
                <button className='sidebar-items__btn'>
                  <HubIcon />
                  <div>Services</div>
                </button>
                <button className='sidebar-items__btn'>
                  <AssignmentIcon />
                  <div>Services</div>
                </button>
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
    width: 15%;
    min-width: 200px;
    max-width: 400px;
    min-height: 90vh;
    background-color: ${theme.colors.yinmnBlue};

    h2 {
      margin-bottom: 1.5em;
      font-family: Arial black;
      text-align: center;
    }

    &-items {
      display: flex;
      flex-direction: column;
      gap: 1.5em;
      padding-left: 1.2em;

      > :first-child {
        background: rgba(255,255,255, 0.2);
      }

      &__btn {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 15px;
        font-size: 1rem;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
        
        &:hover {
          background: rgba(255,255,255, 0.2);
        }
      }
    }
  }

  .content {
    flex: 1;
    padding-inline: 2em;
  }
`;