import { Divider } from '@mui/material';
import React from 'react';
import { Button, Row, Col, Form, Image } from "react-bootstrap";
import Imagen from '../../../assets/img/jpg/Usuario.jpg';
export default function InfoCandidate(props) {
  const { candidato, avatar, setIsVisibleModal } = props;
  return (
    <div >
      <Row className="mb-3">
        <Col></Col>
        <Col xs={5} style={{ textAlign: "center" }}>
          <Image src={avatar ? avatar : Imagen} roundedCircle width="180px" height="180px" />
        </Col>
        <Col></Col>
      </Row>
      <Row className='mb-2'>
        <h3>Datos Personales:</h3>
      </Row>
      <Row className='mb-2'>
        <Form.Group as={Col} md="4">
          <Form.Label>Nombre del candidato:</Form.Label>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label style={{ fontFamily: "sans-serif", fontWeight: "bold", fontSize: 16 }}>{`${candidato.nameUser} ${candidato.lastnameP} ${candidato.lastnameM}`}</Form.Label>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label></Form.Label>
        </Form.Group>
      </Row>
      <Row className='mb-3'>
        <Form.Group as={Col} md="5">
          <Form.Label>Fecha de naciemiento:</Form.Label>
          <Form.Control
            disabled
            defaultValue={"24 de marzo de 1990"}
          />
        </Form.Group>
        <Form.Group as={Col} md="5">
          <Form.Label>Lugar de naciemiento:</Form.Label>
          <Form.Control
            disabled
            defaultValue={"Durango, DGO."}
          />
        </Form.Group>

      </Row>
      <Row className='mb-3'>
        <Form.Group as={Col} md="4">
          <Form.Label>Teléfono (Celular):</Form.Label>
          <Form.Control
            disabled
            defaultValue={"6181456987"}
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Teléfono (Casa):</Form.Label>
          <Form.Control
            disabled
            defaultValue={"6181456987"}
          />
        </Form.Group>
      </Row>
      <Row className='mb-2'>
        <Form.Group as={Col} md="5">
          <Form.Label>Calle:</Form.Label>
          <Form.Control
            disabled
            defaultValue={"Zapopan"}
          />
        </Form.Group>
        <Form.Group as={Col} md="2">
          <Form.Label > Numero:</Form.Label>
          <Form.Control
            disabled
            defaultValue={"456"}
          />
        </Form.Group>
        <Form.Group as={Col} md="5">
          <Form.Label>Colonia:</Form.Label>
          <Form.Control
            disabled
            defaultValue={"Huizache 1"}
          />
        </Form.Group>
      </Row>
      <Row className='mb-2'>
        <Form.Group as={Col} md="4">
          <Form.Label>Codigo postal:</Form.Label>
          <Form.Control
            disabled
            defaultValue={"34500"}
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label > Estado:</Form.Label>
          <Form.Control
            disabled
            defaultValue={"Durango"}
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Municipio:</Form.Label>
          <Form.Control
            disabled
            defaultValue={"Durango"}
          />
        </Form.Group>
      </Row>
      <Divider />
      <Row className='mb-2'>
        <h3>Datos Academicos:</h3>
      </Row>

      <Row className="mb-2">
        <Form.Group as={Col} md="4">
          <Form.Label>Último grado alcanzado</Form.Label>
          <Form.Control
            disabled
            defaultValue={"Universidad"}
          />
        </Form.Group>

        <Form.Group as={Col} md="4">
          <Form.Label>Avance Academico:</Form.Label>
          <Form.Control
            disabled
            defaultValue={"Terminado"}
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Fecha de Inicio:</Form.Label>
          <Form.Control
            disabled
            defaultValue={"Enero de 2020"}
          />
        </Form.Group>
      </Row>
      <Row className='mb-2'>
        <Form.Group as={Col} md="4">
          <Form.Label>Fecha de Termino:</Form.Label>
          <Form.Control
            disabled
            defaultValue={"Enero de 2021"}
          />
        </Form.Group>
        <Form.Group as={Col} md="8">
          <Form.Label>Instituto:</Form.Label>
          <Form.Control
            disabled
            defaultValue={"Instituto Tecnologico de durango"}
          />
        </Form.Group>

      </Row>
      <Row className='mb-2'>
        <Form.Group as={Col} md="5">
          <Form.Label>Carrera: </Form.Label>
          <Form.Control
            disabled
            defaultValue={"Sistemas"}
          />
        </Form.Group>
      </Row>
      <Divider />
      <Row className='mb-1'>
        <h3>Datos Laborales</h3>
      </Row>
      <Row className='mb-2'>
        <h5>Último trabajo</h5>
        <Form.Group as={Col} md="4">
          <Form.Label>Empresa:</Form.Label>
          <Form.Control
            disabled
            defaultValue={"ALEF GLOBAL"}
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Puesto:</Form.Label>
          <Form.Control
            disabled
            defaultValue={"Desarrollador"}
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Area o departamento:</Form.Label>
          <Form.Control
            disabled
            defaultValue={"Sistemas"}
          />
        </Form.Group>

      </Row>
      <Row className='mb-3'>
        <Form.Group as={Col} md="4">
          <Form.Label>Fecha de Inicio</Form.Label>
          <Form.Control
            disabled
            defaultValue={"Enero de 2020"}
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Fecha de termino</Form.Label>
          <Form.Control
            disabled
            defaultValue={"enero de 2021"}
          />
        </Form.Group>

        <Form.Group as={Col} md="4">
          <Form.Label>Años de Experiancia:</Form.Label>
          <Form.Control
            disabled
            defaultValue={candidato.yearsEx}
          />
        </Form.Group>
      </Row>
      <Row className='mb-2'>
        <h5>Experiancia laboral</h5>
      </Row>
      <Row className='mb-3'>
        <Form.Group as={Col} md="4">
          <Form.Label>Empresa:</Form.Label>
          <Form.Control
            disabled
            defaultValue={"ALEF GLOBAL"}
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Puesto:</Form.Label>
          <Form.Control
            disabled
            defaultValue={"Desarrollador"}
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Área o departamento</Form.Label>
          <Form.Control
            disabled
            defaultValue={"Sistemas"}
          />
        </Form.Group>
      </Row>
      <Row className='mb-2'>
        <Form.Group as={Col} md="4">
          <Form.Label>Fecha de Inicio:</Form.Label>
          <Form.Control
            disabled
            defaultValue={"Enero de 2020"}
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Fecha de Terminacion</Form.Label>
          <Form.Control
            disabled
            defaultValue={"Enero de 2021"}
          />
        </Form.Group>
      </Row>
      <Row className='mb-2'>
        <Form.Group as={Col} md="10">
          <Form.Label>Breve descripción del puesto: </Form.Label>
          <Form.Control
            disabled
            style={{ resize: "none" }}
            as="textarea"
            rows={4}
            defaultValue={"Breve descripcion sobre el trabajo que realizabas en el puesto de trabajo"}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4">
          <Form.Label> Continuar con el proceso: </Form.Label>
        </Form.Group>
        <Form.Group as={Col} md="4" className='d-grid gap-2'>
          <Button>Si</Button>
        </Form.Group>
        <Form.Group as={Col} md="4" className='d-grid gap-2'>
          <Button variant='danger'>No</Button>
        </Form.Group>
      </Row>
      <Row className='mb-3'>
        <Col className='d-grid gap-2'>
          <Button variant='outline-danger'> Eliminar</Button>
        </Col>
        <Col className='d-grid gap-2'>
          <Button variant='outline-success'>Contratar</Button>
        </Col>
        <Col className='d-grid gap-2'>
          <Button variant='outline-primary' onClick={() => setIsVisibleModal(false)}>Cerrar</Button>
        </Col>
      </Row>
    </div>
  );
}
