/* Navbar.tsx - Component
 *
 * This component is currently used to show the company logo. Could be used to add navigation items too.
 *  
 */
import PeopleIcon from '@mui/icons-material/People';
import HubIcon from '@mui/icons-material/Hub';
import styled from "styled-components";
import theme from "@/design/theme";
import { NavLink } from 'react-router-dom';

export function Sidebar() {
  return (
    <SidebarStyled>
        <h2>KLEPIOS</h2>
        <div className='sidebar-items'>
          <NavLink to="/" className='sidebar-items__btn'>
              <PeopleIcon />
              <div>Patients</div>
          </NavLink>
          <NavLink to="/services" className='sidebar-items__btn'>
              <HubIcon />
              <div>Services</div>
          </NavLink>
        </div>
    </SidebarStyled>
  )
}

const SidebarStyled = styled.nav`
    width: 200px;
    min-width: 200px;
    max-width: 400px;
    min-height: 90vh;
    background-color: ${theme.colors.primary};
    box-shadow: ${theme.shadows.inset};

    h2 {
      margin-bottom: 1.5em;
      font-family: Arial black;
      text-align: center;
    }

    .sidebar-items {
      display: flex;
      flex-direction: column;
      gap: 1em;
      padding-left: 10%;

      &__btn {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 15px;
        font-size: 1.15rem;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
        color: white;
        transition: 180ms;
        
        &:hover, &.active {
          background: rgba(255,255,255, 0.2);
          /* box-shadow: 0px 1px 0px 0px ${theme.colors.grey700}; */
        }
      }
    }
`;