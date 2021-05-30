import Doctorspecialization from './doctorspecialization.model';
import HTTPStatus from 'http-status';
 
export async function createDoctorspecialization(req, res) {
  try {
    const doctorspecialization = await Doctorspecialization.create(req.doctor.id,req.specialization);
      return   res.status(HTTPStatus.CREATED).json(doctorspecialization);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

export async function getDoctorspecializationById(req, res) {
  try {
    const doctorspecialization = await Doctorspecialization.findById(req.params.id).populate('doctor');
    return res.status(HTTPStatus.OK).json(doctorspecialization);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}