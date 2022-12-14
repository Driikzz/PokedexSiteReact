import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import { getAll, pokemonInPokedex } from "../api/pokemon";
import { useState,useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container } from 'react-bootstrap';




function CarouselHome() {
    const [ pokemons, setPokemons ] = useState([]);
    useEffect(() => {
    const pokemonsFetched = getAll();
    pokemonsFetched
        .then(result => setPokemons(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);
    return <div className="label">
        <Row className='row-carousel'>
        <Carousel variant="dark" className='carousel-image' style={{overflow:"initial"}}>
        {
            pokemons.map((pokemon,key) =>{
                return <Carousel.Item style={{paddingRight:"4rem"}}>
                    <Card className="pokemon-card policePokemon car-shadow" style={{ width: '15rem' }}>
                <Card.Img variant="top" style={{ height:"6rem",width:"fit-content",alignSelf:"center"}}  src={pokemon.sprites.animated} />
                <Card.Body>
                  <Card.Title>{pokemon.name}</Card.Title>
                  <Card.Text>
                  La taille: {pokemon.height}
                  <br></br>
                  Son poid: {pokemon.weight}
                  <br></br>
                  type: {pokemon.type}
                  </Card.Text>
                </Card.Body>
              </Card>
              </Carousel.Item>
            
            })
        }
            </Carousel>   
        </Row>  
        
    </div>
}

export default CarouselHome;