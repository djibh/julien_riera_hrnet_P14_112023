/* Header.tsx - Component
 *
 * This component is used to display main title of the Employees page and build the NewEmployeeModal component.
 *  
 */

import NewEmployeeModal from '../employees/modal/NewEmployeeModal';
import styled from 'styled-components';
import colors from '../../design'

export default function Header() {
  return (
    <HeaderStyled>
      <div className='title'>
        <h1>Employés (1)</h1>
        <h2>Liste des employés actuellement enregistrés</h2>
      </div>
      <NewEmployeeModal />
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;

  .title {
    flex: 1;

    h1 {
      font-size: 1.8rem;
      color: ${colors.primary};
      margin-bottom: 0;
    }

    h2 {
      font-size: 0.9rem;
      margin-top: 5px;
      color: ${colors.grey400};
    }
  }
  
`;