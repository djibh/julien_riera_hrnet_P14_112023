/* Navbar.tsx - Component
 *
 * This component is currently used to show the company logo. Could be used to add navigation items too.
 *  
 */
import PeopleIcon from '@mui/icons-material/People';
import HubIcon from '@mui/icons-material/Hub';
import styled from "styled-components";
import theme from "@/design/theme";
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <SidebarStyled>
        <h2>KLEPIOS</h2>
        <div className='sidebar-items'>
          <Link to="/" className='sidebar-items__btn'>
              <PeopleIcon />
              <div>Patients</div>
          </Link>
          <Link to="/services" className='sidebar-items__btn'>
              <HubIcon />
              <div>Services</div>
          </Link>
        </div>
    </SidebarStyled>
  )
}

const SidebarStyled = styled.nav`
    width: 15%;
    min-width: 200px;
    max-width: 400px;
    min-height: 90vh;
    background-color: ${theme.colors.yinmnBlue};

    h2 {
      margin-bottom: 1.5em;
      font-family: Arial black;
      text-align: center;
    }

    .sidebar-items {
      display: flex;
      flex-direction: column;
      gap: 1.5em;
      padding-left: 10%;

      > :first-child {
        background: rgba(255,255,255, 0.2);
      }

      &__btn {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 15px;
        font-size: 1rem;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
        color: white;
        
        &:hover {
          background: rgba(255,255,255, 0.2);
        }
      }
    }
`;