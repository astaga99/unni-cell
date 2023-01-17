import React from 'react'
import Navbar from '../components/Navbar/index.';

const HomePage = (props) => {
  const {loginStatus, loginCallbackHandler} = props;

  return (
    <>
        <Navbar loginStatus={loginStatus} loginCallbackHandler={loginCallbackHandler}></Navbar>
        <h1>Home</h1>

        <p>Login status</p>
        <p>{JSON.stringify(loginStatus)}</p>
    </>
  )
}

export default HomePage