import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import ErrorPage from './components/ErrorPage'

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route path="/details" component={ProductDetails}></Route>
          <Route path="/cart" component={Cart}></Route>
          
          <Route component={ErrorPage}></Route>
        </Switch>
        
      </React.Fragment>
    )
  }
}
