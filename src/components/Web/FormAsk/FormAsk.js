import React, {useState} from 'react';
import {Form, Col, Row,Button,InputGroup} from "react-bootstrap";
import * as yup from 'yup';
import { Formik } from 'formik'
import {SN} from '../../Opciones';


export default function FormAsk(props) {
    const schema = yup.object().shape({
        endDate: yup.date().max(new Date(), "Fecha incorrecta").min(yup.ref("startDate"), 'Fecha incorrecta').required("Seleccione"),
        startDate: yup.date().max( yup.ref("endDate"),"Fecha incorrecta").required("Seleccione"),
        job: yup.string().required("Seleccione el puesto").min(5, 'muy corto').matches(/^[a-zA-Z ]+$/),
        workArea: yup.string().required("Ingrese el area").matches(/^[a-zA-Z ]+$/),
        reason: yup.string().required("Ingrese un motivo").min(5, 'muy corto').matches(/^[a-zA-Z ]+$/),
        tohire: yup.string().required("Seleccione una opción"),
        recommendable: yup.string().required("Seleccione una opción"),
        comments: yup.string().required("Ingrese algun comentario").matches(/^[a-zA-Z ñÑ.,]+$/),
        
    });

    const [validated, setValidated] = useState(false)
    const [fallo, setFallo] = useState(false);


  return(
<Formik
                validationSchema={schema}
                enableReinitialize={true}
                onSubmit={(valores, { resetForm }) => {
                
                }}
                initialValues={{
                    startDate: "",
                    endDate: "",
                    job: "",
                    workArea: "",
                    reason: "",
                    tohire: "",
                    recommendable: "",
                    comments: "",
                    toWork: true
                   
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
                                    name="startDate"
                                    value={values.startDate}
                                    onChange={handleChange}
                                    isValid={touched.startDate && !errors.startDate}
                                    isInvalid={fallo ? !!errors.startDate : false}
                                />

                                <Form.Control.Feedback type="invalid" tooltip>{errors.startDate}</Form.Control.Feedback>

                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormikUsername" className="position-relative">
                                <Form.Label>término</Form.Label>
                                <Form.Control
                                    required
                                    type="date"
                                    name="endDate"
                                    value={values.endDate}
                                    onChange={handleChange}
                                    isValid={touched.endDate && !errors.endDate}
                                    isInvalid={fallo ? !!errors.endDate : false}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.endDate}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-2">
                            <Form.Group as={Col} md="8" controlId="validationFormik01" className="position-relative">
                                <Form.Label>¿Cuál era el puesto que desempeño durante ese tiempo?</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="job"
                                    value={values.job}
                                    onChange={handleChange}
                                    isValid={touched.job && !errors.job}
                                    isInvalid={fallo ? !!errors.job : false}
                                />

                                <Form.Control.Feedback type="invalid" tooltip>{errors.job}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik04" className="position-relative">
                                <Form.Label> ¿En que área o departamento?</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="workArea"
                                    value={values.workArea}
                                    onChange={handleChange}
                                    isValid={touched.workArea && !errors.workArea}
                                    isInvalid={fallo ? !!errors.workArea : false}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.workArea}</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>¿Cuál fue el motivo de su salida?</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="reason"
                                    value={values.reason}
                                    onChange={handleChange}
                                    isValid={touched.reason && !errors.reason}
                                    isInvalid={fallo ? !!errors.reason : false}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.reason}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>¿Lo considera recontratable?</Form.Label>
                                <Form.Select
                                    required
                                    type="select"
                                    name="tohire"
                                    value={values.tohire}
                                    onChange={handleChange}
                                    isValid={touched.tohire && !errors.tohire}
                                    isInvalid={fallo ? !!errors.tohire : false}
                                >
                                    <option value="">Seleccione</option>
                                    {Object.keys(SN).map((x, i) => (<option value={x} key={i}>{x}</option>))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.tohire}</Form.Control.Feedback>

                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik03" className="position-relative">
                                <Form.Label>¿Lo considera recomendable?</Form.Label>
                                <Form.Select
                                    required
                                    type="select"
                                    name="recommendable"
                                    value={values.recommendable}
                                    onChange={handleChange}
                                    isValid={touched.recommendable && !errors.recommendable}
                                    isInvalid={fallo ? !!errors.recommendable : false}
                                >
                                    <option value="">Seleccione</option>
                                    {Object.keys(SN).map((x, i) => (<option value={x} key={i}>{x}</option>))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.recommendable}
                                </Form.Control.Feedback>
                            </Form.Group>

                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="9" controlId="validationFormik04" className="position-relative">
                                <Form.Label>Comentarios acerca de su desempeño</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        required
                                        className="TextP"
                                        as='textarea'
                                        type="text"
                                        placeholder="Comentarios"
                                        name="comments"
                                        value={values.comments}
                                        onChange={handleChange}
                                        isValid={touched.comments && !errors.comments}
                                        isInvalid={fallo ? !!errors.comments : false}
                                    />
                                    <Form.Control.Feedback type="invalid" tooltip>{errors.comments}</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>

                        </Row>
                        <div className="DivBF">
                            <Button type="submit" className="botonF" >Enviar</Button>
                        </div>
                        
                    </Form>
                )}
            </Formik>

  );
}
