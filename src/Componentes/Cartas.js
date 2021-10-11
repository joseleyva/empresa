import React, { Component } from "react";
import { Row, Col, Image } from 'react-bootstrap';
import { Dropdown, ButtonGroup, Button, Container } from 'react-bootstrap';


class Cartas extends Component {
    constructor(props){
        super(props)
        this.state = {

        };
    }
    render() {
        return (
            <>

                <Container className="ContenedorV">
                    <Row>
                        <Col xs={2} md={1}>
                            <Image src="imagen1.jpg" roundedCircle width="150px" height="150px" />
                        </Col>
                    </Row>
                    <div className="C">
                        <div class="col-md-10">
                            <div class="card-body">
                                <h5 align="left" class="card-title">Nombre: </h5>
                                <h5 align="left" class="card-title">Area: </h5>
                                <h5 align="left" class="card-title">Experiencia:</h5>
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

}

export default Cartas;