import react,{Component} from 'react'
import axios from "axios"

class Symptom extends Component{
    constructor(props){
      super(props)
      this.state={
        symptom:[]
      }
  }
  componentDidMount(){
    axios.get('http://localhost:3000/api/v1/symptom')
    .then(response=>{
        console.log(response)
        this.setState({symptom:response.data})
    })
    .catch(error=>{
        console.log(error)
    })
  }
  render(){  
    const {symptom}=this.state
    return(<div>
       <form>
{
   symptom.map(symptom=>
   <div key={symptom._id}>
      <input type="checkbox" />
      {symptom.name}
  </div>)
 }
 </form>
    </div>)
  }
}
export default Symptom