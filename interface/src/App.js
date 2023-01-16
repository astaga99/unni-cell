import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar } from "./components"

function App() {
  const [loginStatus, setloginStatus] = useState(false);

  const loginCallbackHandler = (result) => {
    setloginStatus(result)
  }

  return (
    <>
      <div className="container-fluid">
        <Navbar loginStatus={loginStatus} loginCallbackHandler={loginCallbackHandler}></Navbar>


        <p>Login status</p>
        <p>{JSON.stringify(loginStatus)}</p>
      </div>
    </>
  );
}

export default App;
