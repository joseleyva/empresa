import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Footer from "../components/Web/Footer"
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import FormularioContacto from '../components/FormularioContacto';
import { getAccessTokenApi } from "../api/auth";
import { Redirect } from "react-router-dom";

function Contacto() {
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
            <Container className='mt-4'>
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
            <Footer/>
        </div>


    );

}

export default Contacto;