import React, { Component } from 'react'
import './Header.css'
import '../img/Logo.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
  
  export default function Header (){
    return(
    <div className="header">
        <Navbar className="head" expand="lg">
  <Navbar.Brand><Link to="/"><img src='/img/Logo.png'></img></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link><Link className="link" to="/complain">New Complaint</Link></Nav.Link>
      <Nav.Link><Link className="link" to="/about">About us</Link></Nav.Link>
      <Nav.Link><Link className="link" to="/profile">My Profile</Link></Nav.Link>
      <Nav.Link><Link className="link" to="/doctor">Doctor List</Link></Nav.Link>
    </Nav>
    <Nav.Link><Link className="link" to="/login">Login</Link></Nav.Link>
      <Nav.Link><Link className="link" to="/signin">Sign in</Link></Nav.Link>
  </Navbar.Collapse>
</Navbar>
    </div>
    )
}

