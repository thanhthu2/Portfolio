import { Routes, Route } from "react-router-dom";
import About from "./views/About/TheAbout";
import Home from "./views/Home/TheHome";
import NotFound from "./views/NotFound/NotFound";
import { Navbar } from "./components/NavBar";

const App = () => {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Navbar>
    </>
  );
};

export default App;
