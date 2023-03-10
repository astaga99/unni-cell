import React from "react";
import './ListItem.css'
// import { deleteItem } from "../../axios/itemAxios";
import { useEffect, useState } from "react";
import Loading from "../../helpers/Loading";
import { TbPlus } from "react-icons/tb";
import { Link } from "react-router-dom";
import axios from "axios";


const ListItem = () => {
  const URL = "http://localhost:3000/api/items";
  const [items, setItems] = useState([]);

  useEffect(() => {getItems()}, []);

  const getItems = async () => {
    const result = await axios.get(URL);
    setItems(result.data)
  }

  const deleteItem = async (id) => {
    try {
        await axios.delete(URL + '/' + id);
        getItems()
    } catch (e) {
        console.log(e)
    }
  }

  return (
    <div className="container d-flex justify-content-center mt-20 mb-50">
      <div className="card card-body mt-3">
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <h1>DAFTAR VOUCHER</h1>
            </div>
            <div className="col">
              <Link to="add"
                className="btn btn-outline-danger btn-rounded">
                  <span>
                     <TbPlus></TbPlus>
                 </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row p-3">
          <table className="table table-responsive-lg table-hover">
            <thead>
              <tr>
                <th></th>
                <th>Voucher</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items.length > 0 ? (
                items.map((item) => {
                  const { id, name, image, price, stock, createdAt } = item;
                  return (
                    <tr key={id}>
                      <td>{image}</td>
                      <td>{name}</td>
                      <td>{price}</td>
                      <td>{stock}</td>
                      <td>
                        <Link
                          to={`/items/edit/${id}`}
                          type="button"
                          className="btn btn-outline-danger btn-sm text-decoration-none"
                        >
                          Edit
                        </Link>

                        <button
                          onClick={() => deleteItem(id)}
                          type="button"
                          className="btn btn-outline-secondary btn-sm"
                        >
                          Del
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <Loading></Loading>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
