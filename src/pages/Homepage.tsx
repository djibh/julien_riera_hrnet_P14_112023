import PeopleIcon from '@mui/icons-material/People';
import HubIcon from '@mui/icons-material/Hub';
import PatientsTable from '@/components/patients/PatientTable';
import { useState } from 'react';
import PatientContext from '@/context/PatientContext';
import { ToastContainer } from 'react-toastify';
import initialPatients from '@/data/initialPatients'
import styled from 'styled-components';
import theme from '@/design/theme';

export default function Homepage() {
  const [Patients, setPatients] = useState(initialPatients)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const ContextValue = {
    Patients,
    setPatients,
    isModalOpen,
    setIsModalOpen
  }

  return (
    <PatientContext.Provider value={ContextValue}>
        <LayoutStyle>
          <div className='container'>
            <div className='sidebar'>
                <h2>MATIME</h2>
              <div className='sidebar-items'>
                <button className='sidebar-items__btn'>
                  <PeopleIcon />
                  <div>Patients</div>
                </button>
                <button className='sidebar-items__btn'>
                  <HubIcon />
                  <div>Services</div>
                </button>
              </div>
            </div>
            <div className='content'>
              <PatientsTable/>
            </div>
          </div>
        </LayoutStyle>
      {/* toast notification for Patient form submission */}
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
    </PatientContext.Provider>
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