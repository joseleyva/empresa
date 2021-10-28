import React, { useState } from 'react';
import { Form, Col, Button, Row, InputGroup } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { NoEmpleadosOp } from './Opciones';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


const schema = yup.object().shape({
  Nombre: yup.string().required("Ingrese su nombre").matches(/^[a-zA-Z ]+$/, "Solo letras"),
  ApellidoM: yup.string().required("Ingrese su apellido").matches(/^[a-zA-Z ]+$/, 'Solo letras'),
  ApellidoP: yup.string().required("Ingrese su apellido").matches(/^[a-zA-Z ]+$/, 'Solo letras'),
  Telefono: yup.string().matches(/^[0-9]+$/, 'Ingrese solo numeros').max(10, 'Muy largo').min(10, 'Muy corto').required("Ingrese su numero"),
  NoEmpleados: yup.string().required('Seleccione una opción'),
  RFC: yup.string().required("Ingrese el RFC").max(13, 'Muy largo').min(13, 'Muy Corto').matches(/^[a-zA-Z0-9]+$/, 'No se aceptan caracteres especiales'),
  RSocial: yup.string().required("Ingrese la Razón Social").matches(/^[a-zA-Z -&]+$/),
  Calle: yup.string().required("Ingrese la calle").matches(/^[a-zA-Z -&]+$/),
  Numero: yup.string().required("Ingrese el numero").matches(/^[a-zA-Z 0-9]+$/),
  Colonia: yup.string().required("Ingrese la Col/Fracc").matches(/^[a-zA-Z -&]+$/),
  Codigo: yup.string().required("Ingrese el Codigo postal").matches(/^[0-9]+$/, 'Solo numeros'),
  Estado: yup.string().required("Ingrese el Estado").matches(/^[a-zA-Z ]+$/),
  Cedula: yup.mixed().required("Ingrese su Cedula"),
});

