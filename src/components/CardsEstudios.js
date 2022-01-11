import React from "react";
import { Row, Col, Form } from 'react-bootstrap';
import { Button, Container, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import CheckListEstudios from './CheckListEstudios';

function CardsEstudios(props) {
  const { post } = props;
  return (
    <>

      <Container className="ContenedorEstudios">
        <Row className="mb-3" >
          <Form.Group as={Col} md="4" className="Candidato">
            <Form.Label className="ImgEstudios">{post.Nombre}</Form.Label>
            <Image src={post.Imagen} roundedCircle width="70px" height="70px" />
          </Form.Group>
          <Form.Group as={Col} md="5" className="Aspectos">

          <CheckListEstudios />

          </Form.Group>
          <Form.Group as={Col} md="3" className="Aplica1">
            <Button variant="outline-primary" className="BtnEstudio2">Aplicar Estudio</Button>{' '}
          </Form.Group>
        </Row>

      </Container>
    </>


  );



}
CardsEstudios.propTypes = {
  post: PropTypes.shape({
    Nombre: PropTypes.string.isRequired,
    Imagen: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
export default CardsEstudios;