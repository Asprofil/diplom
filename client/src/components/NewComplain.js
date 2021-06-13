import react,{Component} from 'react'
import './NewComplain.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Header from './Header.js'
import axios from "axios"
import Symptom from './Symptom'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
class NewComplain extends Component{
  constructor(props){
    super(props)
    this.state={
      title:'',
      text:'',
    }
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
    const{title,text}=this.state
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
        {localStorage.getItem("User")?
    <div className='information'>
    <Form onSubmit={this.submitHandler}>
    <Form.Group onChange={this.ChangeHandler} value={title}>
      <Form.Label>Title</Form.Label>
        <Form.Control name="title"  rows={1} />
        </Form.Group>
        <Form.Group onChange={this.ChangeHandler} value={text}>
        <Form.Label>Describe your complain</Form.Label>
        <Form.Control as="textarea" name="text" rows={3} />
        </Form.Group>
     <Symptom />
    
     <Button variant="primary" type="submit">
        Send
      </Button>
      </Form>
    </div>:<div className="containe">
  <p>To use thе page please</p>
  <Button variant="primary"><Link className="link" to="/signin">Sign in</Link></Button>
  <p>Or if you have account</p>
<Button variant="primary"><Link className="link" to="/login">Log in</Link></Button>
 </div>
      }
          
</div>
</div>
)
}
}

export default NewComplain