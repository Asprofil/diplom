import react from 'react'
import './Login.css'
import Header from './Header.js'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Login(){
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
                <Form className='format'> 
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Login</Form.Label>
    <Form.Control type="Login" placeholder="Login" />
    <Form.Text className="text-muted">
      We'll never share your login with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
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