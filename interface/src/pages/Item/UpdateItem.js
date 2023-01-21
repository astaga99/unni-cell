import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './AddItem.css'
import { editItem, dataItem } from '../../axios/itemAxios'

const UpdateItem = () => {
  const [form, setForm] = useState ({
    name:"",
    image:"testimage",
    price:0,
    stock:0
    })

  const navigation = useNavigate()
  const params = useParams()

  useEffect(() => {
    const { id } = params;
    dataItem(+id, (result) => {
      setForm({
        name: result.name,
        image: result.image,
        price: result.price,
        stock: result.stock,
      });
    });
  }, []);


  const submitHandler = () => {
    editItem(+params.id, form)
    navigation('/items')
  }

  return (
    <div className='tambah-voucher d-flex p-3 justify-content-center'>
      <div className='card p-5 shadow border border-danger'>
        <form>
          <div className='mx-auto'>
            <h3>Update Voucher</h3>
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
              Update
            </button>
          </form>
          </div>
        </div>
  )
}

export default UpdateItem