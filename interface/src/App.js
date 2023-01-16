import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './components'
import { Navbar, Sidebar } from './components';

function App() {
  const [loginStatus, setloginStatus] = useState(false);

  const loginHandler = () => {
      setloginStatus(true)
  }

  return (
    <>
      <div className="App">
          <h1>Login Register</h1>

          <p>Login status</p>
          <p>{JSON.stringify(loginStatus)}</p>

          <button onClick={() => loginHandler()}>Login</button>
      </div>
    </>
  );
}

export default App;
