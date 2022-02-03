import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { getAccessTokenApi } from "../api/auth";
import { Redirect } from "react-router-dom";
import Footer from "../components/Web/Footer"

function Acerca() {
    if (getAccessTokenApi()) {
        return <Redirect to="/Empresas" />;
      }
    return (
        <div className="App">
            <Navbar collapseOnSelect expand="lg" className="Barra">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="logo512.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Nombre de la empresa
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/Productos">Productos</Nav.Link>
                            <Nav.Link href="/Acerca">Acerca de</Nav.Link>
                            <Nav.Link href="/Contacto">Contacto</Nav.Link>
                        </Nav>
                        <Nav>
                            <Button className="m-1" variant="danger" href="/CrearC">Crear Cuenta</Button>
                            <Button className="m-1" href="/InicioS">Iniciar Sesion</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <h1>Pagina de prueba de acerca de</h1>
            <Footer/>
              
        </div>
     

    );

}

export default Acerca;