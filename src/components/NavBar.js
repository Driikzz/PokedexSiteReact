import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logonavBar from './LogonavBar.png'
import {Animated} from "react-animated-css";

function Menu() {
    return (
      <>
        <Navbar bg="dark" className='navbar m-0' variant="dark">
          <Container>
            
            <div className='logonavbar'>
              <Animated animationIn="bounce" animationOut="fadeOut" isVisible={true}>
              <img src={logonavBar} alt='' />
              </Animated>
            </div>
            
            <Navbar.Brand href="/">Accueil</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/PokemonList">Pokémon Liste</Nav.Link>
              <Nav.Link href="/Pokedex">Pokedex</Nav.Link>
              <Nav.Link href="/Admin">Create Pokémon</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
  
  export default Menu;