import React from 'react';
import Navbar from '../components/Navbar';
import CurrentDate from "../components/CurrentDate";


function Home() {
    return (
        <div>
            <Navbar />
            <CurrentDate />
        <div className="container fake">
            <h3 className="h3">
                Find us 
            <div>
            <input type="search" placeholder="Search for Name or Company Name" className="form-control"/><p/>
            <button type="search" value="search" className="btn btn-success btn-block btn-lg green"><strong>Search</strong></button>
            </div>
            </h3>
            
        </div>
        </div>
    )
}

export default Home