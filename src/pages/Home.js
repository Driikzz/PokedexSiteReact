import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from "react-bootstrap";
function Home() {
    return <label className="label">
        <Container>
        <Row>
        <Col xs={6} md={4}>
          
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
      </Row>
        </Container>
    </label>
   
}
export default Home;