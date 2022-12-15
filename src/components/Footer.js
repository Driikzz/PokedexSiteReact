import { Col, Container, Row } from "react-bootstrap";

export default function Footer(){
    return <div className="footer-bakcground">
        <Container>
            <Row>
                <Col className="footer-link footer-contact policePokemonn footer-contact" >
                <h2>Nous contacter :</h2>
                <a  href="https://github.com/Driikzz">Git Rémi Salles</a>
                <a href="https://github.com/pacomedanilo">Git Pacôme Danilo</a>
                </Col>
                <Col>
                <div></div>
                </Col>
                <Col>
                <div className="footer-img"></div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="footer-cop policePokemonn ">
                        <h3 className="fs-5">Copiright © 2022</h3>
                    </div>
                </Col>
            </Row>

        </Container>

    </div>
}