import React from "react";
import "./styles.css";
import { getItems } from "../../axios/itemAxios";
import { useEffect, useState } from "react";
import Loading from "../../helpers/Loading";
import { TbPlus } from "react-icons/tb";

const ItemContent = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems((result) => setItems(result));
  }, []);
  return (
    <div className="container d-flex justify-content-center mt-20 mb-50">
      <div className="card card-body mt-3">
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <h1>DAFTAR VOUCHER</h1>
            </div>
            <div class="col">
              <button
                className="btn btn-outline-danger btn-rounded">
                <TbPlus></TbPlus>
              </button>
            </div>
          </div>
        </div>

        <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row p-3">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th></th>
                <th>Voucher</th>
                <th>Date Created</th>
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
                      <td>{createdAt}</td>
                      <td>{price}</td>
                      <td>{stock}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                        >
                          Danger
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
          <div class="clearfix">
            <div class="hint-text">
              Showing <b>10</b> out of <b>100</b> entries
            </div>
            <ul class="pagination">
              <li class="page-item disabled">
                <a href="#">Previous</a>
              </li>
              <li class="page-item">
                <a href="#" class="page-link">
                  1
                </a>
              </li>
              <li class="page-item">
                <a href="#" class="page-link">
                  2
                </a>
              </li>
              <li class="page-item active">
                <a href="#" class="page-link">
                  3
                </a>
              </li>
              <li class="page-item">
                <a href="#" class="page-link">
                  4
                </a>
              </li>
              <li class="page-item">
                <a href="#" class="page-link">
                  5
                </a>
              </li>
              <li class="page-item">
                <a href="#" class="page-link">
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemContent;
