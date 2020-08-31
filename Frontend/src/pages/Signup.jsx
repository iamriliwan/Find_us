import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
// import {BrowserRouter as Router, Link, NavLink, BrowserRouter,} from 'react-router-dom';
// import {Link} from 'react-router-dom'
// import Route from 'react-router-dom/Route';
import Navbar from "../components/Navbar";

function Signup() {
  return (
      <div>
      <Navbar/>
        <div className="container align">
            <form method="POST">
              <div className="row signup">
                <h2>New users kindly signup here</h2>
            <div className="col-md-12">
          <label for="Name">Name</label><br/>
          <input type="text" required="yes" placeholder="input your company" className="form-control"/><br/>

          <label for="Email">Email</label><br/>
          <input type="email" required="yes" placeholder="input email address" className="form-control"/><br/>

          <label for="Email">Password</label><br/>
          <input type="password" required="yes" placeholder="input password" className="form-control"/><br/>

          <label for="Email">Confirm Password</label><br/>
          <input type="password" required="yes" placeholder="confirm  password" className="form-control"/><br/>
        </div>
        </div>
        <button className="btn btn-success btn-block btn-lg green" value="Signup">Sign up</button><br/>
        {/* <h4 className="signup"> Already have an account? you can <Link to="/login" className="signup">Login</Link> here</h4> */}
        </form>       
      </div>
      </div>
  );
}
export default Signup;
