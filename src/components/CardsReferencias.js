import React from "react";
import { Row, Col, Image } from 'react-bootstrap';
import { Button, Container } from 'react-bootstrap';
import FormReferencias from "./FormReferencias";

function CardsReferencias(props)  {
    const { post} = props;
        return (

                <Container className="ContenedorRef">
                    <Row>
                        <Col xs={2} md={1}>
                            <Image src={post.avatar} roundedCircle width="100px" height="100px" />
                        </Col>
                    </Row>
                    <div>
                        <div class="col-md-10">
                            <div class="card-body">
                                <h5 align="left">El Candidato {`${post.nameUser} ${post.lastnameP} ${post.lastnameM}`} ha mencionado haber trabajado con la empresa a la que representas</h5>
                                <div className="DivRef">
                                    <label>¿Trabajó en la empresa?</label>
                                    <div className="BtnsRef">
                                    <Button variant="primary" onClick={()=>FormReferencias(post)} className="botonRef" >Si</Button>
                                    <Button variant="danger" className="botonRef" >No</Button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        

                    </div>


                </Container>


        );

    

}

export default CardsReferencias;