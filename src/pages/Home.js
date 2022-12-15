import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import collection from './collectio.jpg';
import sneakers from './sneakers.jpeg';
import pop from './pop.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from "react-bootstrap";
import image from './Poke.png'
import CarouselHome from '../components/Carousel';
import Footer from '../components/Footer';

function Home() {
    return( <Row className="background">
    <Col>
    <div className="col-md-auto">
  <Container className="container">
      <div className='image-titre text-center'>
        <img src={image} alt=''/>
      </div>
    <CardGroup>
      <Card>
        <Card.Img classeName="pokemon-titre" variant="top" src={collection} />
        <Card.Body>
          <Card.Title>Nouvelle collection !</Card.Title>
          <Card.Text className='fontsize-card-home'>
            Bientot disponible dans pokemon les nouvelles collections Ecarlate et Violet, a decouvrir directement en jeu ou dans vos Booster.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Nouvelles infos</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top pop" src={sneakers}/>
        <Card.Body>
          <Card.Title>Colaboration avec Adidas</Card.Title>
          <Card.Text className='fontsize-card-home'>
            Porte desormais la paire de chaussures préférer de ton pokemon avec 4 styles différentsgrâce a la Colaboration avec Adidas X Pokémon.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Nouvelles infos</small>
        </Card.Footer>
      </Card>
      <Card className='border-home'>
        <Card.Img variant="top" src={pop} />
        <Card.Body>
        <Card.Title>PoP Pokemon disponible maintenant</Card.Title>
        <Card.Text className='fontsize-card-home'>
          Pokemon lance ca collection de PoP a collectionner a partir d'aujourd'hui, retrouve tes figurines dans les Micromania les plus près de chez toi ;)
        </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted" >Nouvelles infos</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </Container>
    <div className='background-carrousel'>
    <CarouselHome className="text-center"/>
    </div>
    </div></Col>
      <Row className='d-flex justify-content-center '>
        <Col md={4} >
        <div>
        <h2 className='text-center mt-5 policePokemonn'>Pokémon Blanc</h2>      
        <p className='text-center mt-5 bg-light border fw-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim odio mauris, ac venenatis ante mollis nec. Phasellus et nibh massa. Integer efficitur felis non eros luctus, ac accumsan orci dapibus. Nulla vulputate augue tellus, in pharetra massa viverra sagittis. Praesent id bibendum arcu. Nam eu risus id</p>
        <div  className='pokemonblanc mt-5'></div>  
      </div>
        </Col>
        <Col md={4}>
        <div>
        <h2 className='text-center mt-5 policePokemonn'>Pokémon Noir</h2>
        <p className='text-center mt-5 bg-light border fw-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim odio mauris, ac venenatis ante mollis nec. Phasellus et nibh massa. Integer efficitur felis non eros luctus, ac accumsan orci dapibus. Nulla vulputate augue tellus, in pharetra massa viverra sagittis. Praesent id bibendum arcu. Nam eu risus id</p>
        <div className='pokemonnoir mt-5 '></div>
        </div>
        </Col>
      </Row>
      <Footer></Footer>
    </Row>
    

);
}

export default Home;