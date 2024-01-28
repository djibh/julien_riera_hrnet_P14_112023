/* NewPatientModal.tsx - Component
 *
 * This component is used to build the UI button show to call the modal. Once mounted, the modal will have a Form component as its child.
 * A context is used to handle the open/close state of the modal itself. 
 *  
 */

import styled from 'styled-components';
import Modal from 'simpl-modal';
import ModalButton from './ModalButton';
import { useContext } from 'react';
import PatientContext from '@/context/PatientContext';

type NewSectionModalProps = {
  form: JSX.Element
}

export default function NewSectionItemModal({ form }: NewSectionModalProps) {
  const { isModalOpen, setIsModalOpen } = useContext(PatientContext)
  
  return (
    <NewPatientModalStyled>
        <ModalButton clickAction={() => setIsModalOpen(true)}/>
        <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} theme='neutral' animated>
          { form }
        </Modal>
    </NewPatientModalStyled>
  )
}

const NewPatientModalStyled = styled.div`
    display: flex;
    align-items: center;
`;