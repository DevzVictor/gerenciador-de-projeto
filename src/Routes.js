import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Company from "./pages/Company/Company";
import Contact from "./pages/Contact/Contact";
import NewProject from "./pages/NewProject/NewProject";
import Error from "./pages/Error/Error";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Company" element={<Company />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="NewProject" element={<NewProject />} />
        <Route path="Error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
