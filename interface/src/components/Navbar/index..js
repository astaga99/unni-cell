import React, { useState } from "react";

const Navbar = (props) => {
  const {loginStatus, loginCallbackHandler} = props;  

  const loginHandler = () => {
    loginCallbackHandler(true);
  };

  const logoutHandler = () => {
    loginCallbackHandler(false);
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Unni-Cell
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Items
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Brand
                </a>
              </li>
              <li class="nav-item">
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
