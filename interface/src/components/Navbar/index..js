import React, { useState } from "react";

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
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Items
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Brand
                </a>
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
