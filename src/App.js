import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import PokemonList from "./pages/PokemonList";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//App.js
function App(props){
  return <Router>
      <Switch>
        <Route exact path="/"> {/*ici on met l'URL dans le navigateur*/}
          <Home /> {/*ici on donne la page à afficher en fonction de cette URL*/}
        </Route>
        <Route path="/Pokedex">
          <Pokedex />
        </Route>
        <Route path="/PokemonList">
          <PokemonList />
        </Route>
      </Switch>
  </Router>
}

export default App;