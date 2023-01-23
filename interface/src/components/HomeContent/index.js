import React, { useState, useEffect } from "react";
import "./styles.css";
import { getItems } from "../../axios/itemAxios";
import Loading from "../../helpers/Loading";
import { FaQuoteLeft } from 'react-icons/fa'

const HomeContent = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems((result) => setItems(result));
  }, []);

  return (
    <div className="container d-flex justify-content-center mt-50 mb-50">
      <div className="row">
        <div className="col-md-10">
          <div className="card card-body">
            <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
              <div className="mr-2 mb-3 mb-lg-0">
                <h1>Welcome, Asep !</h1>
              </div>
            </div>
          </div>

          <div className="card card-body mt-3">
            <div className="mr-2 mb-3 mb-lg-0 text-center">
              <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                  <div class="col col-md-9 col-lg-7 col-xl-5">
                    <div class="card">
                      <div class="card-body">
                        <blockquote class="blockquote blockquote-custom bg-white px-3 pt-4">
                          <div class="blockquote-custom-icon bg-danger shadow-1-strong">
                            <i class="fa fa-quote-left text-white"><FaQuoteLeft></FaQuoteLeft></i>
                          </div>
                          <p class="mb-0 mt-2 font-italic">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo."
                          </p>
                          <footer class="blockquote-footer pt-4 mt-4 border-top">
                            Someone famous in
                            <cite title="Source Title">Source Title</cite>
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card card-body mt-3">
            <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
              <div className="mr-2 mb-3 mb-lg-0">
                <h1>Daftar item</h1>
              </div>
            </div>

            <div className="media-body">
              <div className="media-title font-weight-semibold">
                <div className="items-items">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.length > 0 ? (
                        items.map((item) => {
                          const { id, name, price } = item;
                          return (
                            <tr key={id}>
                              <td>{id}</td>
                              <td>{name}</td>
                              <td>{price}</td>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
