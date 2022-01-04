import react from 'react'
import './Main.css'
import Header from './Header.js'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Main(){
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
                <div>
                <Container>
                    <Row xl="4">
                        <Col>
            <Card style={{ width: '100%' }}>
  <Card.Img class="img-fluid" src="https://image.freepik.com/free-vector/doctor-character-background_1270-84.jpg" />
  <Card.Body>
    <Card.Title>See our doctors</Card.Title>
    <Button variant="primary" href="doctor">Go</Button>
  </Card.Body>
</Card>
</Col>
<Col>
<Card style={{ width: '100%' }}>
  <Card.Img class="img-fluid  " src="https://www.hopkinsmedicine.org/-/media/images/health/1_-conditions/infectious-diseases/illustration-common-cold.ashx?h=360&la=en&mh=360&mw=520&w=360&hash=5DD284D4DE908BD6F9833600DFBDB619989FB956" />
  <Card.Body>
    <Card.Title>Make new complain</Card.Title>
    <Button variant="primary" href="complain">Go</Button>
  </Card.Body>
</Card>
</Col>
<Col>
<Card style={{ width: '100%' }}>
  <Card.Img class="img-fluid" src="https://www.worldfuturecouncil.org/wp-content/uploads/2020/06/blank-profile-picture-973460_1280-1.png" />
  <Card.Body>
    <Card.Title>Check your profile</Card.Title>
    <Button variant="primary" href="profile">Go</Button>
  </Card.Body>
</Card>
</Col>
<Col>
<Card style={{ width: '100%' }}>
  <Card.Img class="img-fluid" src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fi.forbesimg.com%2Fmedia%2Flists%2Fcompanies%2Fmayo-clinic_416x416.jpg" />
  <Card.Body>
    <Card.Title>Read about us</Card.Title>
    <Button variant="primary" href="about" >Go</Button>
  </Card.Body>
</Card>
</Col>
</Row>
</Container>
</div>
            </div>
        </div>
    )
}
