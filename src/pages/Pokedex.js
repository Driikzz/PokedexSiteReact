
import { getAll } from "../api/pokedex";
import { useState,useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from "react-bootstrap";
import { deletePokedex } from "../api/pokemon";
import Button from 'react-bootstrap/Button';

  function Pokedex(){

    const [ pokedex, setPokedex ] = useState([]);
    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
    const pokedexFetched = getAll();
   pokedexFetched
        .then(result => setPokedex(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);
    return <label className="label">
        <Row>
            <Col><div className="pokedex-list">
        <Container className="container">
        <Row >    
        {
            pokedex.map((pokedex,key) =>{
                return <Card className="pokemon-card" style={{ width: '15rem' }}>
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
                  <Button onClick={()=>deletePokedex(pokedex.name)} variant="primary">Supprimer du Pokedex</Button>
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


export default Pokedex;