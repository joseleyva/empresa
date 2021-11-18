import { Formik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup';
import { Form, Col, Button, Row } from 'react-bootstrap';
import { Pago, PrestacionesOp, SN } from './Opciones';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const schema = yup.object().shape({
    Sueldo: yup.string().required("Ingrese el sueldo").min(1),
    Periodo: yup.string().required("Seleccione una opción"),
    TiempoExtra: yup.string().required("Seleccione una opción"),
    Prestaciones: yup.string().required("Seleccione una opción"),
    Bonos: yup.string().required("Ingrese los bonos").matches(/^[a-zA-Z]+$/).min(1),
    Herramientas: yup.string().required("Ingrese las herramientas").matches(/^[a-zA-Z]+$/).min(1),
});
const FormSueldo = (props) => {
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
                    Sueldo: "",
                    Periodo: "",
                    TiempoExtra: "",
                    Prestaciones: "",
                    Bonos: "",
                    Herramientas: "",

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
                        <Form.Label className="titulo">Datos del Sueldo</Form.Label>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Sueldo Mensual Bruto</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="Sueldo"
                                    value={values.Sueldo}
                                    onChange={handleChange}
                                    isValid={touched.Sueldo && !errors.Sueldo}
                                    isInvalid={fallo ? !!errors.Sueldo : false}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Sueldo}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationFormik04" className="position-relative">
                                <Form.Label> Periodo de pago</Form.Label>

                                <Form.Select
                                    required
                                    type="select"
                                    name="Periodo"
                                    value={values.Periodo}
                                    onChange={handleChange}
                                    isValid={touched.Periodo && !errors.Periodo}
                                    isInvalid={fallo ? !!errors.Periodo : false}
                                >
                                    <option value="">Seleccione</option>
                                    {Object.keys(Pago).map((x, i) => (<option value={i} key={i}>{x}</option>))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Periodo}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Opcion a tiempo extra</Form.Label>
                                <Form.Select
                                    required
                                    type="select"
                                    name="TiempoExtra"
                                    value={values.TiempoExtra}
                                    onChange={handleChange}
                                    isValid={touched.TiempoExtra && !errors.TiempoExtra}
                                    isInvalid={fallo ? !!errors.TiempoExtra : false}
                                >
                                    <option value="">Seleccione</option>
                                    {Object.keys(SN).map((x, i) => (<option value={i} key={i}>{x}</option>))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.TiempoExtra}</Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Prestaciones</Form.Label>
                                <Form.Select
                                    required
                                    type="select"
                                    name="Prestaciones"
                                    value={values.Prestaciones}
                                    onChange={handleChange}
                                    isValid={touched.Prestaciones && !errors.Prestaciones}
                                    isInvalid={fallo ? !!errors.Prestaciones : false}

                                >
                                    <option value="">Seleccione</option>
                                    {Object.keys(PrestacionesOp).map((x, i) => (<option value={i} key={i}>{x}</option>))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Prestaciones}</Form.Control.Feedback>

                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Bonos</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="Bonos"
                                    value={values.Bonos}
                                    onChange={handleChange}
                                    isValid={touched.Bonos && !errors.Bonos}
                                    isInvalid={fallo ? !!errors.Bonos : false}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Bonos}</Form.Control.Feedback>

                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik03" className="position-relative">
                                <Form.Label>Herramientas de trabajo</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="Herramientas"
                                    value={values.Herramientas}
                                    onChange={handleChange}
                                    isValid={touched.Herramientas && !errors.Herramientas}
                                    isInvalid={fallo ? !!errors.Herramientas : false}
                                />

                                <Form.Control.Feedback type="invalid" tooltip>{errors.Herramientas}
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

export default FormSueldo;