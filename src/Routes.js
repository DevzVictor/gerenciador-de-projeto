import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";

import Home from "./pages/Home/Home";
import Company from "./pages/Company/Company";
import Contact from "./pages/Contact/Contact";
import NewProject from "./pages/NewProject/NewProject";
import Projects from "./pages/Projects/Projects";
import Error from "./pages/Error/Error";

import Footer from "./Components/Footer/Footer";

function RoutesApp() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Company" element={<Company />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="NewProject" element={<NewProject />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Error" element={<Error />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default RoutesApp;
