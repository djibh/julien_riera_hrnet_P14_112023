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
      <h1>1 EMPLOYE</h1>
      <NewEmployeeModal />
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  h1 {
      font-size: 2rem;
      margin-top: 1.5em;
      margin-bottom: 0.5em;
      color: ${colors.primary};
    }
`;