import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import collection from './collection.jpg';
import sneakers from './sneakers.jpg';
import pop from './pop.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Carousel, Col } from "react-bootstrap";
import image from './Poke.png'
import CarouselHome from '../components/Carousel';

function Home() {
    return( <Row className="background">
    <Col><div className="col-md-auto">
  <Container className="container">
      <div className='image-titre text-center'>
        <img src={image} alt=''/>
      </div>
    <CardGroup>
      <Card>
        <Card.Img classeName="pokemon-titre" variant="top" src={collection} />
        <Card.Body>
          <Card.Title>Nouvelle collection !</Card.Title>
          <Card.Text>
            Bientot disponible dans pokemon les nouvelles collections Ecarlate et Violet, a decouvrir directement en jeu ou dans vos Booster.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Dernière mise à jour il y a 11 minutes</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={sneakers}/>
        <Card.Body>
          <Card.Title>Colaboration avec Adidas</Card.Title>
          <Card.Text>
            Porte desormais la paire de chaussures préférer de ton pokemon avec 4 styles différentsgrâce a la Colaboration avec Adidas X Pokémon.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Dernière mise à jour il y a 33 jours</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={pop} />
        <Card.Body>
        <Card.Title>PoP Pokemon disponible maintenant</Card.Title>
        <Card.Text>
          Pokemon lance ca collection de PoP a collectionner a partir d'aujourd'hui, retrouve tes figurines dans les Micromania les plus près de chez toi ;)
        </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Dernière mise à jour il y a 2 mois</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </Container>
    <CarouselHome className="text-center"/>
    </div></Col>
    </Row>

);
}

export default Home;