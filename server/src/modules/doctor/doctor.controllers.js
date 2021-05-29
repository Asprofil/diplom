import Doctor from './doctor.model';
import HTTPStatus from 'http-status';
 
export async function createDoctor(req, res) {
  try {
    const doctor = await Doctor.createDoctor(req.body, req.user._id);
      return   res.status(HTTPStatus.CREATED).json(doctor);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

export async function getDoctorById(req, res) {
  try {
    const doctor = await Doctor.findById(req.params.id).populate('user');
    return res.status(HTTPStatus.OK).json(doctor);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}