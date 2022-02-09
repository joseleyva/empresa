import { Formik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup';
import { Form, Col, Button, Row, InputGroup } from 'react-bootstrap';
import { EscolaridadOp, Nivel } from './Opciones';
import { updateInfoVacanciesApi } from '../api/vacancies';
import { getAccessTokenApi } from '../api/auth';
import { notification } from 'antd';

const schema = yup.object().shape({
    scholarship: yup.string().required("Seleccione la Escolaridad"),
    knowledge: yup.string().required("especifique los conociemntos").min(1).matches(/^[a-zA-ZñÑ ]+$/),
    experience: yup.string().required("Especifique el puesto").matches(/^[a-zA-ZñÑ ]+$/),
    competencies: yup.string().required("Especifique las competencias").matches(/^[a-zA-ZñÑ ]+$/),
    abilities: yup.string().required("Especifique las habilidades").matches(/^[a-zA-ZñÑ ]+$/),
    parcel: yup.string().required("Especifique"),
    idiom: yup.string().required("Ingrese los idiomas").matches(/^[a-zA-ZñÑ ]+$/),
    actIdiom: yup.string().required("Ingrese las actividades").matches(/^[a-zA-ZñÑ ]+$/),
    levelIdiom: yup.string().required("Seleccione una opcion"),
    levelExpe: yup.string().required("Seleccione una opcion"),


});
const FormEdu = (props) => {
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
                    scholarship: "",
                    knowledge: "",
                    experience: "",
                    competencies: "",
                    abilities: "",
                    parcel: "",
                    idiom: "",
                    actIdiom: "",
                    levelIdiom: "",
                    levelExpe: "",
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
                        <Form.Label className="titulo">Datos de Escolaridad</Form.Label>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Escolaridad</Form.Label>
                                <Form.Select
                                    required
                                    type="select"
                                    name="scholarship"
                                    value={values.scholarship}
                                    onChange={handleChange}
                                    isValid={touched.scholarship && !errors.scholarship}
                                    isInvalid={fallo ? !!errors.scholarship : false}
                                >
                                    <option value="">Seleccione</option>
                                    {Object.keys(EscolaridadOp).map((x, i) => (<option value={x} key={i}>{x}</option>))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.scholarship}</Form.Control.Feedback>

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
                                        name="knowledge"
                                        value={values.knowledge}
                                        onChange={handleChange}
                                        isValid={touched.knowledge && !errors.knowledge}
                                        isInvalid={fallo ? !!errors.knowledge : false}
                                    />
                                    <Form.Control.Feedback type="invalid" tooltip>{errors.knowledge}
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
                                    name="experience"
                                    value={values.experience}
                                    onChange={handleChange}
                                    isValid={touched.experience && !errors.experience}
                                    isInvalid={fallo ? !!errors.experience : false}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.experience}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik04" className="position-relative">
                                <Form.Label> Nivel en años</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    name="levelExpe"
                                    value={values.levelExpe}
                                    onChange={handleChange}
                                    isValid={touched.levelExpe && !errors.levelExpe}
                                    isInvalid={fallo ? !!errors.levelExpe : false}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.levelExpe}</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Competencias requeridas</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="competencies"
                                    value={values.competencies}
                                    onChange={handleChange}
                                    isValid={touched.competencies && !errors.competencies}
                                    isInvalid={fallo ? !!errors.competencies : false}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.competencies}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Habilidades requeridas</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="abilities"
                                    value={values.abilities}
                                    onChange={handleChange}
                                    isValid={touched.abilities && !errors.abilities}
                                    isInvalid={fallo ? !!errors.abilities : false}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.abilities}</Form.Control.Feedback>

                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik03" className="position-relative">
                                <Form.Label>% de paqueteria de office</Form.Label>
                                <Form.Select
                                    required
                                    type="select"
                                    name="parcel"
                                    value={values.parcel}
                                    onChange={handleChange}
                                    isValid={touched.parcel && !errors.parcel}
                                    isInvalid={fallo ? !!errors.parcel : false}
                                >
                                    <option value="">Seleccione</option>
                                    {Object.keys(Nivel).map((x, i) => (<option value={x} key={i}>{x}</option>))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.parcel}
                                </Form.Control.Feedback>
                            </Form.Group>

                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationFormik04" className="position-relative">
                                <Form.Label>Idiomas adicionales</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="idiom"
                                    value={values.idiom}
                                    onChange={handleChange}
                                    isValid={touched.idiom && !errors.idiom}
                                    isInvalid={fallo ? !!errors.idiom : false}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.idiom}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik04" className="position-relative">
                                <Form.Label> Nivel de idioma</Form.Label>
                                <Form.Select
                                    required
                                    type="text"
                                    name="levelIdiom"
                                    value={values.levelIdiom}
                                    onChange={handleChange}
                                    isValid={touched.levelIdiom && !errors.levelIdiom}
                                    isInvalid={fallo ? !!errors.levelIdiom : false}
                                >
                                    <option value="">Seleccione</option>
                                    {Object.keys(Nivel).map((x, i) => (<option value={x} key={i}>{x}</option>))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.levelIdiom}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik03" className="position-relative">
                                <Form.Label>¿Para que actividades utiliza el idioma?</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="actIdiom"
                                    value={values.actIdiom}
                                    onChange={handleChange}
                                    isValid={touched.actIdiom && !errors.actIdiom}
                                    isInvalid={fallo ? !!errors.actIdiom : false}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.actIdiom}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <div className="DivBF">
                            <Button type="submit" onClick={handleClick} className="botonF" >Guardar</Button>
                            <Button variant="danger" className="botonF">Cancelar</Button>
                        </div>
                        <Row className="mt-3">
                            <Form.Group as={Col} md={{ span: 10, offset: 10 }}>
                                <Button onClick={funcion} disabled={estado} className="botonStep" variant="outline-secondary">
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

export default FormEdu;