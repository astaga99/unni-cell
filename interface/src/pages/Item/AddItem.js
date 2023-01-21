import React, { useState } from 'react'
import './AddItem.css'
import { addItem } from '../../axios/itemAxios'

const TambahVoucher = () => {
  const [form, setForm] = useState ({
    name:"",
    image:"testimage",
    price:0,
    stock:0
    })

  const submitHandler = () => {
    addItem(form)
  }

  return (
    <div className='tambah-voucher d-flex p-3 justify-content-center'>
      <div className='card p-5 shadow border border-danger'>
        <form>
          <div className='mx-auto'>
            <h3>Tambah Voucher</h3>
          </div>
            {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
            <div className="row my-4">
                <div className="form-outline">
                  <input
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    type="text"
                    className="form-control"
                  />
                  <label className="form-label">
                    Nama
                  </label>
                </div>
            </div>

            {/* <!-- Email input --> */}
              <div className="form-outline my-5">
                  <input 
                      onChange={(e) => setForm({ ...form, price: e.target.value })}
                      type="text" 
                      className="form-control" />
                  <label className="form-label">
                Price
                  </label>
              </div>

            {/* <!-- Password input --> */}
            <div className="form-outline my-5">
              <input
                onChange={(e) => setForm({ ...form, stock: e.target.value })}
                type="text"
                className="form-control"
              />
              <label className="form-label">
                Stock
              </label>
            </div>

            {/* <!-- Submit button --> */}
            <button 
              onClick={() => submitHandler()}
              className="btn btn-outline-danger">
              Add
            </button>
          </form>
          </div>
        </div>
  )
}

export default TambahVoucher