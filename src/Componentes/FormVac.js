import { Formik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup';
import { Form, Col, Button, Row, InputGroup } from 'react-bootstrap';
import { Puesto,DiasP,SN, LugarT, RangoE, Genero } from './Opciones';

const schema = yup.object().shape({
    Nombre: yup.string().required("Ingrese el puesto").matches(/^[a-zA-Z ]+$/, "Solo letras").min(5, 'muy corto'),
    NumeroP: yup.number().required("Numero de vacantes").min(1, 'Ingrese un numero'),
    Actividades: yup.string().max(100, 'Muy largo').min(0, 'Ingrese la descripción').required("Describir la actividad"),
    PuestoR: yup.string().required("Seleccione el puesto"),
    Dias: yup.string().required("Ingrese los días laborales"),
    Horario: yup.string().required("Ingrese el horario laboral"),
    Turno: yup.string().required("Ingrese el Turno").matches(/^[a-zA-Z -&]+$/),
    DiasPago: yup.string().required("Seleccione una opción"),
    Semana: yup.string().required(""),
    Viajar: yup.string().required("Seleccione la opcion"),
    Lugar: yup.string().required("Ingrese el lugar de trabajo"),
    Rango: yup.string().required("Ingrese el rango de edad"),
    Sexo: yup.string().required("Seleccione una opcion"),
    Discapacidad: yup.string().required("Seleccione una opción"),
    GenCar: yup.string().required("Seleccione una opción"),

});
const FormVac = () => {
     const [validated, setValidated]= useState(false)
    const [fallo, setFallo] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
         setValidated(true);
        setFallo(true);
    };

    return (
        <div className="VacanteForm">
            <Formik
                validationSchema={schema}
                onSubmit={console.log}
                initialValues={{
                    Nombre: "",
                    NumeroP: "",
                    Actividades: "",
                    PuestoR: "",
                    Dias: "",
                    Horario: "",
                    Turno: "",
                    DiasPago: "",
                    Semana: "",
                    Viajar: "",
                    Lugar: "",
                    Rango: "",
                    Sexo: "",
                    Discapacidad: "",
                    GenCar: "",
                }
                }
            >
                {({
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isValid,
                    isInvalid,
                    errors,
                }) => (
                    <Form noValidate  onSubmit={handleSubmit} className="FormDatos">
                        <h4>Datos de la vacante</h4>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Nombre del puesto</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Nombre"
                                    value={values.Nombre}
                                    onChange={handleChange}
                                    isValid={touched.Nombre && !errors.Nombre}
                                    isInvalid={fallo ? !!errors.Nombre : false}
                                    required
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Nombre}</Form.Control.Feedback>


                            </Form.Group>
                            <Form.Group as={Col} md="5" controlId="validationFormik02" className="position-relative">
                                <Form.Label>Número de posiciones a reclutar</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="NumeroP"
                                    value={values.NumeroP}
                                    onChange={handleChange}
                                    isValid={touched.NumeroP && !errors.NumeroP}
                                    isInvalid={fallo ? !!errors.NumeroP : false}
                                    required

                                />

                                <Form.Control.Feedback type="invalid" tooltip>{errors.NumeroP}</Form.Control.Feedback>

                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="9" controlId="validationFormikUsername" className="position-relative">
                                <Form.Label>Actividades del puesto</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        className="TextP"
                                        as='textarea'
                                        type="text"
                                        placeholder="Descripción"
                                        name="Actividades"
                                        value={values.Actividades}
                                        onChange={handleChange}
                                        isValid={touched.Actividades && !errors.Actividades}
                                        isInvalid={fallo ? !!errors.Actividades : false}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid" tooltip>{errors.Actividades}</Form.Control.Feedback>

                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Row className="mb-2">
                            <Form.Group as={Col} md="4" validated={validated} controlId="validationFormik01" className="position-relative">
                                <Form.Label>¿A que puesto Reportara?</Form.Label>
                                <Form.Select id="inlineFormCustomSelect"
                                    type="select"
                                    name="PuestoR"
                                    value={values.PuestoR}
                                    onChange={handleChange}
                                    isValid={touched.PuestoR && !errors.PuestoR}
                                    isInvalid={fallo ? !!errors.PuestoR : false}
                                    required
                                >
                                    <option value="">Seleccionar</option>
                                    {Object.keys(Puesto).map((x, i) => (<option value={i} key={i}>{x}</option>))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.PuestoR}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Dias de trabajo</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Dias"
                                    value={values.Dias}
                                    onChange={handleChange}
                                    isValid={touched.Dias && !errors.Dias}
                                    isInvalid={fallo ? !!errors.Dias : false}
                                    required
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Dias}</Form.Control.Feedback>

                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Horario laboral</Form.Label>
                                <Form.Control
                                    type="time"
                                    name="Horario"
                                    value={values.Horario}
                                    onChange={handleChange}
                                    isValid={touched.Horario && !errors.Horario}
                                    isInvalid={fallo ? !!errors.Horario : false}
                                    required
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Horario}</Form.Control.Feedback>

                            </Form.Group>

                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationFormik03" className="position-relative">
                                <Form.Label>¿Rola turnos? ¿Cuales?</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Turno"
                                    value={values.Turno}
                                    onChange={handleChange}
                                    isValid={touched.Turno && !errors.Turno}
                                    isInvalid={fallo ? !!errors.Turno : false}
                                    required
                                />

                                <Form.Control.Feedback type="invalid" tooltip>{errors.Turno}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik04" className="position-relative">
                                <Form.Label>¿Qué días se efectua el pago?</Form.Label>
                                <Form.Select
                                    type="select"
                                    name="DiasPago"
                                    value={values.DiasPago}
                                    onChange={handleChange}
                                    isValid={touched.DiasPago && !errors.DiasPago}
                                    isInvalid={fallo ? !!errors.DiasPago : false}
                                    required
                                >
                                    <option value="">Seleccionar</option>
                                    {Object.keys(DiasP).map((x, i) => (<option value={i} key={i}>{x}</option>))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.DiasPago}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationFormik03" className="position-relative">
                                <Form.Label>¿Existe semana de desface?</Form.Label>
                                <Form.Select
                                    type="select"
                                    name="Semana"
                                    value={values.Semana}
                                    onChange={handleChange}
                                    isValid={touched.Semana && !errors.Semana}
                                    isInvalid={fallo ? !!errors.Semana : false}
                                    required
                                >
                                    <option value="">Seleccionar</option>
                                    {Object.keys(SN).map((x, i) => (<option value={i} key={i}>{x}</option>))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Semana}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">

                            <Form.Group as={Col} md="4" controlId="validationFormik03" className="position-relative">
                                <Form.Label>¿Requiere disponibilidad para viajar?</Form.Label>
                                <Form.Select
                                    type="select"
                                    name="Viajar"
                                    value={values.Viajar}
                                    onChange={handleChange}
                                    isValid={touched.Viajar && !errors.Viajar}
                                    isInvalid={fallo ? !!errors.Viajar : false}
                                    required
                                >
                                    <option value="" >Seleccionar</option>
                                    {Object.keys(SN).map((x, i) => (<option value={i} key={i}>{x}</option>))}
                                </Form.Select>

                                <Form.Control.Feedback type="invalid" tooltip>{errors.Viajar}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationFormik03" className="position-relative">
                                <Form.Label>Lugar de trabajo</Form.Label>
                                <Form.Select
                                    type="select"
                                    name="Lugar"
                                    value={values.Lugar}
                                    onChange={handleChange}
                                    isValid={touched.Lugar && !errors.Lugar}
                                    isInvalid={fallo ? !!errors.Lugar : false}
                                    required
                                >
                                    <option value="">Seleccione</option>
                                    {Object.keys(LugarT).map((x, i) => (<option value={i} key={i}>{x}</option>))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Lugar}
                                </Form.Control.Feedback>

                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik03" className="position-relative">
                                <Form.Label>Rango de edad</Form.Label>
                                <Form.Select
                                    type="select"
                                    name="Rango"
                                    value={values.Rango}
                                    onChange={handleChange}
                                    isValid={touched.Rango && !errors.Rango}
                                    isInvalid={fallo ? !!errors.Rango : false}
                                    required
                                >
                                    <option value="">Seleccione</option>
                                    {Object.keys(RangoE).map((x, i) => (<option value={i} key={i}>{x}</option>))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Rango}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationFormik03" className="position-relative">
                                <Form.Label>Sexo</Form.Label>
                                <Form.Select
                                    type="select"
                                    name="Sexo"
                                    value={values.Sexo}
                                    onChange={handleChange}
                                    isValid={touched.Sexo && !errors.Sexo}
                                    isInvalid={fallo ? !!errors.Sexo : false}
                                    required
                                >
                                    <option value="">Seleccione</option>
                                    {Object.keys(Genero).map((x, i) => (<option value={i} key={i}>{x}</option>))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Sexo}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik03" className="position-relative">
                                <Form.Label>¿Se puede considerar gente con discapacidad?</Form.Label>
                                <Form.Select
                                    type="select"
                                    name="Discapacidad"
                                    value={values.Discapacidad}
                                    onChange={handleChange}
                                    isValid={touched.Discapacidad && !errors.Discapacidad}
                                    isInvalid={fallo ? !!errors.Discapacidad : false}
                                    required
                                >
                                    <option value="">Seleccione</option>
                                    {Object.keys(SN).map((x, i) => (<option value={i} key={i}>{x}</option>))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Discapacidad}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik03" className="position-relative">
                                <Form.Label>¿Tendra gente a su cargo?</Form.Label>
                                <Form.Select
                                    type="select"
                                    name="GenCar"
                                    value={values.GenCar}
                                    onChange={handleChange}
                                    isValid={touched.GenCar && !errors.GenCar}
                                    isInvalid={fallo ? !!errors.GenCar : false}
                                    required
                                >
                                    <option value="">Seleccione</option>
                                    {Object.keys(SN).map((x, i) => (<option value={i} key={i}>{x}</option>))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.GenCar}
                                </Form.Control.Feedback>
                            </Form.Group>

                        </Row>

                        <div className="DivBF">
                            <Button type="submit" className="botonF"  >Guardar</Button>
                            <Button variant="danger" className="botonF">Cancelar</Button>
                        </div>



                    </Form>
                )}
            </Formik>


        </div>

    );



}

export default FormVac;