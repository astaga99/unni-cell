import React, { useState, useEffect } from "react";
import axios from "axios";

const ListBrand = () => {
  const URL = "http://localhost:3000/api/brands";
  const [brands, setBrands] = useState();

  useEffect(() => {
    getBrands();
  }, []);

  const getBrands = async () => {
    const result = await axios.get(URL);
    setBrands(result.data);
  };

  return (
    <div className="box">
      <div className="container">
        test
        </div>
      </div>
  );
};

export default ListBrand;
