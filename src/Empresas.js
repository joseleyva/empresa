import './App.css';
import './Productos.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import Pruebas from './Componentes/Pruebas';





function Empresas() {
    return (

        <div className="App">
            <header>
                <Navbar collapseOnSelect expand="lg" className="BarraEm">
                    <Container>
                        <Navbar.Brand href="">
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
                                <Nav.Link href="/Vacante">Publicar vacante</Nav.Link>
                                <Nav.Link href="/Solicitudes">Solicitudes
                                    <Badge bg="danger">3</Badge>
                                </Nav.Link>
                                <Nav.Link href="">Estadisticas</Nav.Link>
                            </Nav>
                            <Nav>
                                <Navbar.Brand>
                                    <img
                                        alt=""
                                        src="perfil.png"
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top"
                                    />
                                </Navbar.Brand>
                                <NavDropdown title="Perfil" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/">Cerrar Sesion</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
           
            <Pruebas/>

            <footer>
                <div className="Fcontainer">
                    <div className="row">
                        <div className="Fcol-md-4 footer-col">
                            <h4>Dirección</h4>
                            <p>

                            </p>
                        </div>
                        <div className="Fcol-md-4 footer-col">
                            <h4>Correo</h4>
                            <p>

                            </p>
                        </div>
                        <div className="Fcol-md-4 footer-col">
                            <h4>Redes Sociales</h4>
                            <p>

                            </p>
                        </div>
                        <div className="Fcol-md-4 footer-col">
                            <h4>Empresa</h4>
                            <p>

                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Empresas;

