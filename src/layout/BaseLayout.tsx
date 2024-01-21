import { Outlet } from "react-router-dom";
import Navbar from "../components/reusable/Navbar";
import Footer from "../components/reusable/Footer";

export default function BaseLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}