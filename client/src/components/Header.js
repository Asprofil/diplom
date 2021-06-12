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
import axios from "axios"

function logout() {
  localStorage.removeItem('User');
  window.location.reload();
}
class Header extends Component{
    constructor(props){
      super(props)
      this.state={
          user:[]
      }
  }
  componentDidMount(){
    axios.get('http://localhost:3000/api/v1/users/'+localStorage.getItem('User'))
    .then(response=>{
        console.log(response)
        this.setState({user:response.data})
        console.log(this.state)
    })
    .catch(error=>{
        console.log(error)
    })
  }
  render(){
    const{user}=this.state
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
    {localStorage.getItem("User")?
    <div className="right">
      <div>
      <p className="link">
          {user.userName}
      </p>
      </div>
      <div>
      <Nav.Link className="link" onClick={logout}>Log out</Nav.Link>
      </div>
    </div>:
    <Nav.Link>
      <Link className="link" to="/login">Login</Link>
      <Link className="link" to="/signin">Sign in</Link>
    </Nav.Link>
      }
  </Navbar.Collapse>
</Navbar>
    </div>
    )
}

}
export default Header