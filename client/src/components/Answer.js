import React, { Component } from 'react'
import Header from './Header.js'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from "axios"


class Answer extends Component{
    constructor(props){
        super(props)
        this.state={
          title:'',
          parentid:'',
          text:'',
        }
    }
   
          
    componentDidMount(){
      let fullurl=window.location.href;
      let parentid=fullurl.split('/')
      let url=parentid[4]
        localStorage.setItem("parentid",url)
    }
        ChangeHandler=(e)=>{
            this.setState({[e.target.name]:e.target.value})
          }
          
          submitHandler=(e)=>{
          e.preventDefault()
          console.log(this.state)
          const options = {
            headers: {'Authorization': localStorage.getItem("Authorization")}
          };
          console.log(options)
          axios.post('http://localhost:3000/api/v1/posts', this.state,options)
          .then(response =>{
          console.log(response)   
          })
          .catch(error=>{
            console.log(error)
          })
          }
          render(){
          
            const{parentid,title,text}=this.state
            this.state.parentid=localStorage.getItem("parentid")
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
        <Form onSubmit={this.submitHandler}>
    <Form.Group onChange={this.ChangeHandler} value={title}>
      <Form.Label>Title</Form.Label>
        <Form.Control name="title"  rows={1} />
        </Form.Group>
        <Form.Group onChange={this.ChangeHandler} value={text}>
        <Form.Label>Describe your complain</Form.Label>
        <Form.Control as="textarea" name="text" rows={3} />
        </Form.Group>
     <Button variant="primary" type="submit">
        Send
      </Button>
      </Form>
        </div>
            </div>
            )
          }
}


export default Answer