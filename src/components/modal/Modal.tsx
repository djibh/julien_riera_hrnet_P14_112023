import Form from '../employees/Form'
import styled from 'styled-components';

type ModalProps = {
    closeAction: () => void
}

export default function Modal({closeAction}: ModalProps ) {
  return (
    <ModalStyled role='dialog' className='modal'>
        <div className='modal-content'>
            <Form closeAction={closeAction} submitAction={closeAction}/>
        </div>
    </ModalStyled>
  )
}

const ModalStyled = styled.div`
    position: fixed;
    display: grid;
    place-content: center;
    width: 100%;
    inset: 0;
    background-color: rgba(255,255,255, 0.05);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    z-index: 100;
`;