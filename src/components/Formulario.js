import React, { useState, useEffect } from 'react';
import { Form, Col, Button, Row, InputGroup } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { NoEmpleadosOp } from './Opciones';
import ModalPagos from './ModalPagos';
import useAuth from '../hooks/useAuth';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { getAccessTokenApi } from '../api/auth';
import { updateInfoUserApi, uploadCardApi } from '../api/user';
import { notification } from 'antd';
import {logout} from '../api/auth'
import Dropzone from 'react-dropzone';

const schema = yup.object().shape({
  nameUser: yup.string().required("Ingrese su nombre").matches(/^[a-zA-Z ]+$/, "Solo letras"),
  lastnameP: yup.string().required("Ingrese su apellido").matches(/^[a-zA-Z ]+$/, 'Solo letras'),
  lastnameM: yup.string().required("Ingrese su apellido").matches(/^[a-zA-Z ]+$/, 'Solo letras'),
  numberphone: yup.string().matches(/^[0-9]+$/, 'Ingrese solo numeros').max(10, 'Muy largo').min(10, 'Muy corto').required("Ingrese su numero"),
  numberEm: yup.string().required('Seleccione una opción'),
  RFC: yup.string().required("Ingrese el RFC").max(13, 'Muy largo').min(13, 'Muy Corto').matches(/^[a-zA-Z0-9]+$/, 'No se aceptan caracteres especiales'),
  RSocial: yup.string().required("Ingrese la Razón Social").matches(/^[a-zA-Z -&]+$/),
  street: yup.string().required("Ingrese la calle").matches(/^[a-zA-Z -&]+$/),
  houseNumber: yup.string().required("Ingrese el numero").matches(/^[a-zA-Z 0-9]+$/),
  suburb: yup.string().required("Ingrese la Col/Fracc").matches(/^[a-zA-Z -&]+$/),
  zip: yup.string().required("Ingrese el Codigo postal").matches(/^[0-9]+$/, 'Solo numeros'),
  estado: yup.string().required("Ingrese el Estado").matches(/^[a-zA-Z ]+$/),
});

