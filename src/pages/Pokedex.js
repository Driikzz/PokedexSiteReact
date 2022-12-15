import { useState,useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from "react-bootstrap";
import { deletePokedex } from "../api/pokemon";
import Button from 'react-bootstrap/Button';
import { getAll } from "../api/pokedex";
import ChangeNameForm from "../components/ChangeNameForm";
import Footer from "../components/Footer";

  function Pokedex(counter){
    const [ pokedex, setPokedex ] = useState([]);
   
    useEffect(() => { 
    const pokedexFetched = getAll();
    pokedexFetched
        .then(result => setPokedex(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },);
    
    
    return <div className="label body-poke-list">
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
            pokedex.map((pokedex, key) =>{
                return <Card className="pokemon-card policePokemon car-shadow card-hover" style={{ width: '15rem'}}>
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
                    <Button onClick={()=>{deletePokedex(pokedex.name);counter.funcSetCount(counter.varCount+1)}} variant="danger">Supprimer</Button>
                    <ChangeNameForm pokedex={pokedex}/>
                </Card.Body>
              </Card>
            })
        }  
            </Row>
            </Container>
        </div></Col>
        </Row>
      </div>
      <Footer></Footer>
        
    </div>

}


export default Pokedex;
