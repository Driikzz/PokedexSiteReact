import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { pokemonCreate } from "../api/pokemon";


export default function CreatePokemon(counter) {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {console.log(data);pokemonCreate(data)};
     
    return (
      <Container>
        <Row>
          <Col>
            <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text_center mt-5">Crée son pokémon</h2>
            <input className="d-flex mt-5 ms-5" {...register("height", { required: true})} placeholder='Sa taille' />
            <input className="d-flex mt-5 ms-5" {...register("weight", { required: true})} placeholder='Son poid' />
            <input className="d-flex mt-5 ms-5"{...register("name", { required: true})} placeholder='Son nom' />
            <input className="d-flex mt-5 ms-5"{...register("type", { required: true})} placeholder='Son type' />
            <input className="d-flex mt-5 ms-5"{...register("normal", { required: true})} placeholder='Son image sans animation' />
            <input className="d-flex mt-5 ms-5"{...register("animated", { required: true})} placeholder='Son image animée'/>
            <input className="d-flex mt-5 ms-5" type="submit" onClick={()=>counter.funcSetCount(counter.varCount+1)}/>
          </form>
          </Col>
          <Col>
          <div className="mt-5">
            <h3>Exemple: </h3>
            <p>Carte pokémon crée sur le site si vous remplissez le fomrmulaire</p>
          </div>
          <div className="image-exemple"></div>
          </Col>
        </Row>
      </Container>
      
    );
}