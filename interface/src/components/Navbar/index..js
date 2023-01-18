import React, { useState } from "react";
import { Link } from "react-router-dom"

const Navbar = (props) => {
  const {loginStatus, loginCallbackHandler} = props;  

  const loginHandler = () => {
    loginCallbackHandler(true);
  };

  const logoutHandler = () => {
    localStorage.clear()
    loginCallbackHandler(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger bg-gradient">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Unni-Cell
          </a>
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
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/brands">
                  Brand
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/items">
                  Item
                </Link>
              </li>
              <li className="nav-item">
                {loginStatus ? (
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => logoutHandler()}
                  >
                    Logout
                  </a>
                ) : (
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => loginHandler()}
                  >
                    Login
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
