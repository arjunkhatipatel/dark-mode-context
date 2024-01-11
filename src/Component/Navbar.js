import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../Context/ThemeContext";

function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      //   style={{ backgroundColor: "#e3f2fd" }}
      data-bs-theme={darkMode === "dark" ? "dark" : ""}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Dark Mode
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Search
            </button>
          </form>
          <div className="form-check form-switch mx-2 my-2">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={() => {
                setDarkMode(darkMode === "light" ? "dark" : "light");
              }}
            />
            <label
              className="form-check-label "
              htmlFor="flexSwitchCheckDefault"
              style={
                darkMode === "dark" ? { color: "white" } : { color: "black" }
              }
            >
              {darkMode === "dark" ? "Enable Light Mode" : "Enable Dark Mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;