function Formulario() {
  const [validated, setValidated] = useState(false)
  const [fallo, setFallo] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

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
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(valores, { resetForm }) => {
        console.log(valores)
        setEnviado(true);
        setValidated(true);
        setTimeout(() => setEnviado(false), 5000);
      }}
      initialValues={{
        Nombre: '',
        ApellidoM: '',
        ApellidoP: '',
        Telefono: '',
        NoEmpleados: '',
        RFC: '',
        RSocial: '',
        Calle:"",
        Numero:"",
        Colonia:"",
        Codigo:"",
        Estado:"",
        Cedula:null,
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
                name="Nombre"
                placeholder="Nombre(s)"
                value={values.Nombre}
                onChange={handleChange}
                isValid={touched.Nombre && !errors.Nombre}
                isInvalid={fallo ? !!errors.Nombre : false}
                required
              />
              <Form.Control.Feedback type="invalid" tooltip>{errors.Nombre}</Form.Control.Feedback>

            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02" className="position-relative">
              <Form.Label>Apellido Materno</Form.Label>
              <Form.Control
                type="text"
                name="ApellidoM"
                placeholder="Apellido"
                value={values.ApellidoM}
                onChange={handleChange}
                isValid={touched.ApellidoM && !errors.ApellidoM}
                isInvalid={fallo ? !!errors.ApellidoM : false}
                required
              />
              <Form.Control.Feedback type="invalid" tooltip>{errors.ApellidoM}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationFormik02" className="position-relative">
              <Form.Label>Apellido Paterno</Form.Label>
              <Form.Control
                type="text"
                name="ApellidoP"
                placeholder="Apellido"
                value={values.ApellidoP}
                onChange={handleChange}
                isValid={touched.ApellidoP && !errors.ApellidoP}
                isInvalid={fallo ? !!errors.ApellidoP : false}
                required
              />
              <Form.Control.Feedback type="invalid" tooltip>{errors.ApellidoP}</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormikUsername" className="position-relative">
              <Form.Label>Telefono</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="No. Telefono"
                  name="Telefono"
                  value={values.Telefono}
                  onChange={handleChange}
                  isValid={touched.Telefono && !errors.Telefono}
                  isInvalid={fallo ? !!errors.Telefono : false}
                  required
                />
                <Form.Control.Feedback type="invalid" tooltip>{errors.Telefono}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-2">
          <h4>Datos de la Empresa</h4>
          </Row>
          <Row className="mb-2">
            <Form.Group as={Col} md="6" controlId="validationFormik03" className="position-relative">
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
                name="NoEmpleados"
                value={values.NoEmpleados}
                onChange={handleChange}
                isValid={touched.NoEmpleados && !errors.NoEmpleados}
                isInvalid={fallo ? !!errors.NoEmpleados : false}
                required
              >
                <option value="">Seleccione</option>
                {Object.keys(NoEmpleadosOp).map((x, i) => (<option value={i} key={i}>{x}</option>))}
              </Form.Select>
              <Form.Control.Feedback type="invalid" tooltip>{errors.NoEmpleados}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="8" className="position-relative">
            <Form.Label>Cedula fiscal</Form.Label>
            <Form.Control
              type="file"
              required
              name="Cedula"
              onChange={handleChange}
              isValid={touched.Cedula && !errors.Cedula}
              isInvalid={fallo ? !!errors.Cedula : false}
            />
            <Form.Control.Feedback type="invalid" tooltip> {errors.Cedula}</Form.Control.Feedback>
            </Form.Group>
            </Row>

          <Row className="mb-3">
            <Form.Label>DIRECCIÓN:</Form.Label>
            <Form.Group as={Col} md="5" controlId="validationFormik03" className="position-relative">
              <Form.Label>Calle</Form.Label>
              <Form.Control
                type="text"
                placeholder="Calle"
                name="Calle"
                value={values.Calle}
                onChange={handleChange}
                isValid={touched.Calle && !errors.Calle}
                isInvalid={fallo ? !!errors.Calle : false}
                required
              />
              <Form.Control.Feedback type="invalid" tooltip>{errors.Calle} </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="2" controlId="validationFormik03" className="position-relative">
              <Form.Label>Numero</Form.Label>
              <Form.Control
                type="text"
                placeholder="Numero"
                name="Numero"
                value={values.Numero}
                onChange={handleChange}
                isValid={touched.Numero && !errors.Numero}
                isInvalid={fallo ? !!errors.Numero : false}
                required
              />
              <Form.Control.Feedback type="invalid" tooltip>{errors.Numero} </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="5" controlId="validationFormik03" className="position-relative">
              <Form.Label>Colonia o Fraccionamiento</Form.Label>
              <Form.Control
                type="text"
                placeholder="Colonia"
                name="Colonia"
                value={values.Colonia}
                onChange={handleChange}
                isValid={touched.Colonia && !errors.Colonia}
                isInvalid={fallo ? !!errors.Colonia : false}
                required
              />
              <Form.Control.Feedback type="invalid" tooltip>{errors.Colonia} </Form.Control.Feedback>
              </Form.Group>
          </Row>
          <Row className="mb-3">
          <Form.Group as={Col} md="3" controlId="validationFormik03" className="position-relative">
              <Form.Label>Codigo Postal</Form.Label>
              <Form.Control
                type="text"
                placeholder="Codigo"
                name="Codigo"
                value={values.Codigo}
                onChange={handleChange}
                isValid={touched.Codigo && !errors.Codigo}
                isInvalid={fallo ? !!errors.Codigo : false}
                required
              />
              <Form.Control.Feedback type="invalid" tooltip>{errors.Codigo} </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormik03" className="position-relative">
              <Form.Label>Estado</Form.Label>
              <Form.Control
                type="text"
                placeholder="Estado"
                name="Estado"
                value={values.Estado}
                onChange={handleChange}
                isValid={touched.Estado && !errors.Estado}
                isInvalid={fallo ? !!errors.Estado : false}
                required
              />
              <Form.Control.Feedback type="invalid" tooltip>{errors.Estado} </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3">
                <Form.Label>Paquetes Ofrecidos </Form.Label>
              <Button variant="outline-success">Pagar Servicio</Button>
              </Form.Group>
          </Row>
         
          
          <div className="divBD">
            <Button type="submit" onClick={handleClick} className="boton">Guardar</Button>
            <Button variant="danger" href="/" className="boton">Cancelar</Button>
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
                    Inicio de Sesion Exitoso
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button href="/Empresas" onClick={handleClose} autoFocus>
                    Aceptar
                  </Button>
                </DialogActions>
              </Dialog>
            ))
          }

        </Form>
      )}
    </Formik>
  );

}

export default Formulario;