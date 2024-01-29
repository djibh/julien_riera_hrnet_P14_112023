import { Outlet } from "react-router-dom";

import Header from "@/components/reusable/Header";
import Footer from "@/components/reusable/Footer";
import Sidebar from "@/components/reusable/Sidebar";
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
    margin-inline: auto
  }
`;