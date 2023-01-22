import React from "react";
import { Outlet } from "react-router-dom";
import "./BrandsPage.css";

const BrandsPage = () => {
  return (
   <div className="brands-page">
    <Outlet></Outlet>
   </div>
  );
};

export default BrandsPage;
