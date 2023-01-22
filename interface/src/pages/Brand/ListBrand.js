import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../../helpers/Loading";

const ListBrand = () => {
  const URL = "http://localhost:3000/api/brands";
  const [brands, setBrands] = useState([]);

  useEffect(() => {getBrands()}, []);

  const getBrands = async () => {
    const result = await axios.get(URL);
    setBrands(result.data)
  }

  const deleteItem = async (id) => {
    try {
        await axios.delete(URL + '/' + id);

    } catch (e) {
        console.log(e)
    }
  }

  return (
    <div className="box">
      <div className="container">
        <div className="row">
        {brands.length > 0 ? (
                brands.map((brand) => {
                  const { id, name, address, website } = brand;
                  return (
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="box-part text-center">
                      <div className="title" key={id}>
                        <h1>{name}</h1>
                        <h3>{address}</h3>
                        <h3>{website}</h3>
                      </div>
                    </div>
                  </div>
                  );
                })
              ) : (
                <Loading></Loading>
              )}
        </div>
      </div>
    </div>
  );
};

export default ListBrand;
