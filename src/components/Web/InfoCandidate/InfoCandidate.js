import { Divider } from '@mui/material';
import React from 'react';
import { Button, Row, Col, Form, Image } from "react-bootstrap";
import Imagen from '../../../assets/img/jpg/Usuario.jpg';
import { Descriptions } from 'antd';

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
      <Descriptions className='mb-3' size='small' layout="vertical" bordered>
        <Descriptions.Item label="Nombre">{candidato.nameUser}</Descriptions.Item>
        <Descriptions.Item label="Apellido Paterno">{candidato.lastnameP}</Descriptions.Item>
        <Descriptions.Item label="Apellido Materno">{candidato.lastnameM}</Descriptions.Item>
        <Descriptions.Item label="Teléfono (Casa)">6181546544</Descriptions.Item>
        <Descriptions.Item label="Teléfono (Celular)" span={2}>6189779878</Descriptions.Item>
        <Descriptions.Item label="Calle">Zapopan</Descriptions.Item>
        <Descriptions.Item label="Numero">456</Descriptions.Item>
        <Descriptions.Item label="Colonia">Huizache 1</Descriptions.Item>
        <Descriptions.Item label="Codígo postal">34500</Descriptions.Item>
        <Descriptions.Item label="Estado">Durango</Descriptions.Item>
        <Descriptions.Item label="Municipio">Durango</Descriptions.Item>
      </Descriptions>
      <Divider />
      <Row className='mb-2'>
        <h3>Datos Academicos:</h3>
      </Row>
      <Descriptions className='mb-3' size='small' layout='vertical' bordered>
        <Descriptions.Item label="Último grado alcanzado">Universidad</Descriptions.Item>
        <Descriptions.Item label="Avance academico" span={2}>Terminado</Descriptions.Item>
        <Descriptions.Item label="Fecha de inicio" > Enero de 2020</Descriptions.Item>
        <Descriptions.Item label="Fecha de termino"> Enero de 2021</Descriptions.Item>
        <Descriptions.Item label="Instituto"> Instituto Tecnologico de Durango</Descriptions.Item>
        <Descriptions.Item label="Carrera">Sistemas</Descriptions.Item>
      </Descriptions>

      <Divider />
      <Row className='mb-1'>
        <h3>Datos Laborales</h3>
      </Row>
      <Descriptions className='mb-3' title="Último trabajo" size='small' layout='vertical' bordered>
        <Descriptions.Item label="Empresa">ALEF GLOBAL</Descriptions.Item>
        <Descriptions.Item label="Puesto">Desarrollador</Descriptions.Item>
        <Descriptions.Item label="Area o Departamento">Sistemas</Descriptions.Item>
        <Descriptions.Item label="Fecha de inicio">Enero de 2020</Descriptions.Item>
        <Descriptions.Item label="Fecha de termino">Enero de 2021</Descriptions.Item>
        <Descriptions.Item label="Años de Experiencia">2 Años</Descriptions.Item>
      </Descriptions>
      <Divider />
      <Descriptions title="Experiencia laboral" className='mb-3' size='small' layout='vertical' bordered>
        <Descriptions.Item label="Empresa">ALEF GLOBAL</Descriptions.Item>
        <Descriptions.Item label="Puesto">Desarrollador</Descriptions.Item>
        <Descriptions.Item label="Area o Departamento">Sistemas</Descriptions.Item>
        <Descriptions.Item label="Fecha de inicio">Enero de 2020</Descriptions.Item>
        <Descriptions.Item label="Fecha de termino" span={2}>Enero de 2021</Descriptions.Item>
        <Descriptions.Item label="Breve descripción del puesto">
          Breve descripción del puesto que desarrollo en su paso por la Empresas<br/>
          Empresa en la que se trabajo en todo este tiempo

        </Descriptions.Item>

      </Descriptions>
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
