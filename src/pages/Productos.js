import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import CartasProductos from '../components/CartasProductos';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Grid from '@mui/material/Grid';
import { getAccessTokenApi } from "../api/auth";
import { Redirect } from "react-router-dom";
import Footer from "../components/Web/Footer"

function Productos() {
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
                            <Button className="boton" variant="danger" href="/CrearC">Crear Cuenta</Button>
                            <Button className="boton" href="/InicioS">Iniciar Sesion</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <CardGroup className="CartasG">

                <React.Fragment>
                    <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />

                    <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Productos
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" component="p">
                            Quickly build an effective pricing table for your potential customers with
                            this layout. It&apos;s built with default MUI components with little
                            customization.
                        </Typography>
                    </Container>
                    <Container maxWidth="md" component="main">
                        <Grid container spacing={5} alignItems="flex-end">

                            <CartasProductos />


                        </Grid>
                    </Container>


                </React.Fragment>
            </CardGroup>
            <Footer />
        </div>


    );

}

export default Productos;