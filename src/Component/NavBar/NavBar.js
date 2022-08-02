
import {Container, Nav,Navbar, NavDropdown} from 'react-bootstrap';  
import CartWidget from '../CartWidget/CartWidget'; 


export default function NavBar(){
    return(
        <Navbar bg="light" expand="lg">
        <Container>
          <img src="./image/Logo.png" alt="logo" className="logo"/>
        <Navbar.Brand href="/">HiTech</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#link">Nosotros</Nav.Link>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item href="/category/celular">Celulares</NavDropdown.Item>
                <NavDropdown.Item href="/category/computadora">Computadoras</NavDropdown.Item>
                <NavDropdown.Item href="/category/tablet">Tablets</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/category/otros">
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