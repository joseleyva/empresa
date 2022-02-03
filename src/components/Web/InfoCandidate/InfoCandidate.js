import React from 'react';
import {Button,Row, Col, Form, Image} from "react-bootstrap";
import Imagen from '../../../assets/img/jpg/Usuario.jpg';
export default function InfoCandidate(props) {
    const {candidato, avatar,setIsVisibleModal} = props;
  return (
      <div>
          <Row className="mb-3"> 
              <Col></Col>
              <Col xs={5}>
            <Image src={avatar ? avatar : Imagen} roundedCircle width="200px" height="200px"/>
              </Col>
              <Col></Col>
          </Row>
          <Row className='mb-3'>
           <Form.Group as={Col} md="4">
            <Form.Label>Nombre del candidato:</Form.Label>
           </Form.Group>
           <Form.Group as={Col} md="4">
            <Form.Label style={{fontFamily: "sans-serif", fontWeight: "bold", fontSize: 16}}>{`${candidato.nameUser} ${candidato.lastnameP} ${candidato.lastnameM}`}</Form.Label>
           </Form.Group>
           <Form.Group as={Col} md="4">
            <Form.Label></Form.Label>
           </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group as={Col} md="4">
                <Form.Label>Años de Experiancia:</Form.Label>
                <Form.Control
                onlyRead
                disabled
                defaultValue={candidato.yearsEx}
                />
            </Form.Group>
            <Form.Group as={Col} md="4">
                <Form.Label>Área:</Form.Label>
                <Form.Control
                onlyRead
                disabled
                defaultValue={candidato.workArea}
                />
            </Form.Group>
            <Form.Group as={Col} md="4">
                <Form.Label>Escolaridad: </Form.Label>
                <Form.Control
                disabled
                onlyRead
                />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4">
                <Form.Label>  </Form.Label>
            </Form.Group>
            <Form.Group as={Col} md="4">

            </Form.Group>
            <Form.Group as={Col} md="4">

            </Form.Group>
          </Row>
          <Row>

          </Row>
          <Row className='mb-3'>
            <Col className='d-grid gap-2'>
            <Button variant='outline-danger'> Eliminar</Button>
            </Col>
            <Col className='d-grid gap-2'>
            <Button variant='outline-success'>Contratar</Button>
            </Col>
            <Col className='d-grid gap-2'>
            <Button variant='outline-primary' onClick={()=> setIsVisibleModal(false)}>Cerrar</Button>
            </Col>
          </Row>
      </div>
  );
}
