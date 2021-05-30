import Post from './post.model';
import HTTPStatus from 'http-status';
 
export async function createPost(req, res) {
  try {
    const post = await Post.createPost(req.body, req.user._id);
      return   res.status(HTTPStatus.CREATED).json(post);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

export async function getPostById(req, res) {
  try {
    const post = await Post.findById(req.params.id).populate('user');
    return res.status(HTTPStatus.OK).json(post);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}
export async function getAllPosts(req,res) {
  try {
    console.log(`Trying Post.find({}) `);
    Post.find({user :{ $ne: null } }).populate('user')
    .then( post => {
      console.log(`found some posts  ${post.count}`);      
      return res.status(HTTPStatus.OK).json(post);
    }).catch( e=>{
      console.log(`Error Post.find({})`);
      return res.status(HTTPStatus.BAD_REQUEST).json(e)
    })    
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}
export async function getPostByUserId(req, res) {
  try {
    const filter = {user : req.params.id};
    const post = await Post.find(filter).populate('user');
    return res.status(HTTPStatus.OK).json(post);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}