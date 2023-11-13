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
    gap: 2em;
    width: 100%;
    margin-bottom: 1em;

    .search-input__container {
    display: flex;
    padding: 0.5em 1em;
    background-color: rgba(68, 68, 68, 0.35);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    border-radius: 10px;
    gap: 0.5em;
    flex: 1;

        #search-input {
            flex: 1;
            outline: none;
            border: none;
            font-size: 1.2rem;
        }
    }

    .icons {
    font-size: 2.3rem;
        &.add-btn {
        align-self: center;
        filter: drop-shadow(0px 1px 2px black)
        }
    }
`;