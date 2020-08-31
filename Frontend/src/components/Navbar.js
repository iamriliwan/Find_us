import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
// import "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js";
import '../App.css';
// import $ from "jquery";
import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <div className="container-fluid">
            <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <Link to="/" className="navbar-brand" id="find">Findus</Link>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <li className=""><Link to="/" className="bold"></Link></li>
        {/* <li><a href="#" className="bold">Page 1</a></li>
        <li><a href="#" className="bold">Page 2</a></li>
        <li><a href="#" className="bold">Page 3</a></li> */}
      </ul>
      <ul className="nav navbar-nav navbar-right">

        <li><Link to="/Signup" className="bold"><span className="glyphicon glyphicon-user" ></span> Sign Up</Link></li>
        <li><Link to="/login" className="bold"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
        <li><Link to="../Admin" className="bold"><span className="glyphicon glyphicon-Admin"></span> Admin</Link></li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar;