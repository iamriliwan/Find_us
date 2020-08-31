import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import {BrowserRouter as Router, Link, NavLink, BrowserRouter,} from 'react-router-dom';
import Route from 'react-router-dom/Route';

function Signup() {
  return (
    <BrowserRouter>
    <div className="container">
            <form method="POST">
              <div className="row">
            <div className="col-md-6">
          <label for="Name">Name</label><br/>
          <input type="text" required="yes" placeholder="input your company" className="form-control"/><br/>

          <label for="Email">Password</label><br/>
          <input type="password" required="yes" placeholder="input password" className="form-control"/><br/>
        </div>

        <div className="col-md-6">
        <label for="Email">Email</label><br/>
          <input type="email" required="yes" placeholder="input email address" className="form-control"/><br/>
          
          <label for="Email">Confirm Password</label><br/>
          <input type="password" required="yes" placeholder="confirm  password" className="form-control"/><br/>
        </div>
        </div>
        <button className="btn btn-success btn-block btn-lg green" value="Signup">Sign up</button><br/>
        <p> Already have an account? you can <a href="">Login</a> here</p>
        </form>       
      </div>
      </BrowserRouter>
  );
}
export default Signup;
