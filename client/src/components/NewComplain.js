import react from 'react'
import './NewComplain.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Header from './Header.js'

export default function NewComplain(){
    return(
    <div>
        <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>
        <Header></Header>
        <div className='boxing'>
          <div className='information'>
<Form>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Choose your doctor</Form.Label>
    <Form.Control as="select">
      <option>Doctor1</option>
      <option>Doctor2</option>
      <option>Doctor3</option>
    </Form.Control>
  </Form.Group>
  
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Describe your complain</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  {['checkbox',].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check inline label="Headache" name="group1" type={type} id={`inline-${type}-1`} />
    </div>
  ))}
  {['checkbox',].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check inline label="Cough" name="group1" type={type} id={`inline-${type}-1`} />
    </div>
  ))}
    {['checkbox',].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check inline label="Stomach-ache" name="group1" type={type} id={`inline-${type}-1`} />
    </div>
  ))}
  {['checkbox',].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check inline label="Temperature" name="group1" type={type} id={`inline-${type}-1`} />
    </div>
  ))}
  {['checkbox',].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check inline label="Weakness" name="group1" type={type} id={`inline-${type}-1`} />
    </div>
  ))}
  {['checkbox',].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check inline label="Cold" name="group1" type={type} id={`inline-${type}-1`} />
    </div>
  ))}
  {['checkbox',].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check inline label="Body aches" name="group1" type={type} id={`inline-${type}-1`} />
    </div>
  ))}
  {['checkbox',].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check inline label="Dyspnea" name="group1" type={type} id={`inline-${type}-1`} />
    </div>
  ))}
</Form>
<Button variant="success">Send</Button>{' '}
</div>
</div>
</div>
)
}