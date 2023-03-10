import { Routes, Route } from "react-router-dom";

import { Navbar } from "./components/NavBar";
import { Contact, Experience, Home, NotFound, Projects, Skills } from "./views";

const App = () => {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Navbar>
    </>
  );
};

export default App;
