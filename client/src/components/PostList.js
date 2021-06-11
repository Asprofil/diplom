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
       axios.get('http://localhost:3000/api/v1/posts/user/'+localStorage.getItem('User'))
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
        // let i=0
        // const {item}=''
        // for(i = 0; i < 6; i++){
        //     {item += posts.createdAt[i]}  
        // }
        return(
            <div className="postt">
             <thead>
                <tr>
                  <th className="posts">Date</th>
                  <th className="posts">Title</th>
                  <th className="posts">Text</th>
                </tr>
              </thead>
              <tbody>
                {
                  
              posts.map(posts=>              
        
              
                <tr>
                    <td>{posts.createdAt[0]
                    }{posts.createdAt[1]}
                    {posts.createdAt[2]}
                    {posts.createdAt[3]}
                    {posts.createdAt[4]}
                    {posts.createdAt[5]}
                    {posts.createdAt[6]}
                    {posts.createdAt[7]}
                    {posts.createdAt[8]}
                    {posts.createdAt[9]}
                    </td>
                    <td>{posts.title}</td>
                    <td>{posts.text}</td>
                </tr>
                        )
              
                }
            </tbody>
            </div>
        )
    }
}

export default PostList