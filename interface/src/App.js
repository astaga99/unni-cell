import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
  const [loginStatus, setloginStatus] = useState(true);

  const loginCallbackHandler = (result) => {
    setloginStatus(result)
  }

  return (
    <>
      <div className="container-fluid">

        {!loginStatus ? 
        <LoginPage></LoginPage> :
        <HomePage loginStatus={loginStatus} loginCallbackHandler={loginCallbackHandler}></HomePage>  
        }

      </div>
    </>
  );
};

export default App;
