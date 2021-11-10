import { Formik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup';
import { Form, Col, Button, Row, InputGroup } from 'react-bootstrap';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const schema = yup.object().shape({
    Nombre: yup.string().required("Seleccione la Escolaridad"),
    Correo: yup.string().required("especifique los conociemntos").email('Correo no valido'),
    Telefono: yup.string().required("Especifique el puesto"),
    Asunto: yup.string().required("Especifique las competencias").matches(/^[a-zA-Z ]+$/),
    Ciudad: yup.string().required("Especifique las habilidades").matches(/^[a-zA-Z]+$/),
    Mensaje: yup.string().required("Especifique"),

});
const FormEdu = () => {
    const [validated, setValidated]= useState(false)
    const [fallo, setFallo] = useState(false);
    const [enviado, setEnviado] = useState(false);
    const [open, setOpen] = React.useState(false);

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
                onSubmit={(valores, {resetForm})=>{
                    console.log(valores)
                    setEnviado(true);
                    setValidated(true);
                    setTimeout(()=>setEnviado(false),5000);
                }}
                initialValues={{
                    Nombre: "",
                    Correo: "",
                    Telefono: "",
                    Asunto: "",
                    Ciudad: "",
                    Mensaje: "",
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
                    <Form noValidate validated={validated} onSubmit={handleSubmit} className="FormContacto">
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Nombre Completo</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="Nombre"
                                    value={values.Nombre}
                                    onChange={handleChange}
                                    isValid={touched.Nombre && !errors.Nombre}
                                    isInvalid={fallo ? !!errors.Nombre : false}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Nombre}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Correo</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    name="Correo"
                                    value={values.Correo}
                                    onChange={handleChange}
                                    isValid={touched.Correo && !errors.Correo}
                                    isInvalid={fallo ? !!errors.Correo : false}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Correo}</Form.Control.Feedback>
                              
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Numero de telefono</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    name="Telefono"
                                    value={values.Telefono}
                                    onChange={handleChange}
                                    isValid={touched.Telefono && !errors.Telefono}
                                    isInvalid={fallo ? !!errors.Telefono : false}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Telefono}</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                        <Form.Group as={Col} md="7" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Asunto</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="Asunto"
                                    value={values.Asunto}
                                    onChange={handleChange}
                                    isValid={touched.Asunto && !errors.Asunto}
                                    isInvalid={fallo ? !!errors.Asunto : false}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Asunto}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Ciudad</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="Ciudad"
                                    value={values.Ciudad}
                                    onChange={handleChange}
                                    isValid={touched.Ciudad && !errors.Ciudad}
                                    isInvalid={fallo ? !!errors.Ciudad : false}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Ciudad}</Form.Control.Feedback>
                            </Form.Group>

                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="9" controlId="validationFormikUsername" className="position-relative">
                                <Form.Label>Mensaje</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        className="TextP"
                                        as='textarea'
                                        type="text"
                                        placeholder="Mensaje"
                                        name="Mensaje"
                                        value={values.Mensaje}
                                        onChange={handleChange}
                                        isValid={touched.Mensaje && !errors.Mensaje}
                                        isInvalid={fallo ? !!errors.Mensaje : false}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid" tooltip>{errors.Mensaje}</Form.Control.Feedback>

                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <div className="DivBF">
                            <Button type="submit" onClick={handleClick} className="botonF" >Guardar</Button>
                        </div>
                        {
                                    (enviado&&(
                                        <Stack spacing={2} sx={{ width: '100%' }}>
                                        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                          <Alert onClose={handleClose} variant="filled" severity="success"sx={{ width: '100%' }}>
                                            Datos guardados correctamente
                                          </Alert>
                                        </Snackbar>
                                        
                                      </Stack>
                                    ))
                                }
                    </Form>
                )}
            </Formik>



    );



}

export default FormEdu;