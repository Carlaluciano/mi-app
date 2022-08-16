
import {Container, Nav,Navbar, NavDropdown} from 'react-bootstrap';  
import CartWidget from '../CartWidget/CartWidget'; 
import {Link} from 'react-router-dom';




export default function NavBar(){

   return(
    <Navbar className="navBg" bg="light" expand="lg">
        <Container>
          <img src="./image/Logo.png" alt="logo" className="logo"/>
        <Nav.Link as={Link} to='/'>HiTech</Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
              <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <Nav.Link as={Link} to="/category/celular">Celulares</Nav.Link>
                <Nav.Link as={Link} to="/category/computadora">Computadoras</Nav.Link>
                <Nav.Link as={Link} to="/category/tablet">Tablets</Nav.Link>
                <NavDropdown.Divider />
                <Nav.Link as={Link} to="/category/otros">
                    Otros
                </Nav.Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <CartWidget/>
        </Container>
      </Navbar>
      
    )
}