import styled from 'styled-components';
import { colors } from '../../design/index'
import Modal from 'simpl-modal';

import ModalButton from '../modal/ModalButton';
import { useContext } from 'react';
import Form from '../employees/Form';
import EmployeeContext from '../../context/EmployeeContext';

export default function Search() {
  const { isModalOpen, setIsModalOpen } = useContext(EmployeeContext)
  
  return (
    <SearchStyled>
        <ModalButton clickAction={() => setIsModalOpen(true)}/>
        <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} theme='neutral' animated>
          <Form />
        </Modal>
    </SearchStyled>
  )
}

const SearchStyled = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: stretch;
    gap: 1.5em;
    width: 100%;
    margin-bottom: 1em;

    .search-input__container {
    display: flex;
    padding: 0.6em 1em;
    background-color: #444444cc;
    border-radius: 10px;
    gap: 0.5em;
    flex: 0.4;
    box-shadow: inset 0px 0px 4px 0px hsl(0, 5%, 9%);
    
    #search-input {
      flex: 1;
      outline: none;
      border: none;
      background-color: transparent;
      font-size: 1.2rem;
      caret-color: ${colors.green400};
      padding-inline: 0.25em;
      &:focus {
        border-bottom: 1px solid ${colors.green400};
      }
    }
  }
  
  .search-icon {
    font-size: 2.2rem;
  }
`;