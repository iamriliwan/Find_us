import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Admin(){
    return(
        <div className="container-fluid">
            <div className="container">
            <h2>Welcome Admin</h2>
            <div row>
                <div className="col-md-7">
                    <form method="POST">
                        <label for="Company Name">Staff Name</label><br/>
                        <input type="text" required="yes" placeholder="Full-name" className="form-control" /><br/>

                        <label for="Company Name">Position</label><br/>
                        <input type="text" required="yes" placeholder="Position" className="form-control" /><br/>

                        <label for="Password">Passport</label><br/>
                        <input type="file" required="yes" className="form-control" placeholder="Attach Passport"/><br/>
                        <button className="btn btn-success btn-block btn-lg green " value="Login">Add to company</button>
                    </form>
                </div>

                <div className="col-md-4">
                    <div>
                        <strong>About Us</strong>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Admin;