import { Formik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup';
import { Form, Col, Button, Row } from 'react-bootstrap';
import { Pago, PrestacionesOp, SN } from './Opciones';
import { updateInfoVacanciesApi } from '../api/vacancies';
import { getAccessTokenApi } from '../api/auth';
import { notification } from 'antd';

const schema = yup.object().shape({
    salary: yup.string().required("Ingrese el sueldo").min(1),
    period: yup.string().required("Seleccione una opción"),
    extratime: yup.string().required("Seleccione una opción"),
    benefits: yup.string().required("Seleccione una opción"),
    bonds: yup.string().required("Ingrese los bonos").matches(/^[a-zA-Z]+$/).min(1),
    tools: yup.string().required("Ingrese las herramientas").matches(/^[a-zA-Z]+$/).min(1),
});
const FormSueldo = (props) => {
    const [fallo, setFallo] = useState(false);
    const [estado, setEstado] = React.useState(true);
    const { funcion, place, valor } = props;
    const token = getAccessTokenApi();
    const { _id } = valor;
    const handleClick = (event) => {
        const Button = event.currentTarget;
        if (Button.checkValidity() === false) {

        }
        setFallo(true);
    };
    return (
        <div className="VacanteForm">
            <Formik
                validationSchema={schema}
                onSubmit={(valores, { resetForm }) => {
                    setEstado(false);
                    updateInfoVacanciesApi(token, valores, _id).then(result => {
                        notification["success"]({
                            message: result.message,
                            placement: "bottomLeft",
                        });
                    }).catch(err => {
                        notification["error"]({
                            message: err.message,
                            placement: "bottomLeft",
                        });
                    })


                }}
                initialValues={{
                    salary: "",
                    period: "",
                    extratime: "",
                    benefits: "",
                    bonds: "",
                    tools: "",
                    active: true

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
                    <Form noValidate onSubmit={handleSubmit} className="m-3">
                        <Form.Label className="titulo">Datos del Sueldo</Form.Label>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Sueldo Mensual Bruto</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="salary"
                                    value={values.salary}
                                    onChange={handleChange}
                                    isValid={touched.salary && !errors.salary}
                                    isInvalid={fallo ? !!errors.salary : false}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.salary}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik04" className="position-relative">
                                <Form.Label> Periodo de pago</Form.Label>

                                <Form.Select
                                    required
                                    type="select"
                                    name="period"
                                    value={values.period}
                                    onChange={handleChange}
                                    isValid={touched.period && !errors.period}
                                    isInvalid={fallo ? !!errors.period : false}
                                >
                                    <option value="">Seleccione</option>
                                    {Object.keys(Pago).map((x, i) => (<option value={x} key={i}>{x}</option>))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.period}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Opcion a tiempo extra</Form.Label>
                                <Form.Select
                                    required
                                    type="select"
                                    name="extratime"
                                    value={values.extratime}
                                    onChange={handleChange}
                                    isValid={touched.extratime && !errors.extratime}
                                    isInvalid={fallo ? !!errors.extratime : false}
                                >
                                    <option value="">Seleccione</option>
                                    {Object.keys(SN).map((x, i) => (<option value={x} key={i}>{x}</option>))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.extratime}</Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Prestaciones</Form.Label>
                                <Form.Select
                                    required
                                    type="select"
                                    name="benefits"
                                    value={values.benefits}
                                    onChange={handleChange}
                                    isValid={touched.Benefits && !errors.benefits}
                                    isInvalid={fallo ? !!errors.benefits : false}

                                >
                                    <option value="">Seleccione</option>
                                    {Object.keys(PrestacionesOp).map((x, i) => (<option value={x} key={i}>{x}</option>))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.benefits}</Form.Control.Feedback>

                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Bonos</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="bonds"
                                    value={values.bonds}
                                    onChange={handleChange}
                                    isValid={touched.bonds && !errors.bonds}
                                    isInvalid={fallo ? !!errors.bonds : false}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.bonds}</Form.Control.Feedback>

                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik03" className="position-relative">
                                <Form.Label>Herramientas de trabajo</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="tools"
                                    value={values.tools}
                                    onChange={handleChange}
                                    isValid={touched.tools && !errors.tools}
                                    isInvalid={fallo ? !!errors.tools : false}
                                />

                                <Form.Control.Feedback type="invalid" tooltip>{errors.tools}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <div className="DivBF">
                            <Button type="submit" onClick={handleClick} className="botonF" >Guardar</Button>
                            <Button variant="danger" className="botonF">Cancelar</Button>
                        </div>
                        <Row className="mt-3">
                        <Form.Group as={Col} md="5"></Form.Group>
                            <Form.Group as={Col} md="5"></Form.Group>
                            <Form.Group as={Col} md="2">
                                <Button onClick={funcion} disabled={estado} style={{width: "70px"}} variant="outline-secondary">
                                    {place}
                                </Button>
                            </Form.Group>
                        </Row>

                    </Form>
                )}
            </Formik>


        </div>

    );



}

export default FormSueldo;