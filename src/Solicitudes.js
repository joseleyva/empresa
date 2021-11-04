import './App.css';
import './Productos.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import {Col, Button, Form, Row} from 'react-bootstrap';
import { Divider } from '@mui/material';

function Solicitudes() {
    return (

        <div className="App">
            <header>
                <Navbar collapseOnSelect expand="lg" className="BarraEm">
                    <Container>
                        <Navbar.Brand  href="/Empresas">
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
                                <Nav.Link href="/DatosEmpresa">Datos de la Empresa
                                    <Badge bg="danger">1</Badge>
                                </Nav.Link>
                                <Nav.Link href="/Vacante">Publicar vacante</Nav.Link>
                                <Nav.Link href="/Solicitudes">Evaluaciones
                                    <Badge bg="danger">1</Badge>
                                </Nav.Link>
                                <Nav.Link href="/Referencias">Referencias
                                    <Badge bg="danger">1</Badge>
                                </Nav.Link>
                                <Nav.Link href="/Estudios">
                                    Estudios
                                    <Badge bg="danger">1</Badge></Nav.Link>
                            </Nav>
                            <Nav>
                                <Navbar.Brand className="UsuarioImg">
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
            <div className="ContenedorEmpresas">
            <h4> Escritorio Virtual</h4>
            <Divider/>
                <Row className="MargenL" >
                <Form.Group as={Col} md="4">
                        <h6>Evaluacíon Psicometrica </h6>
                
                </Form.Group>
                <Form.Group as={Col} md="4">
                        <h6> Evaluacíon de Conocimientos</h6>
                </Form.Group>
                <Form.Group as={Col} md="4">
                        <h6>Resultados</h6>
                </Form.Group>
                </Row>
                <Row className="mb-3 ">
                    <Form.Group as={Col} md="4">
                        <Button variant="outline-primary" className="BtnSolicitudes"></Button>{' '}
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Button variant="outline-primary" className="BtnSolicitudes">Crea tu Evaluación</Button>{' '}
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Button variant="outline-primary" className="BtnSolicitudes">Pruebas Finalizadas</Button>{' '}
                    </Form.Group>
                </Row>
                <Row className="mb-3 ">
                    <Form.Group as={Col} md="4">
                        <Button variant="outline-primary" className="BtnSolicitudes" ></Button>{' '}
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Button variant="outline-primary" className="BtnSolicitudes">Evaluaciones Disponibles</Button>{' '}
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Button variant="outline-primary" className="BtnSolicitudes">Ranking de Resultados</Button>{' '}
                    </Form.Group>
                </Row>
                <Row className="mb-3 ">
                    <Form.Group as={Col} md="4">
                        <Button variant="outline-primary" className="BtnSolicitudes" ></Button>{' '}
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Button variant="outline-primary" className="BtnSolicitudes">Volver al Inicio</Button>{' '}
                    </Form.Group>
                </Row>
            </div>

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

export default Solicitudes;

