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
export async function getAllPosts(res) {
  try {
    const filter = {};
    const posts = await Post.find().populate('user');
    return res.status(HTTPStatus.OK).json(posts);
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