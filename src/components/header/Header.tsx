import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import SelectDropdown from '../reusable/SelectDropdown'
import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderStyled>
    <h1>EMPLOYEES</h1>
    <div className='search'>
      <div className='search-input__container'>
        <SearchIcon />
        <input type="text" id='search-input'/>
      </div>
      <SelectDropdown label='Sort' options={['First name','Last name']} />
      <AddCircleIcon id='add-button'/>
    </div>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  h1 {
      font-size: 2rem;
      margin: 1em;
    }

    .search {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1em;
      width: 100%;
      margin-bottom: 1em;
      
      .search-input__container {
        display: flex;
        padding: 0.5em;
        background-color: rgba(68, 68, 68, 0.35);
        backdrop-filter: blur(3px);
        -webkit-backdrop-filter: blur(3px);
        border-radius: 10px;
        flex: 1;

        #search-input {
          flex: 1;
          outline: none;
          border: none;
          font-size: 1.2rem;
        }
      }
      
      #add-button {
        font-size: 2rem;
        filter: drop-shadow(0px 1px 2px black)
      }  
    }
`;