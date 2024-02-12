import { Outlet } from "react-router-dom";
import { Header, Footer, Sidebar } from "@/components/ui"
import styled from "styled-components";

export default function BaseLayout() {
  return (
    <>
      <Header />
      <MainContainerStyled className='container'>
        <Sidebar />
        <div className='content'>
          <Outlet />
        </div>
      </MainContainerStyled>
      <Footer />
    </>
  );
}

const MainContainerStyled = styled.main`
    display: flex;

    > * {
      padding-top: 1.5em;
    }

    .content {
    flex: 1;
    padding-inline: 2em;
    max-width: 1400px;
    margin-inline: auto;
  }
`;