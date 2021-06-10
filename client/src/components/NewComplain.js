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

  <Form.Group controlId="exampleForm.ControlTextarea1">
  <Form.Label>Title</Form.Label>
    <Form.Control as="textarea" rows={3} />
    <Form.Label>Describe your complain</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
 
</Form>
<Button variant="sumbit">Send</Button>{' '}
</div>
</div>
</div>
)
}