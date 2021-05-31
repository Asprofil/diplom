import React,{useEffect} from 'react'
import './MyProfile.css'
import Header from './Header.js'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Route } from 'react-router'
import PostList from './PostList'

export default function MyProfile(){
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
                <Row xl="4">
                  <Col>
                  <div className="photo">
                <Image class="img-fluid" src="https://www.worldfuturecouncil.org/wp-content/uploads/2020/06/blank-profile-picture-973460_1280-1.png" fluid />
                </div>
                </Col>
                <Col>
<Table striped bordered hover>
  <tbody>
    <tr>
      <td>Name</td>
      <td></td>
    </tr>
    <tr>
      <td>Last name</td>
      <td></td>
    </tr>
    <tr>
      <td>Chosen doctor</td>
      <td></td>
    </tr>
    <tr>
      <td>Phone number</td>
      <td></td>
    </tr>
    <tr>
      <td>E-mail</td>
      <td></td>
    </tr>
  </tbody>
</Table>
</Col>
</Row>
<Row>
<Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>№</th>
      <th>Complaint</th>
      <th>Date</th>
      <th>Doctor</th>
      <th>Discription</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>2</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>3</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    
  </tbody>
</Table>
</Row>
<Row>
  <Col>
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Old password</Form.Label>
    <Form.Control type="password" placeholder="Old password" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>New password</Form.Label>
    <Form.Control type="confirm password" placeholder="New password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Col>
</Row>
</Container>
<PostList />
            </div>
            
        </div>
    )

}
