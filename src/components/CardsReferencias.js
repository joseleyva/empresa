import React from "react";
import { Row, Col, Image } from 'react-bootstrap';
import { Button, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

function CardsReferencias(props)  {
    const { post} = props;
        return (
            <>

                <Container className="ContenedorRef">
                    <Row>
                        <Col xs={2} md={1}>
                            <Image src={post.Imagen} roundedCircle width="100px" height="100px" />
                        </Col>
                    </Row>
                    <div>
                        <div class="col-md-10">
                            <div class="card-body">
                                <h5 align="left">El Candidato {post.Nombre} ha mencionado haber trabajado con la empresa a la que representas</h5>
                                <div className="DivRef">
                                    <label>¿Trabajó en la empresa?</label>
                                    <div className="BtnsRef">
                                    <Button variant="primary" href="/FormReferencias" className="botonRef" >Si</Button>
                                    <Button variant="danger" className="botonRef" >No</Button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        

                    </div>

                </Container>
            </>


        );

    

}
CardsReferencias.propTypes = {
    post: PropTypes.shape({
      Nombre: PropTypes.string.isRequired,
      Imagen: PropTypes.string.isRequired,
      id:PropTypes.number.isRequired,
    }).isRequired,
  };
export default CardsReferencias;