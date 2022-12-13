
import { getAll, pokemonInPokedex } from "../api/pokemon";
import { useState,useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from "react-bootstrap";


function PokemonList(){
    const [ pokemons, setPokemons ] = useState([]);
    useEffect(() => {
    const pokemonsFetched = getAll();
    pokemonsFetched
        .then(result => setPokemons(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);
    return <label className="label">    
        <Row className="label-poke-list">
            <Col><div className="pokemon-list">
        <Container className="container "> 
        <Row className="center " >
        {
            pokemons.map((pokemon,key) =>{
                return <Card className="pokemon-card policePokemon car-shadow" style={{ width: '15rem' }}>
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
                    <Button onClick={()=>{pokemonInPokedex(pokemon.name);}} variant="secondary">Capturer</Button>
                </Card.Body>
              </Card>
            })
        }  
            </Row>
            </Container>
        </div></Col>
        </Row>
        
    </label>

}


export default PokemonList;