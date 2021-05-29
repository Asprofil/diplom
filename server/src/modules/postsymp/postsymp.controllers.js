import Postsump from './postsymp.model';
import HTTPStatus from 'http-status';
 
export async function createPostsymp(req, res) {
  try {
    const postsymp = await Postsump.create(req.post.id,req.symptom.id);
      return   res.status(HTTPStatus.CREATED).json(postsymp);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

export async function getPostsympById(req, res) {
  try {
    const postsymp = await Postsymp.findById(req.params.id).populate('post');
    return res.status(HTTPStatus.OK).json(postsymp);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}