import react, { Component } from 'react'
import './Login.css'
import Header from './Header.js'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from "axios"




class Login extends Component{
  constructor(props){
    super(props)
    this.state={
      email:'',
      password:'',
    }
}
ChangeHandler=(e)=>{
  this.setState({[e.target.name]:e.target.value})
}

submitHandler=(e)=>{
e.preventDefault()
console.log(this.state)
axios.post('http://localhost:3000/api/v1/users/login', this.state)
.then(response =>{
console.log(response)
console.log(response.data.token)
console.log(response.data._id)
localStorage.setItem("User",response.data._id)
localStorage.setItem("Authorization",response.data.token)
window.location.replace("http://localhost:3000/");
})
.catch(error=>{
  console.log(error)
})
}
  render(){
    const{email,password}=this.state
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
              <Container>
                <Row>
                  <Col>
                <Form onSubmit={this.submitHandler}> 
  <Form.Group onChange={this.ChangeHandler} value={email}>
    <Form.Label>E-mail</Form.Label>
    <Form.Control name="email" placeholder="Email" />
  </Form.Group>

  <Form.Group onChange={this.ChangeHandler} value={password}>
    <Form.Label>Password</Form.Label>
    <Form.Control name="password" type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Col>
</Row>
</Container>
            </div>
        </div>
    )
  }
}

export default Login