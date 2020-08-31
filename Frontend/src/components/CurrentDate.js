import React from "react";
import { Component } from "react";
// import logo from './logo.svg';
import '../App.css';

class Current_Date extends Component {
  state = {
    date: new Date(),
  };

  call() {
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }
  render() {
    return (
      <div>
        <h3  className="App ">{this.state.date.toLocaleTimeString()}</h3>
        {this.call()}
      </div>
    );
  }
}

export default Current_Date;
