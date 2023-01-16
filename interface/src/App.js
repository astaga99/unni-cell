import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './components'
import { Navbar } from './components';

function App() {
  return (
    <>
      <div className="App">
        <Navbar>
          <h1>Login Register</h1>
        </Navbar>
      </div>
    </>
  );
}

export default App;
