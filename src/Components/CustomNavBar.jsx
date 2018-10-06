import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavBar.css';

export default class CustomNavBar extends Component {
  render() {

    return (
      <div class="topnav" id="myTopnav">
        <a href="/" >Home</a>
        <a href="/CreateProfile">CreateProfile</a>
        <a href="/CreateJob">CreateJob</a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
        </a>
      </div>
    )
  }
}