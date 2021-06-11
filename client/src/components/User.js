import axios from "axios"
import React,{Component} from 'react'


class User extends Component{
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
             <div>
                 <tbody>
    <tr>
      <td>Name</td>
      <td>{user.firstName}</td>
    </tr>
    <tr>
      <td>Last name</td>
      <td>{user.lastName}</td>
    </tr>
    <tr>
      <td>Username</td>
      <td>{user.userName}</td>
    </tr>
    <tr>
      <td>E-mail</td>
      <td>{user.email}</td>
    </tr>
  </tbody>          
             </div>
         )
    }
}
export default User