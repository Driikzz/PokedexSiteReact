
import { getAll } from "../api/pokemon";
import { useState,useEffect } from "react";

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
    return <label> 
        <div className="pokemon-list">
        <div class="flex">
        {
            pokemons.map((pokemon,key) =>{
                return <div key={key} className="bloc-pokemon">
                <img className="avatar" src={pokemon.sprites.animated} />
                <h2>{pokemon.name}</h2>
            </div>
            })
        }
        </div>
    </div>
    </label>

}


export default PokemonList;