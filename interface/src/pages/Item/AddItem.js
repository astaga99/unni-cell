import React, {useState} from 'react'
import './AddItem.css'

const AddItem = () => {
  const [form, setForm] = useState({
    name:"",
    price:0,
    stock:0
  })

  const submitHandler = () => {
    console.log(form)
  }

  return (
    <div className='tambah-voucher d-flex p-3 justify-content-center'>
        <form>
          <div className='mx-auto'>
            <h1>Tambah Voucher</h1>
          </div>
            {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
            <div className="row my-4">
                <div className="form-outline w-500">
                  <input
                    type="text"
                    id="form3Example1"
                    className="form-control"
                  />
                  <label className="form-label" for="form3Example1">
                    Nama
                  </label>
                </div>
            </div>

            {/* <!-- Email input --> */}
            <div className="form-outline my-5">
              <input type="email" id="form3Example3" className="form-control" />
              <label className="form-label" for="form3Example3">
                Price
              </label>
            </div>

            {/* <!-- Password input --> */}
            <div className="form-outline my-5">
              <input
                type="password"
                id="form3Example4"
                className="form-control"
              />
              <label className="form-label" for="form3Example4">
                Stock
              </label>
            </div>

            {/* <!-- Submit button --> */}
            <button type="submit" className="btn btn-outline-danger">
              Add
            </button>
          </form>
        </div>
  )
}

export default AddItem