function Formulario() {
  const [validated, setValidated] = useState(false);
  const [fallo, setFallo] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [show, setShow] = useState(false);
  const {user} = useAuth();
  const token = getAccessTokenApi();
  const [card, setCard]=useState(null);
 

  const handleShow = () => setShow(!show);
  const handleClick = (event) => {
    const Button = event.currentTarget;
    if (Button.checkValidity() === false) {

    }
    setOpen(true);
    setFallo(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    logout();
    window.location.reload();

  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(valores, { resetForm }) => {
        setValidated(true);
       

        updateInfoUserApi(token, valores, user.id).then(result=>{
          notification["success"]({
              message: result.message,
              placement: "bottomLeft",
            });
            uploadCardApi(token, card, user.id).then(result=>{
              if(result.ok){
              notification["success"]({
                message: result.message,
                placement: "bottomLeft",
              });
              setEnviado(true);
            }else{
              notification["error"]({
                message: result.message,
                placement: "bottomLeft",
              });  
            }
              
        }).catch(err=>{
            notification["error"]({
                message: err.message,
                placement: "bottomLeft",
              });
        })
            
            
      }).catch(err=>{
          notification["error"]({
              message: err.message,
              placement: "bottomLeft",
            });
      })
        
      }}
      initialValues={{
        active: false,
        date: true,
        nameUser: '',
         lastnameP: '',
        lastnameM: '',
        numberphone: '',
        numberEm: '',
        RFC: '',
        RSocial: '',
        street: "",
        houseNumber: "",
        suburb: "",
        zip: "",
        estado: "",
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form className="FormD" validated={validated} noValidate onSubmit={handleSubmit}>
          <h4>Datos de acceso y Contacto</h4>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
              <Form.Label>Nombre(s)</Form.Label>
              <Form.Control
                type="text"
                name="nameUser"
                placeholder="Nombre(s)"
                value={values.nameUser}
                onChange={handleChange}
                isValid={touched.nameUser && !errors.nameUser}
                isInvalid={fallo ? !!errors.nameUser : false}
                required
              />
              <Form.Control.Feedback type="invalid" tooltip>{errors.nameUser}</Form.Control.Feedback>

            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikLastNameP" className="position-relative">
              <Form.Label>Apellido Paterno</Form.Label>
              <Form.Control
                type="text"
                name="lastnameP"
                placeholder="Apellido"
                value={values.lastnameP}
                onChange={handleChange}
                isValid={touched.lastnameP && !errors.lastnameP}
                isInvalid={fallo ? !!errors.lastnameP : false}
                required
              />
              <Form.Control.Feedback type="invalid" tooltip>{errors.lastnameP}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationFormikLastnameM" className="position-relative">
              <Form.Label>Apellido Materno</Form.Label>
              <Form.Control
                type="text"
                name="lastnameM"
                placeholder="Apellido"
                value={values.lastnameM}
                onChange={handleChange}
                isValid={touched.lastnameM && !errors.lastnameM}
                isInvalid={fallo ? !!errors.lastnameM : false}
                required
              />
              <Form.Control.Feedback type="invalid" tooltip>{errors.lastnameM}</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormikNumberPhone" className="position-relative">
              <Form.Label>Telefono</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="No. Telefono"
                  name="numberphone"
                  value={values.numberphone}
                  onChange={handleChange}
                  isValid={touched.numberphone && !errors.numberphone}
                  isInvalid={fallo ? !!errors.numberphone : false}
                  required
                />
                <Form.Control.Feedback type="invalid" tooltip>{errors.numberphone}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-2">
            <h4>Datos de la Empresa</h4>
          </Row>
          <Row className="mb-2">
            <Form.Group as={Col} md="6" controlId="validationFormikRFC" className="position-relative">
              <Form.Label>R.F.C.</Form.Label>
              <Form.Control
                type="text"
                placeholder="R.F.C."
                name="RFC"
                value={values.RFC}
                onChange={handleChange}
                isValid={touched.RFC && !errors.RFC}
                isInvalid={fallo ? !!errors.RFC : false}
                required
              />

              <Form.Control.Feedback type="invalid" tooltip>{errors.RFC}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik04" className="position-relative">
              <Form.Label>Razon Social</Form.Label>
              <Form.Control
                type="text"
                placeholder="Razon Social"
                name="RSocial"
                value={values.RSocial}
                onChange={handleChange}
                isValid={touched.RSocial && !errors.RSocial}
                isInvalid={fallo ? !!errors.RSocial : false}
                required
              />
              <Form.Control.Feedback type="invalid" tooltip>{errors.RSocial}</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormik03" className="position-relative">
              <Form.Label>Numero de empleados</Form.Label>
              <Form.Select
                type="select"
                name="numberEm"
                value={values.numberEm}
                onChange={handleChange}
                isValid={touched.numberEm && !errors.numberEm}
                isInvalid={fallo ? !!errors.numberEm : false}
                required
              >
                <option value="">Seleccione</option>
                {Object.keys(NoEmpleadosOp).map((x, i) => (<option value={x} key={i}>{x}</option>))}
              </Form.Select>
              <Form.Control.Feedback type="invalid" tooltip>{errors.numberEm}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="8" className="position-relative" >
              <Form.Label>Cedula fiscal</Form.Label>
              <UploadAvatar card={card} setCard={setCard}/>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Label>DIRECCIÓN:</Form.Label>
            <Form.Group as={Col} md="5" controlId="validationFormikStreet" className="position-relative">
              <Form.Label>Calle</Form.Label>
              <Form.Control
                type="text"
                placeholder="Calle"
                name="street"
                value={values.street}
                onChange={handleChange}
                isValid={touched.street && !errors.street}
                isInvalid={fallo ? !!errors.street : false}
                required
              />
              <Form.Control.Feedback type="invalid" tooltip>{errors.street} </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="validationFormikHouseNumber" className="position-relative">
              <Form.Label>Numero</Form.Label>
              <Form.Control
                type="text"
                placeholder="Numero"
                name="houseNumber"
                value={values.houseNumber}
                onChange={handleChange}
                isValid={touched.houseNumber && !errors.houseNumber}
                isInvalid={fallo ? !!errors.houseNumber : false}
                required
              />
              <Form.Control.Feedback type="invalid" tooltip>{errors.houseNumber} </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="5" controlId="validationFormikSuburb" className="position-relative">
              <Form.Label>Colonia o Fraccionamiento</Form.Label>
              <Form.Control
                type="text"
                placeholder="Colonia"
                name="suburb"
                value={values.suburb}
                onChange={handleChange}
                isValid={touched.suburb && !errors.suburb}
                isInvalid={fallo ? !!errors.suburb : false}
                required
              />
              <Form.Control.Feedback type="invalid" tooltip>{errors.suburb} </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationFormikZip" className="position-relative">
              <Form.Label>Codigo Postal</Form.Label>
              <Form.Control
                type="text"
                placeholder="Codigo"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isValid={touched.zip && !errors.zip}
                isInvalid={fallo ? !!errors.zip : false}
                required
              />
              <Form.Control.Feedback type="invalid" tooltip>{errors.zip} </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikEstado" className="position-relative">
              <Form.Label>Estado</Form.Label>
              <Form.Control
                type="text"
                placeholder="Estado"
                name="estado"
                value={values.estado}
                onChange={handleChange}
                isValid={touched.estado && !errors.estado}
                isInvalid={fallo ? !!errors.estado : false}
                required
              />
              <Form.Control.Feedback type="invalid" tooltip>{errors.estado} </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3">
              <Form.Label>Paquetes Ofrecidos </Form.Label>
              <Button variant="outline-success" onClick={handleShow}>Pagar Servicio</Button>
            </Form.Group>
          </Row>


          <div className="divBD">
            <Button type="submit" onClick={handleClick} className="boton">Guardar</Button>
            <Button variant="danger" href="/"  className="boton">Cancelar</Button>
          </div>
          {
            (enviado && (
              <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
              >
                <DialogTitle id="responsive-dialog-title">
                  {"Registro"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Tus datos serán verificados a la brevedad
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} autoFocus>
                    Aceptar
                  </Button>
                </DialogActions>
              </Dialog>
            ))
          }
          {(show && (
            <ModalPagos />
          ))}

        </Form>
      )}

    </Formik>

  );

}


function UploadAvatar(props){
  const {card, setCard}=props;
  const [cardUrl, setCardUrl]= useState(null);
  useEffect(()=>{
    if(card){
      if(card){
        setCardUrl(card[0].name)
      }else{
          setCardUrl(card[0].name)
        }
    }else{
      setCardUrl(null);
    }
  }, [card]);

  
  return (
<Dropzone onDrop={file => setCard(file)}>
  {({getRootProps, getInputProps}) => (
    <div className="container">
      <div
        {...getRootProps({
          className: 'dropzone',
          onDrop: event => event.stopPropagation()
        })}
      >
        <input 
        {...getInputProps({
          required:false,
      type:"file",
        accept:".pdf"})} />
      <p>{cardUrl ? cardUrl : "Presione aquí para subir un archivo"}</p>
      </div>
    </div>
  )}
</Dropzone>

  );
}

export default Formulario;