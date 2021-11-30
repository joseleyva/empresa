import React from 'react';
import {Layout} from 'antd';
import {Route, Switch} from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
export default function LayoutsBasic({routes}){
    const { Content} =Layout;
    return(
        <Layout>
            <Layout>
            <header >
        <Navbar collapseOnSelect expand="lg" className="Barra ">
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
              <div>
                <Button className="boton" variant="danger" href="/CrearC">Crear Cuenta</Button>
                <Button className="boton" href="/InicioS">Iniciar Sesion</Button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </header>
            <Content>
                <LoadRouters routes={routes}/>
            </Content>
           
            </Layout>
        </Layout>
    )
}

function LoadRouters({routes}){
   
    return(
    <Switch>
    { routes.map((route, index)=>(
        <Route
            key={index}
            path={route.path}
            component={route.component}
            exact={route.exact}
        />
    ))}
    </Switch>
    );
}