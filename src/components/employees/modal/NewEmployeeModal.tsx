/* NewEmployeeModal.tsx - Component
 *
 * This component is used to build the UI button show to call the modal. Once mounted, the modal will have a Form component as its child.
 * A context is used to handle the open/close state of the modal itself. 
 *  
 */

import styled from 'styled-components';
import Modal from 'simpl-modal';
import ModalButton from './ModalButton';
import { useContext } from 'react';
import Form from '../form/Form';
import EmployeeContext from '@/context/EmployeeContext';

export default function NewEmployeeModal() {
  const { isModalOpen, setIsModalOpen } = useContext(EmployeeContext)
  
  return (
    <NewEmployeeModalStyled>
        <ModalButton clickAction={() => setIsModalOpen(true)}/>
        <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} theme='neutral' animated>
          <Form />
        </Modal>
    </NewEmployeeModalStyled>
  )
}

const NewEmployeeModalStyled = styled.div`
    display: flex;
    align-items: center;
`;