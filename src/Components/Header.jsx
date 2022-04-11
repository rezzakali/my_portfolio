import React from "react";
import { NavLink } from "react-router-dom";
import "../Components/Styles/Header.css";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light container">
        <div className="container-fluid">
          <h5 className="navbar-brand">
            <i className="bx bxl-c-plus-plus">
              <span style={{ color: "#E83A14" }}>P</span>.folio
            </i>
          </h5>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item mx-3">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home.
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink className="nav-link" to="/about">
                  About me.
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink className="nav-link" to="/contact">
                  Contact me.
                </NavLink>
              </li>
            </ul>
            <NavLink
              to="/contact"
              className="btn btn-danger"
              style={{
                textTransform: "capitalize",
                backgroundColor: "#E83A14",
                outline: "none",
                boxShadow: "none",
              }}
            >
              Hire Me
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
