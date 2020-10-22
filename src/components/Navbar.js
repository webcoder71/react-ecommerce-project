import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import logo from '../logo2.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
          
          {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}

        <Link to='/'>
          <img src={logo} alt="" className="navbar-brand"/>
        </Link>
          <ul className="navbar-nav align-item-center">
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link">Products</Link>
            </li>
          </ul>
          <Link to='/cart' className="ml-auto">
            <ButtonContainer><span className='mr-2'><i className="fas fa-cart-plus" /></span> my cart</ButtonContainer>
          </Link>
          
        </NavWrapper>
      </div>
    )
  }
}


const NavWrapper = styled.nav`
    background: var(--mainBlue)!important;
    .nav-link{
      color: var(--mainWhite)!important;
      font-size:1.3rem;
      text-transform: capitalize;
    }
`;