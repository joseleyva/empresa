import { Formik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup';
import { Form, Col, Button, Row, InputGroup } from 'react-bootstrap';
import { EscolaridadOp, Nivel } from './Opciones';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const schema = yup.object().shape({
    Escolaridad: yup.string().required("Seleccione la Escolaridad"),
    Conocimientos: yup.string().required("especifique los conociemntos").min(1).matches(/^[a-zA-Z]+$/),
    Experiencia: yup.string().required("Especifique el puesto").matches(/^[a-zA-Z]+$/),
    Compe: yup.string().required("Especifique las competencias").matches(/^[a-zA-Z ]+$/),
    Habilidad: yup.string().required("Especifique las habilidades").matches(/^[a-zA-Z]+$/),
    Paqueteria: yup.string().required("Especifique"),
    Idiomas: yup.string().required("Ingrese los idiomas").matches(/^[a-zA-ZñÑ]+$/),
    ActIdioma: yup.string().required("Ingrese las actividades").matches(/^[a-zA-Z ]+$/),
    NivelIdioma: yup.string().required("Seleccione una opcion"),
    NivelExpe: yup.string().required("Seleccione una opcion"),


});
const FormEdu = (props) => {
    const [validated, setValidated]= useState(false)
    const [fallo, setFallo] = useState(false);
    const [enviado, setEnviado] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [estado,setEstado]=React.useState(true);
    const {funcion, place}=props;
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
        <div className="VacanteForm">
            <Formik
                validationSchema={schema}
                onSubmit={(valores, {resetForm})=>{
                    console.log(valores)
                    setEnviado(true);
                    setValidated(true);
                    setEstado(false);
                    setTimeout(()=>setEnviado(false),5000);
                }}
                initialValues={{
                    Escolaridad: "",
                    Conocimientos: "",
                    Experiencia: "",
                    Compe: "",
                    Habilidad: "",
                    Paqueteria: "",
                    Idiomas: "",
                    ActIdioma: "",
                    NivelIdioma: "",
                    NivelExpe: "",
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
                    <Form noValidate validated={validated} onSubmit={handleSubmit} className="FormDatos">
                        <Form.Label className="titulo">Datos de Escolaridad</Form.Label>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Escolaridad</Form.Label>
                                <Form.Select
                                    required
                                    type="select"
                                    name="Escolaridad"
                                    value={values.Escolaridad}
                                    onChange={handleChange}
                                    isValid={touched.Escolaridad && !errors.Escolaridad}
                                    isInvalid={fallo ? !!errors.Escolaridad : false}
                                >
                                    <option value="">Seleccione</option>
                                    {Object.keys(EscolaridadOp).map((x, i) => (<option value={i} key={i}>{x}</option>))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Escolaridad}</Form.Control.Feedback>

                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="9" controlId="validationFormikUsername" className="position-relative">
                                <Form.Label>Conocimientos Requeridos</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        required
                                        className="TextP"
                                        as='textarea'
                                        type="text"
                                        placeholder="Especificar"
                                        name="Conocimientos"
                                        value={values.Conocimientos}
                                        onChange={handleChange}
                                        isValid={touched.Conocimientos && !errors.Conocimientos}
                                        isInvalid={fallo ? !!errors.Conocimientos : false}
                                    />
                                    <Form.Control.Feedback type="invalid" tooltip>{errors.Conocimientos}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Row className="mb-2">
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Experiencia Requerida</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="Experiencia"
                                    value={values.Experiencia}
                                    onChange={handleChange}
                                    isValid={touched.Experiencia && !errors.Experiencia}
                                    isInvalid={fallo ? !!errors.Experiencia : false}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Experiencia}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationFormik04" className="position-relative">
                                <Form.Label> Nivel en años</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    name="NivelExpe"
                                    value={values.NivelExpe}
                                    onChange={handleChange}
                                    isValid={touched.NivelExpe && !errors.NivelExpe}
                                    isInvalid={fallo ? !!errors.NivelExpe : false}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.NivelExpe}</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Competencias requeridas</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="Compe"
                                    value={values.Compe}
                                    onChange={handleChange}
                                    isValid={touched.Compe && !errors.Compe}
                                    isInvalid={fallo ? !!errors.Compe : false}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Compe}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Habilidades requeridas</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="Habilidad"
                                    value={values.Habilidad}
                                    onChange={handleChange}
                                    isValid={touched.Habilidad && !errors.Habilidad}
                                    isInvalid={fallo ? !!errors.Habilidad : false}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Habilidad}</Form.Control.Feedback>

                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik03" className="position-relative">
                                <Form.Label>% de paqueteria de office</Form.Label>
                                <Form.Select
                                    required
                                    type="select"
                                    name="Paqueteria"
                                    value={values.Paqueteria}
                                    onChange={handleChange}
                                    isValid={touched.Paqueteria && !errors.Paqueteria}
                                    isInvalid={fallo ? !!errors.Paqueteria : false}
                                >
                                    <option value="">Seleccione</option>
                                    {Object.keys(Nivel).map((x, i) => (<option value={i} key={i}>{x}</option>))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Paqueteria}
                                </Form.Control.Feedback>
                            </Form.Group>

                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="3" controlId="validationFormik04" className="position-relative">
                                <Form.Label>Idiomas adicionales</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="Idiomas"
                                    value={values.Idiomas}
                                    onChange={handleChange}
                                    isValid={touched.Idiomas && !errors.Idiomas}
                                    isInvalid={fallo ? !!errors.Idiomas : false}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Idiomas}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationFormik04" className="position-relative">
                                <Form.Label> Nivel de idioma</Form.Label>
                                <Form.Select
                                    required
                                    type="text"
                                    name="NivelIdioma"
                                    value={values.NivelIdioma}
                                    onChange={handleChange}
                                    isValid={touched.NivelIdioma && !errors.NivelIdioma}
                                    isInvalid={fallo ? !!errors.NivelIdioma : false}
                                >
                                    <option value="">Seleccione</option>
                                    {Object.keys(Nivel).map((x, i) => (<option value={i} key={i}>{x}</option>))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.NivelIdioma}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="5" controlId="validationFormik03" className="position-relative">
                                <Form.Label>¿Para que actividades utiliza el idioma?</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="ActIdioma"
                                    value={values.ActIdioma}
                                    onChange={handleChange}
                                    isValid={touched.ActIdioma && !errors.ActIdioma}
                                    isInvalid={fallo ? !!errors.ActIdioma : false}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.ActIdioma}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <div className="DivBF">
                            <Button type="submit" onClick={handleClick} className="botonF" >Guardar</Button>
                            <Button variant="danger" className="botonF">Cancelar</Button>
                        </div>
                        <Row className="mt-3">
                        <Form.Group as={Col} md={{span:10, offset: 10}}>
                        <Button onClick={funcion} disabled={estado} className="botonStep" variant="outline-secondary">
                                {place}
                                </Button>
                        </Form.Group>
                        </Row>
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


        </div>

    );



}

export default FormEdu;