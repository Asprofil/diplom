import React,{Component} from 'react'
import axios from "axios"
class PostList extends Component {
    constructor(props){
        super(props)
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
       axios.get('http://localhost:3000/api/v1/posts/')
       .then(response=>{
           console.log(response)
           this.setState({posts:response.data})
       })
       .catch(error=>{
           console.log(error)
       })
    }
    render(){
        const {posts}=this.state
        return(
            <div>
                List of posts
                {
                  
                    posts.map(posts=><div key={posts.id}>{posts.text}</div>)
                }
            </div>
        )
    }
}

export default PostList