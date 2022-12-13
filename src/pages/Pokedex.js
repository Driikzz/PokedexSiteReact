import { useState,useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from "react-bootstrap";
import { deletePokedex } from "../api/pokemon";
import Button from 'react-bootstrap/Button';
import { getAll } from "../api/pokedex";

  function Pokedex(){
    const [count , setCount] = useState(0);
    const [ pokedex, setPokedex ] = useState([]);
    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
    const pokedexFetched = getAll();
    pokedexFetched
        .then(result => setPokedex(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[count]);
    return <label className="label body-poke-list">
      <div className="background-pokedex">
        <Row>
            <Col><div className="pokedex-list ">
        <Container className="container pokedex-container">
          <div>
            <h2 className="title-pokedex">Pokedex</h2>
            <h3 className="pokedexh3 policePokemon">Nombre de Pokémon capturé :</h3>
          </div>
        <Row >    
        {
            pokedex.map((pokedex, key ) =>{
                return <Card className="pokemon-card policePokemon car-shadow" style={{ width: '15rem'}}>
                <Card.Img variant="top" style={{ width: '100px',height:'95px'}}  src={pokedex.sprites.normal} />
                <Card.Body>
                  <Card.Title>{pokedex.name}</Card.Title>
                  <Card.Text>
                    La taille: {pokedex.height}
                    <br></br>
                    Son poid: {pokedex.weight}
                    <br></br>
                    type: {pokedex.type}
                  </Card.Text>
                    <Button onClick={()=>{deletePokedex(pokedex.name);setCount(count+1)}} variant="danger">Supprimer</Button>
                </Card.Body>
              </Card>
            })
        }  
            </Row>
            </Container>
        </div></Col>
        </Row>
      </div>
        
    </label>

}


export default Pokedex;