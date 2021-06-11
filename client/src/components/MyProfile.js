import React,{Component} from 'react'
import './MyProfile.css'
import Header from './Header.js'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import PostList from './PostList'
import axios from "axios"
import User from './User'
 class MyProfile extends Component{
 
   render(){
    const options='http://localhost:3000/api/v1/users/'+localStorage.getItem('User')
    console.log(options)
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
                <Row sm="2">
                  <Col>
                  <div className="photo">
                <Image class="img-fluid" src="https://www.worldfuturecouncil.org/wp-content/uploads/2020/06/blank-profile-picture-973460_1280-1.png" fluid />
                </div>
                </Col>
                <Col>
<Table striped bordered hover>
<User />
</Table>
</Col>
</Row>
<Row>
<Table striped bordered hover size="sm">
<PostList className="posts" />
</Table>
</Row>
</Container>

            </div>
            
        </div>
    )
  }
}

export default MyProfile