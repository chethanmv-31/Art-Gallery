import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg  border-body ">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            <img src="/images/logo.png" height="60px" width="150px" />
          </a>
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
          <div
            className="collapse navbar-collapse text-white"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to={"/"}
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className="justify-content-center d-flex mt-3 align-items-center"
        style={{ height: "41vh" }}
      >
        <input type="text" className="inputField" placeholder="Search" />
        <button className="searchButton">Search</button>
      </div>
    </div>
  );
}

export default Header;
