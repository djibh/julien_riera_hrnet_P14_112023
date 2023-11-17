// import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import SelectDropdown from '../reusable/SelectDropdown'
import styled from 'styled-components';
import { colors } from '../../design/index'
import Modal from '../modal/Modal';
import ModalButton from '../modal/ModalButton';
import { useState } from 'react';
import Form from '../employees/Form';

export default function Search() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const toggleModal = (e) => { 
    e.preventDefault()
    setIsModalOpen(!isModalOpen)
  }
  
  const form = <Form closeAction={toggleModal} submitAction={toggleModal}/>

  return (
    <SearchStyled>
      <div className='search-input__container'>
        <SearchIcon className='search-icon'/>
        <input type="text" id='search-input'/>
      </div>
      <SelectDropdown label='Sort' options={['First name','Last name', 'Departement']} />
      <ModalButton clickAction={toggleModal}/>
      {/* { isModalOpen && <Modal closeAction={toggleModal}/> } */}
      <Modal Content={form} className={isModalOpen ? "modal-active" : ""} theme='neutral' animated />
    </SearchStyled>
  )
}

const SearchStyled = styled.div`
    display: flex;
    justify-content: space-between;
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
    flex: 10;
    box-shadow: inset 0px 0px 4px 0px hsl(0, 4.545454545454546%, 8.627450980392156%);
    
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

  .modal-active {
    pointer-events: all;
    opacity: 1;
  }
`;