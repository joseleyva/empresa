import '../App.css';
import './Productos.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { getAccessTokenApi } from "../api/auth";
import { Redirect } from "react-router-dom";
import MainBanner from "../components/Web/MainBanner";
import HomeEmpresas from "../components/Web/HomeEmpresas"
import HowMyPagesWork from "../components/Web/HowMyPagesWork"
import Footer from "../components/Web/Footer"
import { BackTop } from 'antd';
import {IconButton} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function App() {
  if (getAccessTokenApi()) {
    return <Redirect to="/Empresas" />;
  }
  return (
      <>
    <div className="App">
          <header >
        <Navbar collapseOnSelect expand="lg" className="Barra ">
          <Container>
            <Navbar.Brand href="/Home">
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
              <div>
                <Button className="m-1" variant="danger" href="/CrearC">Crear Cuenta</Button>
                <Button className="m-1" href="/InicioS">Iniciar Sesion</Button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </header>

    <MainBanner/>
    <HomeEmpresas/>
    <HowMyPagesWork/>
    

    <Footer/>

    <BackTop>
    <IconButton color="primary"  aria-label="upload picture" component="span">
    <ArrowUpwardIcon className="arrow" />
  </IconButton>
    </BackTop>
    </div>
   
   </>
  );
}

export default App;
