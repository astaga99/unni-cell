import React, { useState, useEffect } from "react";
import "./styles.css";
import { getItems } from "../../axios/itemAxios";
import Loading from "../../helpers/Loading";
import { FaQuoteLeft } from 'react-icons/fa'
import axios from "axios";

const HomeContent = () => {
  const [items, setItems] = useState([]);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    getItems((result) => setItems(result));
  }, []);

  const getQuotes = async () => {
    try {
      const result = await axios.get("https://api.quotable.io/random");
      console.log(result.data.content)
      setQuotes(result.data.content)

    } catch (e) {
      console.log(e)
    }
  }    

  return (
    <div className="container mt-3">
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
                            <button 
                                class="btn btn-sm btn-outline danger"
                                onClick={getQuotes}>
                              < i className="fa fa-quote-left text-white">
                              <FaQuoteLeft></FaQuoteLeft>
                              </i> 
                            </button>
                          </div>
                            {<p>{quotes}</p>}           
                          <footer class="blockquote-footer pt-4 mt-4 border-top">
                            Pepatah bijak
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
                <h3>List Voucher</h3>
              </div>
            </div>

            <div className="card card-body mt-3">
              <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row p-3">
                <div className="items-items">
                  <table className="table table-responsive table-hover">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Voucher</th>
                        <th>Price</th>
                        <th>Stock</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.length > 0 ? (
                        items.map((item) => {
                          const { id, name, price, stock, image } = item;
                          return (
                            <tr key={id}>
                              <td>{image}</td>
                              <td>{name}</td>
                              <td>{price}</td>
                              <td>{stock}</td>
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
