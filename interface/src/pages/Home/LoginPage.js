import React, {useState} from 'react'
import axios from 'axios'

const LoginPage = (props) => {
  const {loginCallbackHandler} = props;
  const [form, setForm] = useState({
    email:'',
    password:''
  });
  
  const loginAdmin = async () => {
    try {
      let result = await axios({
        method:'POST',
        url:'http://localhost:3000/api/admins/login',
        data:form
      })
      
      const access_token = result.data.access_token_admin;
      localStorage.setItem("access_token", access_token)
      
      loginCallbackHandler()
      
    } catch (err) {
      console.log(err)
    }
  }
  
  const submitHandler = () => {
    loginAdmin()
  }
  return (
    <>
      <div className="login-form">
        <form className='login-form-center'>
          <h2 className="text-center">UNNI-CELL</h2>
          <div className="form-group">
            <input
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              type="email"
              className="form-control"
              placeholder="Email"
              required="required"
            />
            <input
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              type="password"
              className="form-control"
              placeholder="Password"
              required="required"
            />
          </div>
          <div className="text-center p-4">
            <button 
              onClick={() => submitHandler()}
              type="submit"
              className="btn btn-secondary btn-block mx-auto"
            >
              Login
            </button>
          </div>
          <p className="text-center">
            <a href="#"></a>
          </p>
        </form>
        <p className="text-center small">Copyright by astaga99</p>
      </div>
    </>
  );
}

export default LoginPage