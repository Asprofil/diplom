import Symptom from './symtom.model';
import HTTPStatus from 'http-status';
 
export async function createSymptom(req, res) {
  try {
    const symptom = await Symptom.createSymptom(req.body, req.post._id);
      return   res.status(HTTPStatus.CREATED).json(symptom);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

export async function getSymptomById(req, res) {
  try {
    const symptom = await Symptom.findById(req.params.id).populate('post');
    return res.status(HTTPStatus.OK).json(symptom);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}