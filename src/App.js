import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Home from "./Component/Home";
import { useContext, useEffect } from "react";
import ThemeContext from "./Context/ThemeContext";

function App() {
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    document.body.style.backgroundColor =
      darkMode === "dark" ? "#36454F" : "white";
    console.log(darkMode);
  }, [darkMode]);

  return (
    <Router>
      <Navbar />
      <div
        className="container my-4"
        data-bs-theme={darkMode === "dark" ? "dark" : ""}
        style={{ backgroundColor: darkMode === "dark" ? "dark" : "" }}
      >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
