import React from "react";
import { Row, Col, Form } from 'react-bootstrap';
import { Button, Container } from 'react-bootstrap';

function CardsReferenciasMini(props)  {
    const { post} = props;
        return (
            <>

                <Container className="ContenedorRefMini">
                   <Row className="mb-3">
                    <Form.Group as={Col} md="4">
                    <Form.Label>{post.nameUser}</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                    <Form.Label>{post.email}</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                    <Form.Label>{post.name}</Form.Label>
                    </Form.Group>
                   </Row> 
                   <Row>
                   <Button variant="outline-primary"  className="BtnRefMini">Pedir Referencias</Button>{' '}
                   </Row>
                </Container>
            </>


        );

    

}

export default CardsReferenciasMini;