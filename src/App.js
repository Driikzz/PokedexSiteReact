import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import PokemonList from "./pages/PokemonList";
import Admin from "./pages/Admin";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Menu from "./components/NavBar";

//App.js
function App(props){
  return <Router>
    <Menu/>
      <Switch>
        <Route exact path="/">
          <Home /> 
        </Route>
        <Route path="/Pokedex">
          <Pokedex />
        </Route>
        <Route path="/PokemonList">
          <PokemonList />
        </Route>
        <Route path="/Admin">
          <Admin/>
        </Route>
      </Switch>
  </Router>
}

export default App;