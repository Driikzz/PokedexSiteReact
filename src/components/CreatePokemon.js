import { useForm } from "react-hook-form";
import { pokemonCreate } from "../api/pokemon";


export default function CreatePokemon(counter) {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {console.log(data);pokemonCreate(data)};
     
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <input {...register("height", { required: true})} placeholder='Sa taille' />
         <input {...register("weight", { required: true})} placeholder='Son poid' />
         <input {...register("name", { required: true})} placeholder='Son nom' />
         <input {...register("type", { required: true})} placeholder='Son type' />
         <input {...register("normal", { required: true})} placeholder='Son image sans animation' />
        <input {...register("animated", { required: true})} placeholder='Son image animée'/>
        <input type="submit" onClick={()=>counter.funcSetCount(counter.varCount+1)}/>
      </form>
    );
}