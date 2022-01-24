import React, { useState, useEffect } from "react";
import { Row, Col, Form } from 'react-bootstrap';
import { Button, Container, Image } from 'react-bootstrap';
import { getAvatarApi } from '../api/user';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Perfil from '../assets/img/jpg/Usuario.jpg';
import { notification } from 'antd';
import { getAccessTokenApi } from '../api/auth';
import { CreateStudiesApi } from '../api/studies';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 1;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Datos Medicos',
  'Referencias Personales',
  'Marco familiar',
  'Datos de la vivienda',
  'Área económica',
];


function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


function CardsEstudios(props) {
  const { post } = props;

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [estado, setEstado] = React.useState(false);
  const [textButton, setTextButton] = React.useState("Aplicar Estudio")
  const [variantButton, setVarinatButton] = React.useState("outline-primary");
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const [avatar, setAvatar] = useState(null);
  useEffect(() => {

    getAvatarApi(post.avatar).then(response => {
      setAvatar(response);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [avatar])

  const aplicarEstudio = estudio => {
    const token = getAccessTokenApi();
    const datos = {
      name: estudio.nameUser,
      lastnameP: estudio.lastnameP,
      lastnameM: estudio.lastnameM,
      email: estudio.email,
      studies: personName,
    }
    if (personName.length !== 0) {

      CreateStudiesApi(token, datos).then(result => {
        if (result.ok) {
          notification["success"]({
            message: result.message,
            placement: "bottomLeft"
          })
          setEstado(true);
          setTextButton("Solicitado");
          setVarinatButton("outline-secondary");
        } else {
          notification["error"]({
            message: result.message,
            placement: "bottomLeft"
          })
        }
      }).catch(err => {
        notification["error"]({
          message: err.message,
          placement: "bottomLeft"
        })
      })

    } else {
      notification["error"]({
        message: "Seleccione una opción",
        placement: "bottomLeft",
      });
    }
  }
  return (
    <>

      <Container className="ContenedorEstudios">
        <Row className="mb-3" >
          <Form.Group as={Col} md="4" className="Candidato">
            <Form.Label className="ImgEstudios">{post.nameUser}</Form.Label>
            <Image src={avatar ? avatar : Perfil} roundedCircle width="70px" height="70px" />
          </Form.Group>
          <Form.Group as={Col} md="5" className="Aspectos">

            <FormControl sx={{ width: 225 }} className='mt-4'>
              <InputLabel id="demo-multiple-name-label" style={{ backgroundColor: "white" }}>Seleccionar Aspectos</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

          </Form.Group>
          <Form.Group as={Col} md="3" className="Aplica1">
            <Button variant={variantButton} disabled={estado} onClick={() => aplicarEstudio(post)} className="BtnEstudio2">{textButton}</Button>{' '}
          </Form.Group>
        </Row>

      </Container>
    </>


  );



}
export default CardsEstudios;