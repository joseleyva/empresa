import React from "react";
import { Row, Col, Image } from 'react-bootstrap';
import { Dropdown, ButtonGroup, Button, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Imagen from '../assets/img/jpg/imagen1.jpg';

function Cartas(props) {
    const { post} = props;
        return (
            <>

                <Container className="ContenedorV">
                    <Row className="IconCartas">
                        <Col xs={2} md={1}>
                            <Image src={Imagen} roundedCircle width="150px" height="150px" />
                        </Col>
                    </Row>
                    <div className="C">
                        <div class="col-md-10">
                            <div class="card-body">
                                <h5 align="left" class="card-title">Nombre: {post.Nombre}</h5>
                                <h5 align="left" class="card-title">Area: <h7>{post.Area}</h7></h5>
                                <h5 align="left" class="card-title">Experiencia: <label>{post.Experiancia}</label></h5>
                                <h5 align="left" class="card-title">Examenes:</h5>
                                <Dropdown as={ButtonGroup}  >
                                    <Button variant="success" className="Opciones">Opciones</Button>
                                    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Opcion 1</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Opcion 2</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Crear uno</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <div className="BtnV">
                                    <Button variant="primary" className="boton" >Enviar Examen</Button>
                                    <Button variant="primary" className="boton" >Ver más</Button>
                                </div>
                            </div>

                        </div>

                    </div>

                </Container>
            </>


        );

    

}

Cartas.propTypes = {
    post: PropTypes.shape({
      Nombre: PropTypes.string.isRequired,
      Area: PropTypes.string.isRequired,
      Experiancia: PropTypes.string.isRequired,
      id:PropTypes.number.isRequired,
    }).isRequired,
  };

export default Cartas;