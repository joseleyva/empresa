import React from "react";
import { Row, Col, Image } from 'react-bootstrap';
import { Button, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

function CardsRefRecibidas(props)  {
    const { post} = props;
        return (
            <>

                <Container className="ContenedorRefRec">
                    <Row>
                        <Col xs={2} md={1}>
                            <Image src={post.Imagen} roundedCircle width="110px" height="118px" />
                        </Col>
                    </Row>
                    <div> 
                        <div class="col-md-10">
                            <div class="card-body">
                                <h6 align="left">Nombre del Candidato: </h6>
                                <h5 align="left">{post.Nombre}</h5>
                                    <Button variant="outline-primary" className="BtnRefRec">Ver</Button>
                            </div>

                        </div>
                        

                    </div>

                </Container>
            </>


        );

    

}
CardsRefRecibidas.propTypes = {
    post: PropTypes.shape({
      Nombre: PropTypes.string.isRequired,
      Imagen: PropTypes.string.isRequired,
      id:PropTypes.number.isRequired,
    }).isRequired,
  };
export default CardsRefRecibidas;