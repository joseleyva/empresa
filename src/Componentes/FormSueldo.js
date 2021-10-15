import { Formik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup';
import { Form, Col, Button, Row } from 'react-bootstrap';

const schema = yup.object().shape({
    Sueldo: yup.string().required("Ingrese el sueldo").min(1),
    Periodo: yup.string().required("Seleccione un periodo").min(1).matches(/^[a-zA-Z]+$/),
    TiempoExtra: yup.string().required("Selecione una opcion").min(1).matches(/^[a-zA-Z]+$/),
    Prestaciones: yup.string().required("Ingrese las pretaciones").min(1).matches(/^[a-zA-Z]+$/),
    Bonos: yup.string().required("Ingrese los bonos").matches(/^[a-zA-Z]+$/).min(1),
    Herramientas: yup.string().required("Ingrese las herramientas").matches(/^[a-zA-Z]+$/).min(1),
});
const FormSueldo = () => {
    const [fallo, setFallo] = useState(false);


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
       
        setFallo(true);


    };
    return (
        <div className="VacanteForm">
            <Formik
                validationSchema={schema}
                onSubmit={console.log}
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
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isValid,
                    errors,
                }) => (
                    <Form  onSubmit={handleSubmit} className="FormDatos">
                        <h4>Datos del Sueldo</h4>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Sueldo Mensual Bruto</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Sueldo"
                                    value={values.Sueldo}
                                    onChange={handleChange}
                                    isValid={touched.Sueldo && !errors.Sueldo}
                                   isInvalid={fallo ? !!errors.Sueldo: false}
                                />
                            <Form.Control.Feedback type="invalid" tooltip>{errors.Sueldo}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationFormik04" className="position-relative">
                                <Form.Label> Periodo de pago</Form.Label>

                                <Form.Select
                                    type="text"
                                    name="Periodo"
                                    value={values.Periodo}
                                    onChange={handleChange}
                                    isValid={touched.Periodo && !errors.Periodo}
                                    isInvalid={!!errors.Periodo}
                                >
                                    <option value="0"></option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Periodo}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Opcion a tiempo extra</Form.Label>
                                <Form.Select
                                    type="text"
                                    name="TiempoExtra"
                                    value={values.TiempoExtra}
                                    onChange={handleChange}
                                    isValid={touched.TiempoExtra && !errors.TiempoExtra}
                                    isInvalid={!!errors.TiempoExtra}
                                >
                                    <option value="0"></option>
                                    <option value="1">One</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.TiempoExtra}</Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Prestaciones</Form.Label>
                                <Form.Select
                                    type="text"
                                    name="Prestaciones"
                                    value={values.Prestaciones}
                                    onChange={handleChange}
                                    isValid={touched.Prestaciones && !errors.Prestaciones}
                                    isInvalid={!!errors.Prestaciones}

                                >
                                    <option value="0">1</option>
                                    <option value="1">2</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Prestaciones}</Form.Control.Feedback>

                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Bonos</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Bonos"
                                    value={values.Bonos}
                                    onChange={handleChange}
                                    isValid={touched.Bonos && !errors.Bonos}
                                    isInvalid={!!errors.Bonos}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Bonos}</Form.Control.Feedback>

                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik03" className="position-relative">
                                <Form.Label>Herramientas de trabajo</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Herramientas"
                                    value={values.Herramientas}
                                    onChange={handleChange}
                                    isValid={touched.Herramientas && !errors.Herramientas}
                                    isInvalid={!!errors.Herramientas}
                                />

                                <Form.Control.Feedback type="invalid" tooltip>{errors.Herramientas}
                                </Form.Control.Feedback>
                            </Form.Group>

                        </Row>




                        <div className="DivBF">
                            <Button type="submit" className="botonF" >Guardar</Button>
                            <Button variant="danger" className="botonF">Cancelar</Button>
                        </div>



                    </Form>
                )}
            </Formik>


        </div>

    );



}

export default FormSueldo;