import React from 'react';
// import ReactDOM from 'react-dom';
import '../index.css';
// import Navbar from './Navbar';
import signup from '../pages/Signup'
// import * as serviceWorker from '../serviceWorker';
import Login from '../pages/Login'
// import Admin from './Admin'
// import Current_Date from './Current_Date.js'
// import { useRoutes } from "hookrouter"
// import Body from './Body'
import { Switch, Route } from 'react-router-dom';
import Home from "../pages/Home"
import Admin from '../pages/Admin';



function App(){

    return(
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/signup" component={signup}></Route>
            <Route exact path="/Admin" component={Admin}></Route>
        </Switch>
    )
   
}

// {/* <BrowserRouter>
// </BrowserRouter> */}

export default App;