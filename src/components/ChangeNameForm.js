
import { useForm } from "react-hook-form";
import { renamePokedex } from "../api/pokedex";


export default function ChangeNameForm(props,counter) {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {console.log(data);renamePokedex(data)};
     
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type={"hidden"} {...register("changePokedex")} value={props.pokedex.name} />
        <input {...register("name", { required: true})} defaultValue={props.pokedex.name} />
        <input type="submit" onClick={()=>counter.funcSetCount(counter.varCount+1)}/>
      </form>
    );
}