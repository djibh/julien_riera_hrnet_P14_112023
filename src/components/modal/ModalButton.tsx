import AddCircleIcon from '@mui/icons-material/AddCircle';
import styled from 'styled-components';
import { colors } from '../../design';

type ModalButtonProps = {
    clickAction: React.MouseEventHandler<HTMLButtonElement>
}

export default function ModalButton({ clickAction }: ModalButtonProps) {
  return (
    <ButtonStyled onClick={clickAction}>
      <AddCircleIcon />
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  margin: 0;
  padding: 0;
  display: flex;
  align-self: center;
  color: ${colors.green400};
  filter: drop-shadow(0px 1px 2px ${colors.grey900});
  
  :first-child {
      font-size: 2.8rem;
  }
    
  :active, :hover {
      color: ${colors.green300};
  }
`;