import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../App.css';
// import {BrowserRouter as Router, Link, NavLink,} from 'react-router-dom';
// import Route from 'react-router-dom/Route';
import Navbar from '../components/Navbar';
import './css/page.css'


function Login() {
    return (
        <div>
            <Navbar />
            <div className="container align">
                <h2 className="login2">Kindly Login</h2>
                <div className="row" className="login">
                    <div className="col-md-12">
                        <form method="POST">
                            <label for="Company Name" className="login">Company Name or Email Address</label><br />
                            <input type="text" required="yes" placeholder="Company Name or Email Address" className="form-control" /><br />
                            <label for="Password">Password</label><br />
                            <input type="password" required="yes" className="form-control" placeholder="Input password" /><br />
                            <button className="btn btn button btn-block btn-lg green" value="Login">Login</button>
                        </form>
                        <h4>About Us</h4>
                        <p className="About_us">Find us is an online platform that helps individual’s, or governmental or non -governmental companies to find other companies and their board of members.
                        This is to tackle the fake identity which people usually use to defraud, deceive an individual’s, governmental or non -governmental companies.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;