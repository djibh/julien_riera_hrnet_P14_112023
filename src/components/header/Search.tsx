import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import SelectDropdown from '../reusable/SelectDropdown'
import styled from 'styled-components';

export default function Search() {
  return (
    <SearchStyled>
      <div className='search-input__container'>
        <SearchIcon className='icons'/>
        <input type="text" id='search-input'/>
      </div>
      <SelectDropdown label='Sort' options={['First name','Last name']} />
      <AddCircleIcon className='icons add-btn'/>
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
    padding: 0.5em 1em;
    background-color: #444444cc;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
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
      caret-color: hsl(71.13402061855669, 49.23857868020305%, 60.627450980392155%);
      padding-inline: 0.25em;
      &:focus {
        border-bottom: 1px solid hsl(71.13402061855669, 49.23857868020305%, 60.627450980392155%);
      }
    }
  }
  
  .icons {
    font-size: 2.3rem;
    &.add-btn {
      align-self: center;
      filter: drop-shadow(0px 1px 2px black);
      color: hsl(71.13402061855669, 49.23857868020305%, 60.627450980392155%);
        }
    }
`;