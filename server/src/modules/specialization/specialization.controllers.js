import Specialization from './specialization.model';
import HTTPStatus from 'http-status';
 
export async function createSpecialization(req, res) {
  try {
    const specialization = await Specialization.create(req.body);
      return   res.status(HTTPStatus.CREATED).json(specialization);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

export async function getSpecializationById(req, res) {
  try {
    const specialization = await Specialization.findById(req.params.id).populate('doctor');
    return res.status(HTTPStatus.OK).json(specialization);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}