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
  Apellidos: yup.string().required("Ingrese sus apellidos").matches(/^[a-zA-Z ]+$/, 'Solo letras'),
  Telefono: yup.string().matches(/^[0-9]+$/, 'Ingrese solo numeros').max(10, 'Muy largo').min(10, 'Muy corto').required("Ingrese su numero"),
  NoEmpleados: yup.string().required('Seleccione una opción'),
  RFC: yup.string().required("Ingrese su RFC").max(13, 'Muy largo').min(13, 'Muy Corto').matches(/^[a-zA-Z0-9]+$/, 'No se aceptan caracteres especiales'),
  RSocial: yup.string().required("Ingrese su Razón Social").matches(/^[a-zA-Z -&]+$/),
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
        Apellidos: '',
        Telefono: '',
        NoEmpleados: '',
        RFC: '',
        RSocial: '',
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
            <Form.Group as={Col} md="6" controlId="validationFormik01" className="position-relative">
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
            <Form.Group as={Col} md="6" controlId="validationFormik02" className="position-relative">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control
                type="text"
                name="Apellidos"
                placeholder="Apellidos"
                value={values.Apellidos}
                onChange={handleChange}
                isValid={touched.Apellidos && !errors.Apellidos}
                isInvalid={fallo ? !!errors.Apellidos : false}
                required
              />
              <Form.Control.Feedback type="invalid" tooltip>{errors.Apellidos}</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="7" controlId="validationFormikUsername" className="position-relative">
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
          <Row className="mb-3">
            <Form.Group as={Col} md="7" controlId="validationFormik03" className="position-relative">
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
          <div className="divBD">
            <Button type="submit" onClick={handleClick} className="boton">Guardar</Button>
            <Button variant="danger" className="boton">Cancelar</Button>
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