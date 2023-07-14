import React from "react";
import './Login.css'
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";


const Login =()=>{

    return(
        <div className="login_conatiner" id="login_here">
    <div className="row login_row">
      <div className="col-md-4 col-sm-4 col-4 bg-primary login1">
        <div className="p-md-3 text-wrap text-white mt-3 text-white login1">
          <h4 className="login1">Login</h4>
          <p className="text-wrap login1">Get access to your Orders, Wishlist and Recommendations</p>
        </div>
      </div>
      <div className="col-md-7 col-sm-7 col-7 bg-white">
        <div className="p-md-3 login_form mt-3">
          
          <form>
            <div className="form-floating mb-3 text-dark">
              <input type="email" className="form-control  login_input border border-end-0 border-start-0 border-top-0" id="floatingInput" aria-describedby="emailHelp" placeholder="Please Enter Email/ Mobile no"/>
              <label for="floatingInput" className="text-black">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control border border-end-0 border-start-0 border-top-0" id="exampleInputPassword1"placeholder="Please Enter Password"/>
              <label for="exampleInputPassword1" className="text-black">Password</label>

            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label text-black fs-6 fw-light " for="exampleCheck1">By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</label>
            </div>
            <button type="submit" className=" btn container-fluid button_primary text-white">Submit</button>
          </form>

          <div className="sign_up_conatiner mt-3 text-center">
            {/* <a href="#" > */}
            <Link to={`/signUp`}>
              New to Flipkart? Create an account
              </Link>
            {/* </a> */}
          </div>
        </div>
      </div>
      <div className="col-md-1 col-sm-1 col-1 bg-transparent text-black">
        <Link to={`/`}>
            <span className="text-black cancel_it" ><i className="fa-solid fa-xmark text-black"></i></span>
        </Link>
      </div>
    </div>
    
  </div>
    )
}

export default Login