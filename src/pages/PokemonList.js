
import { getAll, pokemonInPokedex } from "../api/pokemon";
import { useState,useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from "react-bootstrap";

function PokemonList(){

    const [ pokemons, setPokemons ] = useState([]);
    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
    const pokemonsFetched = getAll();
    pokemonsFetched
        .then(result => setPokemons(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);
    return <label className="label">
        <Row>
            <Col><div className="pokemon-list">
        <Container className="container">
        <Row className="test" >    
        {
            pokemons.map((pokemon,key) =>{
                return <Card className="pokemon-card" style={{ width: '15rem' }}>
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
                  <Button onClick={()=>pokemonInPokedex(pokemon.name)} variant="primary">Capturer pour son pokedex</Button>
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