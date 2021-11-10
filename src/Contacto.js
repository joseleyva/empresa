import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Instagram } from '@mui/icons-material';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import FormularioContacto from './Componentes/FormularioContacto';

function Contacto() {
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
            <Container>
                <Grid container spacing={0} sx={{ mt: 2 }}>
                    <h3>Por favor complete el formulario</h3>
                    <Grid container spacing={0} className="Contacto">
                    <FormularioContacto/>

                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Paper elevation={0} sx={{ p: 2,  }}>
                            <Typography variant="h6" gutterBottom>
                                Ubicación
                            </Typography>
                            <Typography>Numero: 927329837</Typography>
                        </Paper>

                    </Grid>
                </Grid>
            </Container>
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
                            <Link
                                display="block"
                                variant="body1"
                                href="#"
                                name="GitHub"
                                sx={{ mb: 0.5 }}
                            >
                                <GitHubIcon name='GitHub'
                                />
                                <span>GitHub</span>
                            </Link>
                            <Link
                                display="block"
                                variant="body1"
                                href="#"
                                name="Facebook"
                                sx={{ mb: 0.5 }}
                            >
                                <FacebookIcon name='Facebook'
                                />
                                <span>Facebook</span>
                            </Link>
                            <p>
                                <Link
                                    display="block"
                                    variant="body1"
                                    href="#"
                                    name="Twitter"
                                    sx={{ mb: 0.5 }}
                                >
                                    <TwitterIcon name='Twitter'
                                    />
                                    <span>Twitter</span>
                                </Link>

                                <Link
                                    display="block"
                                    variant="body1"
                                    href="#"
                                    name="Instagram"
                                    sx={{ mb: 0.5 }}
                                >
                                    <Instagram name='Instagram'
                                    />
                                    <span>Instagram</span>
                                </Link>
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

export default Contacto;