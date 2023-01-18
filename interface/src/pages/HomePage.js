import React from 'react'
import { 
  Navbar, 
  HomeContent 
} from '../components';
import {
  Routes,
  Route
} from 'react-router-dom'
import ItemPage from './ItemPage';
import BrandPage from './BrandPage';

const HomePage = (props) => {
  const {loginStatus, loginCallbackHandler} = props;

  return (
    <>
      <div className="homepage-container">
        <Navbar
          loginStatus={loginStatus}
          loginCallbackHandler={loginCallbackHandler}
        ></Navbar>
        <Routes>
          <Route path="/" element={<HomeContent></HomeContent>}></Route>
          <Route path="/items" element={<ItemPage></ItemPage>}></Route>
          <Route path="/brands" element={<BrandPage></BrandPage>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default HomePage