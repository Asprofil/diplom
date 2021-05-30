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
export async function getAllDoctor(res) {
  try {
    console.log(`Trying Doctor.find({}) `);
    Doctor.find({}).populate('user')
    .then( post => {
      console.log(`found some posts  ${doctor[0].text}`);      
      return res.status(HTTPStatus.OK).json(doctor);
    }).catch( e=>{
      console.log(`Error Post.find({})`);
      return res.status(HTTPStatus.BAD_REQUEST).json(e)
    })    
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}
export async function getDoctorByUserId(req, res) {
  try {
    const filter = {user : req.params.id};
    const doctor = await Doctor.find(filter).populate('user');
    return res.status(HTTPStatus.OK).json(doctor);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}