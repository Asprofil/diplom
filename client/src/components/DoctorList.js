import react from 'react'
import './DoctorList.css'
import Header from './Header.js'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default function DoctorList(){
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
          <Container>
            <Row xl='2'>
              <Col>
  <Card>
    <Card.Img  class="img-fluid" src="https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-scrubs-donald-faison.jpg" />
    <Card.Body>
      <Card.Title>Doctor 1</Card.Title>
      <Card.Text>
  Name: Christopher Turk
      </Card.Text>
      <Card.Text>
  Age:30
      </Card.Text>
      <Card.Text>
          Expirience:9
      </Card.Text>
    <Button variant="primary" href="1">Read more</Button>
     </Card.Body>
  </Card>
  </Col>
  <Col>
  <Card>
    <Card.Img class="img-fluid" src="https://pbs.twimg.com/profile_images/1148519824055853057/Gu-a7LHu_400x400.jpg" />
    <Card.Body>
      <Card.Title>Doctor 2</Card.Title>
      <Card.Text>
  Name: Bob Kelso
      </Card.Text>
      <Card.Text>
  Age:65
      </Card.Text>
      <Card.Text>
          Expirience:30
      </Card.Text>
      <Button variant="primary" href="2">Read more</Button>
    </Card.Body>
  </Card>
  </Col>
  <Col>
  <Card>
    <Card.Img class="img-fluid" src="https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-scrubs-sarah-chalke.jpg" />
    <Card.Body>
      <Card.Title>Doctor 3</Card.Title>
      <Card.Text>
  Name: Elliot Reid
      </Card.Text>
      <Card.Text>
  Age:34
      </Card.Text>
      <Card.Text>
          Expirience:9
      </Card.Text>
      <Button variant="primary" href="3">Read more</Button>
    </Card.Body>
  </Card>
  </Col>
  <Col>
  <Card>
    <Card.Img class="img-fluid" src="https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-scrubs-judy-reyes.jpg" />
    <Card.Body>
      <Card.Title>Doctor 4</Card.Title>
      <Card.Text>
  Name: Carla Espinosa  
      </Card.Text>
      <Card.Text>
  Age:37
      </Card.Text>
      <Card.Text>
          Expirience:12
      </Card.Text>
      <Button variant="primary" href="4">Read more</Button>
    </Card.Body>
  </Card>
  </Col>
</Row>
</Container>
        </div>
        
        </div>
    )
}