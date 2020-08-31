import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {BrowserRouter as Router, Link, NavLink,} from 'react-router-dom';
import Route from 'react-router-dom/Route';

function Login(){
    return(
        <div className="container">
            <h2>Kindly Login</h2>
            <div row>
                <div className="col-md-7">
                    <form method="POST">
                        <label for="Company Name">Company Name or Email Address</label><br/>
                        <input type="text" required="yes" placeholder="Company Name or Email Address" className="form-control" /><br/>
                        <label for="Password">Password</label><br/>
                        <input type="password" required="yes" className="form-control" placeholder="Input password"/><br/>
                        <button className="btn btn-success btn-block btn-lg green" value="Login">Login</button>
                    </form>
                </div>
                <div className="col-md-1">
                   
                </div>
                <div className="col-md-4">
                    <div>
                        <strong>About Us</strong>
                        <p></p>
                        <p>Find us is an online platform that helps individual’s, or governmental or non -governmental companies to find other companies and their board of members.
This is to tackle the fake identity which people usually use to defraud, deceive an individual’s, governmental or non -governmental companies.
</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;