import React from 'react'
import { Outlet } from 'react-router-dom';

const ItemPage = () => {
  
  return (
    <div className="container d-flex justify-content-center mt-20 mb-50">
      <div className="card card-body mt-3">
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default ItemPage