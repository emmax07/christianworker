import { memo } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.js";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default memo(App);
