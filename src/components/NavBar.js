import {
    Link
  } from "react-router-dom";


  function Menu(){
    return <nav>
        <ul>
            <li>
                <Link to="/">Accueil</Link>
            </li>
            <li>
                <Link to="/Pokedex">Pokedex</Link>
            </li>
            <li>
                <Link to="/PokemonList">Liste Pokémon</Link>
            </li>
        </ul>
    </nav>
}

export default Menu;