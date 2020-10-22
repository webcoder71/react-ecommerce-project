import React, { Component } from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

export default class App2 extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-6"> <h2 className="bg-dark text-white">Hello</h2></div>
            <div className="col-6">Coloumn tow</div>
          </div>
        </div>
      </div>
    )
  }
}
