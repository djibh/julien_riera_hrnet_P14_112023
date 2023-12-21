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
    border-bottom: 5px solid hsl(70.625, 48.9795918367347%, 38.431372549019606%);
    padding: 1.2em 0.5em;

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1400px;
        margin: 0 auto;

        .logo {
            max-width: 70px;
        }

        .page-title {
            font-size: 1.7rem;
            font-weight: bold;
            color: #444;
        }
    }
`;