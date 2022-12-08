import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Menu() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Accueil</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/PokemonList">Pokémon Liste</Nav.Link>
              <Nav.Link href="/Pokedex">Pokedex</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
  
  export default Menu;