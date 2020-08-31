import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../App.css';
// import { BrowserRouter as Router, Link, NavLink, } from 'react-router-dom';
// import Route from 'react-router-dom/Route';
import Navbar from '../components/Navbar';
import './css/page.css'


function Admin() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <h3>Welcome Admin Register staff details here</h3>
                <div className="row">
                    <div className="col-md-9 background font">
                        <p></p>
                        {/* <div className="container "> */}
                        <label for="Name">Name</label><br />
                        <input type="text" required="yes" placeholder="input staff name" className="form-control" /><br />

                        <label for="Email">Email</label><br />
                        <input type="email" required="yes" placeholder="input staff email address" className="form-control" /><br />

                        <label for="Address">Address</label><br />
                        <textarea required="yes" placeholder="input staff address" className="form-control" /><br />

                        <label for="State of Origin">State of Origin</label><br />
                        <input type="password" required="yes" placeholder="input staff state of origin" className="form-control" /><br />

                        <label for="State of Origin">Phone Number</label><br />
                        <input type="number" required="yes" placeholder="input staff phone number" className="form-control" /><br />
                        {/* </div> */}
                    </div>
                    <div className="col-md-3">
                        <div className="">
                            <h1>Who you</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Admin;