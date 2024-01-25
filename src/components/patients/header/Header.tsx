/* Header.tsx - Component
 *
 * This component is used to display main title of the Patients page and build the NewPatientModal component.
 *  
 */

import NewPatientModal from '@/components/Patients/modal/NewPatientModal';
import styled from 'styled-components';
import theme from '@/design/theme';
import { Patient } from '@/types';

type HeaderProps = {
  patients: Patient[]
}

export default function PatientsHeader({patients}: HeaderProps) {
  return (
    <HeaderStyled>
      <div className='title'>
        <h1>Patients</h1>
        <h2>Il y a actuellement {patients.length} patients enregistrés</h2>
      </div>
      <NewPatientModal />
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 1.5em;

  .title {
    flex: 1;

    h1 {
      font-size: 1.6rem;
      color: ${theme.colors.black};
      margin-bottom: 0;
    }

    h2 {
      font-size: 0.95rem;
      margin-top: 5px;
      color: ${theme.colors.cadetGray};
    }
  }
  
`;