import Search from './Search'
import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderStyled>
    <h1>EMPLOYEES</h1>
    <Search />
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  h1 {
      font-size: 2rem;
      margin-top: 1em;
      margin-bottom: 0.5em;
    }
`;