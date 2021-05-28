import react from 'react'
import './SignIn.css'
import Header from './Header.js'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function SignIn(){
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
                <Form>
                <Form.Group controlId="formBasicPassword">
    <Form.Label>Login</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="Name" />
    <Form.Text className="text-muted">
      We'll never share your login with anyone else.
    </Form.Text>
  </Form.Group>
<Form.Group controlId="formBasicLName">
    <Form.Label>Last name</Form.Label>
    <Form.Control type="lastname" placeholder="Last name" />
  </Form.Group>
  <Form.Group controlId="formBasicPhoneNumber">
    <Form.Label>Phone number</Form.Label>
    <Form.Control type="phone" placeholder="Phone number" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Email" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCPassword">
    <Form.Label>Confirm password</Form.Label>
    <Form.Control type="confirm password" placeholder="Confirm password" />
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