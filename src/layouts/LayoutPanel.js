import React, {useState} from "react";
import { Layout, Affix } from "antd";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Home from '../pages/Home';
import useAuth from "../hooks/useAuth";
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import { Image } from "react-bootstrap";
import {logout} from '../api/auth';
import Logo from '../assets/img/png/logo512.png';
import Perfil from '../assets/img/png/perfil.png';
import AvatarPer from '../components/AvatarPer';
import '../App.css';

export default function LayoutsPanel({ routes }) {
  const { Content} = Layout;
  const { user, isLoading } = useAuth();
  const [avatar, setAvatar] = useState(null);
  
  const logoutUser=()=>{
    logout();
    window.location.reload();
}
    if (!user && !isLoading) {
        return (
          <>
            <Route path="/" component={Home} />
            <Redirect to="/"  />
          </>
        );
      }
      
      if(user && !isLoading && user.role==="admin"){
        return <Redirect to="/admin"/>
      }

  if (user && !isLoading && user.role === "usuario") {
    return (
      <Layout>

        <Layout>
        <Affix offsetTop={0}>
            <header>
                <Navbar collapseOnSelect expand="lg" className="BarraEm">
                    <Container>
                        <Navbar.Brand href="/Empresas">
                            <Image
                                alt=""
                                src={Logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            Nombre de la empresa
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/Empresas/DatosEmpresa">Datos de la Empresa
                                    <Badge bg="danger">1</Badge>
                                </Nav.Link>
                                <Nav.Link href="/Empresas/Vacante">Vacantes/Candidatos</Nav.Link>
                                <Nav.Link href="/Empresas/Evaluaciones">Evaluaciones
                                    <Badge bg="danger">1</Badge>
                                </Nav.Link>
                                <Nav.Link href="/Empresas/Referencias">Referencias
                                    <Badge bg="danger">1</Badge>
                                </Nav.Link>
                                <Nav.Link href="/Empresas/Estudios">
                                    Estudios
                                    <Badge bg="danger">1</Badge></Nav.Link>
                            </Nav>
                            <Nav>
                                <Navbar.Brand className="UsuarioImg">
                                  <AvatarPer users={user} setAvatar={setAvatar}/>
                                    <Image
                                    roundedCircle
                                        alt=""
                                        src={avatar ? avatar : Perfil}
                                        width="35"
                                        height="35"
                                        className="d-inline-block align-top "
                                    />
                                </Navbar.Brand>
                                <NavDropdown title="Perfil" id="dropdown-menu-align-end" align="end" >
                                    <NavDropdown.Item href="/Empresas/DatosEmpresa">Datos Generales</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={logoutUser}>Cerrar Sesion</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            </Affix>
          <Content>
            <LoadRouters routes={routes} />
          </Content>
        </Layout>
      </Layout>
    );
  }
  return null;
}

function LoadRouters({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
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
