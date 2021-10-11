import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card, CardGroup } from 'react-bootstrap';

function Productos() {
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
                            <Button className="boton" variant="danger" href="/CrearC">Crear Cuenta</Button>
                            <Button className="boton" href="/InicioS">Iniciar Sesion</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                <CardGroup className="CartasG">
                    <Card className="Cartas">
                        <Card.Title>Producto 1</Card.Title>
                        <Card.Img  variant="top" src="imagen1.jpg" />
                        <Card.Body>
                            <label>Publicar Ahora</label>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        </Card.Footer>
                    </Card>
                    <Card className="Cartas">
                        <Card.Title>Producto 2</Card.Title>
                        <Card.Img variant="top" src="imagen1.jpg" />
                        <Card.Body>
                            <label>Publicar Ahora</label>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>

                        </Card.Footer>
                    </Card>
                    <Card className="Cartas">
                        <Card.Title>Producto 3</Card.Title>
                        <Card.Img variant="top" src="imagen1.jpg" />
                        <Card.Body>

                            <label>Publicar Ahora</label>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>

                        </Card.Footer>
                    </Card>
                </CardGroup>
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

                        </div>
                        <div className="Fcol-md-4 footer-col">
                            <h4>Redes Sociales</h4>
                        </div>
                    </div>
                </div>
            </footer>
        </div>


    );

}

export default Productos;