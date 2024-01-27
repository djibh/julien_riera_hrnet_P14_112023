/* ModalButton.tsx - Component
 *
 * This component is a custom button specifically built to show the NewPatientModal component.
 * It takes one function as a property. In this case, a setter to show the modal.
 *  
 */

import PersonAdd from '@mui/icons-material/PersonAdd';
import styled from 'styled-components';
import theme from '@/design/theme';

type ModalButtonProps = {
    clickAction: React.MouseEventHandler<HTMLButtonElement>
}

export default function ModalButton({ clickAction }: ModalButtonProps) {
  return (
    <ButtonStyled onClick={clickAction} aria-label='Create new Patient form'>
      <PersonAdd />
      <div>Ajouter</div>
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  margin: 0;
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 1em;
  font-weight: 600;
  gap: 10px;
  background-color: ${theme.colors.lilac};
  box-shadow: 0px 1px 1px 1px #ccc;
  transition: 180ms;
  
  :first-child {
    font-size: 1.3em;
  }
    
  &:hover {
    background-color: ${theme.colors.glaucous};
  }
  &:active {
    box-shadow: 0px 0px 2px 1px ${theme.colors.yinmnBlue} inset;
  }
`;