/* ModalButton.tsx - Component
 *
 * This component is a custom button specifically built to show the NewEmployeeModal component.
 * It takes one function as a property. In this case, a setter to show the modal.
 *  
 */

import AddCircleIcon from '@mui/icons-material/AddCircle';
import styled from 'styled-components';
import { colors } from '../../../design';

type ModalButtonProps = {
    clickAction: React.MouseEventHandler<HTMLButtonElement>
}

export default function ModalButton({ clickAction }: ModalButtonProps) {
  return (
    <ButtonStyled onClick={clickAction} aria-label='Create new employee form'>
      <AddCircleIcon />
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  margin: 0;
  padding: 0;
  display: flex;
  align-self: center;
  color: ${colors.green300};
  filter: drop-shadow(0px 1px 2px ${colors.grey900});
  
  :first-child {
      font-size: 2.8rem;
  }
    
  :active, :hover {
      color: ${colors.green400};
  }
`;