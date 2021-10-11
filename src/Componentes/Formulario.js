import React from 'react';
import { Form, Col, Button, Row, InputGroup} from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import BotonesP from './BotonesP';



const schema = yup.object().shape({
  Nombre: yup.string().required("Ingrese su nombre").matches(/^[a-zA-Z ]+$/, "Solo letras"),
  Apellidos: yup.string().required("Ingrese sus apellidos").matches(/^[a-zA-Z ]+$/, 'Solo letras'),
  Telefono: yup.string().matches(/^[0-9]+$/, 'Ingrese solo numeros').max(10, 'Muy largo').min(10, 'Muy corto').required("Ingrese su numero"),
  RFC: yup.string().required("Ingrese su RFC").max(13, 'Muy largo').min(13, 'Muy Corto').matches(/^[a-zA-Z0-9]+$/, 'No se aceptan caracteres especiales'),
  RSocial: yup.string().required("Ingrese su Razón Social").matches(/^[a-zA-Z -&]+$/),
});

function Formulario() {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        Nombre: '',
        Apellidos: '',
        Telefono: '',
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
        <Form className="FormD" noValidate onSubmit={handleSubmit}>
          <h4>Datos de acceso y Contacto</h4>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik01" className="position-relative">
              <Form.Label>Nombre(s)</Form.Label>
              <Form.Control
                type="text"
                name="Nombre"
                value={values.Nombre}
                onChange={handleChange}
                isValid={touched.Nombre && !errors.Nombre}
                isInvalid={!!errors.Nombre}
              />
              <Form.Control.Feedback type="invalid" tooltip>{errors.Nombre}</Form.Control.Feedback>
                
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik02" className="position-relative">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control
                type="text"
                name="Apellidos"
                value={values.Apellidos}
                onChange={handleChange}
                isValid={touched.Apellidos && !errors.Apellidos}
                isInvalid={!!errors.Apellidos}
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
                  isInvalid={!!errors.Telefono}
                />
                <Form.Control.Feedback type="invalid" tooltip>{errors.Telefono}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Label>Numero de empleados</Form.Label>
           <BotonesP/>

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
                isInvalid={!!errors.RFC}
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
                isInvalid={!!errors.RSocial}
              />
              <Form.Control.Feedback type="invalid" tooltip>{errors.RSocial}</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <div className="divBD">
          <Button type="submit" className="boton">Guardar</Button>
          <Button variant="danger" className="boton">Cancelar</Button>
          </div>

          
        </Form>
      )}
    </Formik>
  );

}

export default Formulario;