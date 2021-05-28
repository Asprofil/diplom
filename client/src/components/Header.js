import React, { Component } from 'react'
import './Header.css'
import '../img/Logo.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Main from './Main'
import NewComplain from './NewComplain'
import AboutUs from './AboutUs'
import MyProfile from './MyProfile'
import DoctorList from './DoctorList'
import Login from './Login'
import SignIn from './SignIn'
  
  export default function Header (){
    return(
    <div className="header">
        <Navbar className="head" expand="lg">
  <Navbar.Brand href="/start"><img src='/img/Logo.png'></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="complain">New Complaint</Nav.Link>
      <Nav.Link href="about">About us</Nav.Link>
      <Nav.Link href="profile">My Profile</Nav.Link>
      <Nav.Link href="doctor">Doctor List</Nav.Link>
    </Nav>
    <Nav.Link href="login">Login</Nav.Link>
      <Nav.Link href="signin">Sign in</Nav.Link>
  </Navbar.Collapse>
</Navbar>
    </div>
    )
}

