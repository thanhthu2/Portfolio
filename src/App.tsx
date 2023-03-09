import { Routes, Route } from "react-router-dom";
import About from "./views/About/TheAbout";
import Home from "./views/Home/TheHome";
import NotFound from "./views/NotFound/NotFound";
import { Navbar } from "./components/NavBar";

const App = () => {
  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
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
