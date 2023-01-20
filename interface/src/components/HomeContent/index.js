import React, {useState, useEffect} from 'react'
import './styles.css'
import { getItems } from '../../axios/itemAxios';
import Loading from '../../helpers/Loading';

const HomeContent = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    getItems(result => setItems(result)) }, [])
  

  return (
    <div className="container d-flex justify-content-center mt-50 mb-50">
      <div className="row">
        <div className="col-md-10">
          <div className="card card-body">
            <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
              <div className="mr-2 mb-3 mb-lg-0">
                <h1>
                  Welcome !
                </h1>
              </div>
              <div className="media-body">
                <ul className="list-inline list-inline-dotted mb-3 mb-lg-2">
                  <li className="list-inline-item">
                    <a href="#" className="text-muted" data-abc="true">
                      Phones
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="text-muted" data-abc="true">
                      Mobiles
                    </a>
                  </li>
                </ul>


                <ul className="list-inline list-inline-dotted mb-0">
                  <li className="list-inline-item">
                    All items from{" "}
                    <a href="#" data-abc="true">
                      Mobile point
                    </a>
                  </li>
                  <li className="list-inline-item">
                    Add to{" "}
                    <a href="#" data-abc="true">
                      wishlist
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-3 mt-lg-0 ml-lg-3 text-center">
                <h3 className="mb-0 font-weight-semibold">$459.99</h3>

                <div>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>

                <div className="text-muted">1985 reviews</div>

                <button type="button" className="btn btn-warning mt-4 text-white">
                  <i className="icon-cart-add mr-2"></i> Add to cart
                </button>
              </div>
            </div>
          </div>

          <div className="card card-body mt-3">
            <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
              <div className="mr-2 mb-3 mb-lg-0">
                <img
                  src="https://i.imgur.com/Aj0L4Wa.jpg"
                  width="150"
                  height="150"
                  alt=""
                />
              </div>

              <div className="media-body">
                <div className="media-title font-weight-semibold">
                  <div className='items-items'>
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
                      {
                        items.length > 0 ? 
                        items.map(item =>{
                          const {id, name, price} = item
                          return (
                            <tr key={id}>
                              <td>{id}</td>
                              <td>{name}</td>
                              <td>{price}</td>
                            </tr>
                          )
                        }) : 
                        <Loading></Loading>
                      }
                      </tbody>
                    </table>
                  </div>
                </div>

                <ul className="list-inline list-inline-dotted mb-3 mb-lg-2">
                  <li className="list-inline-item">
                    <a href="#" className="text-muted" data-abc="true">
                      Phones
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="text-muted" data-abc="true">
                      Mobiles
                    </a>
                  </li>
                </ul>

                <p className="mb-3">
                  256 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera |
                  15MP Front Camera A12 Bionic Chip Processor | Gorilla Glass
                  with high quality display{" "}
                </p>

                <ul className="list-inline list-inline-dotted mb-0">
                  <li className="list-inline-item">
                    All items from{" "}
                    <a href="#" data-abc="true">
                      Mobile junction
                    </a>
                  </li>
                  <li className="list-inline-item">
                    Add to{" "}
                    <a href="#" data-abc="true">
                      wishlist
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-3 mt-lg-0 ml-lg-3 text-center">
                <h3 className="mb-0 font-weight-semibold">$612.99</h3>

                <div>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>

                <div className="text-muted">2349 reviews</div>

                <button type="button" className="btn btn-warning mt-4 text-white">
                  <i className="icon-cart-add mr-2"></i> Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContent