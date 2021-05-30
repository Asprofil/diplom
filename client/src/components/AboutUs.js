import react from 'react'
import './AboutUs.css'
import Header from './Header.js'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup' 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function AboutUs(){
    return(
        <div>
            <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>
            <Header></Header>
            <div className="boxing">
            <Container>
                  <Row xl="2">
  <Col>
  <Card className="ccol">
    <Card.Body>
      <Card.Title>Christopher Turk</Card.Title>
      <Card.Text>
<a>Instagram</a>
      </Card.Text>
      <Card.Text>
+380662354848
      </Card.Text>
      <Card.Text>
doctorturk@gmail.com
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
  <Col>
  <Card className="ccol">
    <Card.Body>
      <Card.Title>Bob Kelso</Card.Title>
      <Card.Text>
<a>Instagram</a>
      </Card.Text>
      <Card.Text>
+380112459848
      </Card.Text>
      <Card.Text>
doctorkelso@gmail.com
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
  <Col>
  <Card className="ccol">
    <Card.Body>
      <Card.Title>Elliot Reid</Card.Title>
      <Card.Text>
<a>Instagram</a>
      </Card.Text>
      <Card.Text>
+380442658898
      </Card.Text>
      <Card.Text>
doctorreid@gmail.com
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
  <Col>
  <Card className="ccol">
    <Card.Body>
      <Card.Title>Carla Espinosa</Card.Title>
      <Card.Text>
<a>Instagram</a>
      </Card.Text>
      <Card.Text>
+380992655848
      </Card.Text>
      <Card.Text>
doctorcarla@gmail.com
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
</Row>
<Row>
<Card className="ccol">
  <Card.Body>
    <Card.Title>About us</Card.Title>
    <Card.Text>
    The first clinic the London Dispensary, was founded in 1696 as a central means of dispensing medicines to the sick poor whom the physicians were treating in the patients’ homes. The New York City, Philadelphia, and Boston dispensaries, founded in 1771, 1786, and 1796, respectively, had the same objective. Later, for the sake of convenience, physicians began to treat their free patients at the dispensary. The number of such clinics did not increase rapidly, and as late as 1890 only 132 were operating in the United States. The impetus for the mushroomlike growth that has occurred since that time came with the rapid growth of hospitals and also from the public health movement. Also we work with many clinics all around the globe to help people to take care of their health
    </Card.Text>
  </Card.Body>
</Card>
<Col>
  <Card className="csup">
    <Card.Body>
      <Card.Title>Support</Card.Title>
      <Card.Text>
<a>Instagram</a>
      </Card.Text>
      <Card.Text>
+380992355848
      </Card.Text>
      <Card.Text>
doctormail@gmail.com
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
</Row>
</Container>
</div>
        </div>
    )
}