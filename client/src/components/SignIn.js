import react, { Component } from 'react'
import './SignIn.css'
import Header from './Header.js'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from "axios"
class SignIn extends Component{
  constructor(props){
    super(props)
    this.state={
      email:'',
      password:'',
      firstName:'',
      lastName:'',
      userName:'',
    }
}
ChangeHandler=(e)=>{
  this.setState({[e.target.name]:e.target.value})
}

submitHandler=(e)=>{
e.preventDefault()
console.log(this.state)
axios.post('http://localhost:3000/api/v1/users/signup', this.state)
.then(response =>{
console.log(response)
window.location.replace("http://localhost:3000/");
})
.catch(error=>{
  console.log(error)
})
}
  render(){
    const{email,password,firstName,lastName,userName}=this.state
    return(
        <div>
            <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>
            <Header></Header>
            <div className='boxing'>
                <div className='format'>
                <Form onSubmit={this.submitHandler}>
                <Form.Group  onChange={this.ChangeHandler} value={email}>
    <Form.Label >Email</Form.Label>
    <Form.Control name='email'  placeholder="Email" />
  </Form.Group>
  <Form.Group  onChange={this.ChangeHandler} value={password}>
    <Form.Label >Password</Form.Label>
    <Form.Control name='password' placeholder="Password" />
  </Form.Group>
  <Form.Group  onChange={this.ChangeHandler} value={firstName}>
    <Form.Label >Name</Form.Label>
    <Form.Control name='firstName' placeholder="Name" />
  </Form.Group>
<Form.Group  onChange={this.ChangeHandler} value={lastName}>
    <Form.Label >Last name</Form.Label>
    <Form.Control name='lastName' placeholder="Last name" />
  </Form.Group>
    <Form.Group onChange={this.ChangeHandler} value={userName}>
    <Form.Label >Login</Form.Label>
    <Form.Control name='userName'  placeholder="Login" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
                </div>
            </div>
        </div>
    )
}
}
export default SignIn