import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { LoginPage, HomePage } from "./pages/Home";

function App() {
  const [loginStatus, setloginStatus] = useState(false);

  const loginCallbackHandler = (result) => {
    setloginStatus(result)
  }
  useEffect(() => {
    if(localStorage.getItem("access_token")){
      setloginStatus(true)
    } else {
      setloginStatus(false)
    }
  }, [loginStatus])

  return (
    <>
      <div className="container-fluid">
        {loginStatus ?
          <HomePage loginStatus={loginStatus} loginCallbackHandler={loginCallbackHandler}></HomePage> :
          <LoginPage loginCallbackHandler={loginCallbackHandler}></LoginPage>
        }
      </div>
    </>
  );
};

export default App;
