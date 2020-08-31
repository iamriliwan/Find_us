import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {BrowserRouter as Router, Link, NavLink,} from 'react-router-dom';
import Route from 'react-router-dom/Route';


function Body(){
    return(
        <div className="container fake">
            <h3 className="h3">
                Find us 
            <div>
            <input type="search" placeholder="Search for Name or Company Name" className="form-control"/><p/>
            <button type="search" value="search" className="btn btn-success btn-block btn-lg green"><strong>Search</strong></button>
            </div>
            </h3>
            
        </div>
    )
}

export default  Body;