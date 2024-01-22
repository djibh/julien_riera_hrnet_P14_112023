/* Navbar.tsx - Component
 *
 * This component is currently used to show the company logo. Could be used to add navigation items too.
 *  
 */

import styled from "styled-components";
import colors from "../../design";

export default function Navbar() {
  return (
    <HeaderStyled>
          <nav>
            <img src="/logo2.png" alt="Logo de la société Wealth Health" className="navbar__logo"/>
            <img src="https://api.dicebear.com/7.x/thumbs/svg?seed=Callie&scale=80&radius=50" className="navbar__avatar" alt="avatar" />
          </nav>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
    height: 15vh;
    display: grid;
    place-items: center;
    background: white;
    box-shadow: 0px 0px 3px 0px ${colors.primary};

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-width: 90%;
        max-width: 1400px;
        margin: 0 auto;

        .navbar__logo {
            max-width: 50px;
        }
        .navbar__avatar {
            max-width: 50px;
            padding: 5px;
            border-radius: 50%;
        }
    }
`;