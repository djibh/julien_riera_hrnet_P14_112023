import styled from "styled-components";

export default function Navbar() {
  return (
    <HeaderStyled>
        <nav>
            <img src="/logo.png" alt="Logo de la société Wealth Health" className="logo"/>
            <div className='page-title'>HRnet</div>
          </nav>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
    background: white;
    border-bottom: 1px solid #999;
    padding-block: 1.2em;

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1300px;
        margin: 0 auto;

        .logo {
            max-width: 70px;
        }

        .page-title {
            font-size: 1.7rem;
            font-weight: bold;
            color: #555;
        }
    }
`;