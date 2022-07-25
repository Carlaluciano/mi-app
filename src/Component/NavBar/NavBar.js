
import {Container, Nav,Navbar, NavDropdown} from 'react-bootstrap';  
import CartWidget from '../CartWidget/CartWidget'; 


export default function NavBar(){
    return(
        <Navbar bg="light" expand="lg">
        <Container>
          <img src="./image/HiTech-recortada .png" alt="logo" className="logo"/>
        <Navbar.Brand href="#home">HiTech</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Nosotros</Nav.Link>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Celulares</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                 Computadoras
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Tablets</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Otros
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <CartWidget/>
        </Container>
      </Navbar>
    )
}