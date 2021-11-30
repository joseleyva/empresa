import React from "react";
import { Row, Col, Form } from 'react-bootstrap';
import { Button, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

function CardsReferenciasMini(props)  {
    const { post} = props;
        return (
            <>

                <Container className="ContenedorRefMini">
                   <Row className="mb-3">
                    <Form.Group as={Col} md="4">
                    <Form.Label>{post.Nombre}</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                    <Form.Label>{post.Area}</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                    <Form.Label>{post.Experiencia}</Form.Label>
                    </Form.Group>
                   </Row> 
                   <Row>
                   <Button variant="outline-primary"  className="BtnRefMini">Pedir Referencias</Button>{' '}
                   </Row>
                </Container>
            </>


        );

    

}
CardsReferenciasMini.propTypes = {
    post: PropTypes.shape({
      Nombre: PropTypes.string.isRequired,
      Area: PropTypes.string.isRequired,
      Experiencia: PropTypes.string.isRequired,
      id:PropTypes.number.isRequired,
    }).isRequired,
  };
export default CardsReferenciasMini;