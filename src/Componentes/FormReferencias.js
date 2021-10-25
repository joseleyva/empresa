import { Formik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup';
import { Form, Col, Button, Row, InputGroup } from 'react-bootstrap';
import { SN } from './Opciones';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const schema = yup.object().shape({
    FechaIni: yup.string().required("Seleccione la Escolaridad"),
    FechaFin: yup.string().required("especifique los conociemntos").min(1).matches(/^[a-zA-Z]+$/),
    Puesto: yup.string().required("Especifique el puesto").matches(/^[a-zA-Z]+$/),
    Area: yup.string().required("Especifique las competencias").matches(/^[a-zA-Z ]+$/),
    Motivo: yup.string().required("Especifique las habilidades").matches(/^[a-zA-Z]+$/),
    Recontratable: yup.string().required("Especifique"),
    Recomendable: yup.string().required("Ingrese los idiomas").matches(/^[a-zA-ZñÑ]+$/),
    Comentarios: yup.string().required("Ingrese las actividades").matches(/^[a-zA-Z ]+$/),
});
const FormReferencias = () => {
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
        <div className="VacanteForm">
            <Formik
                validationSchema={schema}
                onSubmit={(valores, {resetForm})=>{
                    console.log(valores)
                    setEnviado(true);
                    setValidated(true);
                    setTimeout(()=>setEnviado(false),5000);
                }}
                initialValues={{
                    FechaIni: "",
                    FechaFin: "",
                    Puesto: "",
                    Area: "",
                    Motivo: "",
                    Recontratable: "",
                    Recomendable: "",
                    Comentarios: "",
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
                        <h4>Escribe aquí los datos del ex colaborador</h4>
                        <Row className="mb-3">
                            <Form.Label>¿Cuál fue el periodo de tiempo laborado por el ex empleado?</Form.Label>
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Inicio</Form.Label>
                                <Form.Control
                                    required
                                    type="date"
                                    name="FechaIni"
                                    value={values.FechaIni}
                                    onChange={handleChange}
                                    isValid={touched.FechaIni && !errors.FechaIni}
                                    isInvalid={fallo ? !!errors.FechaIni : false}
                                />
                                   
                                <Form.Control.Feedback type="invalid" tooltip>{errors.FechaIni}</Form.Control.Feedback>

                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormikUsername" className="position-relative">
                                <Form.Label>término</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        required
                                        type="date"
                                        name="FechaFin"
                                        value={values.FechaFin}
                                        onChange={handleChange}
                                        isValid={touched.FechaFin && !errors.FechaFin}
                                        isInvalid={fallo ? !!errors.FechaFin : false}
                                    />
                                    <Form.Control.Feedback type="invalid" tooltip>{errors.FechaFin}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Row className="mb-2">
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>¿Cuál era el puesto que desempeño durante ese tiempo?</Form.Label>
                                <Form.Select
                                    required
                                    type="select"
                                    name="Puesto"
                                    value={values.Puesto}
                                    onChange={handleChange}
                                    isValid={touched.Puesto && !errors.Puesto}
                                    isInvalid={fallo ? !!errors.Puesto : false}
                                >
                                    <option value="">Seleccione</option>
                                    {Object.keys(SN).map((x, i) => (<option value={i} key={i}>{x}</option>))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Puesto}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationFormik04" className="position-relative">
                                <Form.Label> ¿En que área o departamento?</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="Area"
                                    value={values.Area}
                                    onChange={handleChange}
                                    isValid={touched.Area && !errors.Area}
                                    isInvalid={fallo ? !!errors.Area : false}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Area}</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>¿Cuál fue el motivo de su salida?</Form.Label>
                                <Form.Select
                                    required
                                    type="select"
                                    name="Motivo"
                                    value={values.Motivo}
                                    onChange={handleChange}
                                    isValid={touched.Motivo && !errors.Motivo}
                                    isInvalid={fallo ? !!errors.Motivo : false}
                                >
                                    <option value="">Seleccione</option>
                                    {Object.keys(SN).map((x, i) => (<option value={i} key={i}>{x}</option>))}
                                    </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Motivo}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>¿Lo considera recontratable?</Form.Label>
                                <Form.Select
                                    required
                                    type="select"
                                    name="Recontratable"
                                    value={values.Recontratable}
                                    onChange={handleChange}
                                    isValid={touched.Recontratable && !errors.Recontratable}
                                    isInvalid={fallo ? !!errors.Recontratable : false}
                                >
                                    <option value="">Seleccione</option>
                                    {Object.keys(SN).map((x, i) => (<option value={i} key={i}>{x}</option>))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Recontratable}</Form.Control.Feedback>

                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik03" className="position-relative">
                                <Form.Label>¿Lo considera recomendable?</Form.Label>
                                <Form.Select
                                    required
                                    type="select"
                                    name="Recomendable"
                                    value={values.Recomendable}
                                    onChange={handleChange}
                                    isValid={touched.Recomendable && !errors.Recomendable}
                                    isInvalid={fallo ? !!errors.Recomendable : false}
                                >
                                    <option value="">Seleccione</option>
                                    {Object.keys(SN).map((x, i) => (<option value={i} key={i}>{x}</option>))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Recomendable}
                                </Form.Control.Feedback>
                            </Form.Group>

                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="3" controlId="validationFormik04" className="position-relative">
                                <Form.Label>Comentarios acerca de su desempeño</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="Comentarios"
                                    value={values.Comentarios}
                                    onChange={handleChange}
                                    isValid={touched.Comentarios && !errors.Comentarios}
                                    isInvalid={fallo ? !!errors.Comentarios : false}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Comentarios}</Form.Control.Feedback>
                            </Form.Group>
                           
                        </Row>
                        <div className="DivBF">
                            <Button type="submit" onClick={handleClick} className="botonF" >Enviar</Button>
                            <Button variant="danger" className="botonF">Cancelar</Button>
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


        </div>

    );



}

export default FormReferencias;