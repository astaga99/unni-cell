import React from "react";
import { Navbar, HomeContent } from "../../components";
import { Routes, Route } from "react-router-dom";
import { ItemPage, ListItem, AddItem } from "../Item";
import { BrandsPage } from "../Brand";
import UpdateItem from "../Item/UpdateItem";

const HomePage = (props) => {
  const { loginStatus, loginCallbackHandler } = props;

  return (
    <div className="homepage-container">
      <Navbar
        loginStatus={loginStatus}
        loginCallbackHandler={loginCallbackHandler}
      ></Navbar>
      <Routes>
        <Route path="" element={<HomeContent></HomeContent>}></Route>
        <Route path="items" element={<ItemPage></ItemPage>}>
          <Route path="" element={<ListItem></ListItem>}></Route>
          <Route path="add" element={<AddItem></AddItem>}></Route>
          <Route path="edit">
            <Route path=":id" element={<UpdateItem></UpdateItem>}></Route>
          </Route>
        </Route>
        <Route path="brands" element={<BrandsPage></BrandsPage>}></Route>
      </Routes>
    </div>
  );
};

export default HomePage;
