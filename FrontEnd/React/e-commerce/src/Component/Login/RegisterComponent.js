import React from "react";
import './Login.css'
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";


const Register =()=>{

    return(
        <div class="login_conatiner1" id="login_here">
    <div class="row login_row">
      <div class="col-md-4 col-sm-4 col-4 bg-primary">
        <div class="p-md-3 text-wrap mt-3">
          <h4>Login</h4>
          <p class="text-wrap">Get access to your Orders, Wishlist and Recommendations</p>
        </div>
      </div>
      <div class="col-md-7 col-sm-7 col-7 bg-white">
        <div class="p-md-3 login_form mt-3">
          
          <form>
            <div class="form-floating mb-3 text-dark form-control-sm">
              <input type="email" class="form-control  login_input border border-end-0 border-start-0 border-top-0 form-control-sm" id="floatingInput" aria-describedby="emailHelp" placeholder="Please Enter Email/ Mobile no"/>
              <label for="floatingInput" class="text-black form-control-sm">Name</label>
            </div>
            <div class="form-floating mb-3 text-dark form-control-sm">
              <input type="email" class="form-control  login_input border border-end-0 border-start-0 border-top-0" id="floatingInput" aria-describedby="emailHelp" placeholder="Please Enter Email/ Mobile no"/>
              <label for="floatingInput" class="text-black">Email address</label>
            </div>
            <div class="form-floating mb-3 form-control-sm">
              <input type="password" class="form-control border border-end-0 border-start-0 border-top-0" id="exampleInputPassword1"placeholder="Please Enter Password"/>
              <label for="exampleInputPassword1" class="text-black">Password</label>

            </div>
            <div class="form-floating mb-3 form-control-sm">
              <input type="password" class="form-control border border-end-0 border-start-0 border-top-0" id="exampleInputPassword1"placeholder="Please Enter Password"/>
              <label for="exampleInputPassword1" class="text-black">Confirm Password</label>

            </div>
            <div class="form-floating mb-3 text-dark form-control-sm">
              <input type="text" class="form-control-sm form-control  login_input border border-end-0 border-start-0 border-top-0" id="floatingInput" aria-describedby="emailHelp" placeholder="Please Enter Email/ Mobile no"/>
              <label for="floatingInput" class="text-black">Mobile Number</label>
            </div>
            
            <button type="submit" class=" btn container-fluid button_primary text-white">Submit</button>
          </form>

          
        </div>
      </div>
      <div class="col-md-1 col-sm-1 col-1 bg-transparent text-black">
      <Link to={`/`}>
        <span class="text-black cancel_it"><i class="fa-solid fa-xmark text-black"></i></span>
        </Link>
      </div>
     
    </div>
    
  </div>
    )
}

export default Register