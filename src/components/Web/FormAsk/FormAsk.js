import React, { useState, useEffect } from 'react';
import { Form, Col, Row, Button } from "react-bootstrap";
import * as yup from 'yup';
import { Divider } from '@mui/material';
import { Formik } from 'formik'

const schema = yup.object().shape({
    label: yup.string().required("Ingrese el campo necesario").matches(/^[a-zA-ZÑñ ¿?]+$/),
    type: yup.string().required("Seleccione una opcion"),
});
export default function FormAsk(props) {
    const { ask, exam, setExam, id } = props;
    const [validated, setValidated] = useState(false);
    const [fallo, setFallo] = useState(false);
    const [arrOptions, setArrOptions] = useState([]);
    const [save, setSave] = useState(true);
    const arr = exam;
    useEffect(() => {
        setArrOptions({
            option1: "",
            option2: "",
            option3: "",
            option4: ""
        });
    }, [ask])


    return (
        <>
            <Formik
                validationSchema={schema}
                enableReinitialize={true}
                onSubmit={(valores, { resetForm }) => {
                    if (valores.type === "select") {
                        valores.options = arrOptions;
                    }
                    setValidated(true);
                    setFallo(true);
                    arr.push(valores);
                    setExam(arr);
                    setSave(false);
                }}
                initialValues={{
                    ask: ask,
                    label: "",
                    type: "",
                    options: ""

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
                    <Form noValidate validated={validated} onSubmit={handleSubmit} id={id} className="m-3">
                        <Row className="mb-2">
                            <Form.Group as={Col} md="8" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Ingrese la pregunta</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="label"
                                    value={values.label}
                                    onChange={handleChange}
                                    isValid={touched.label && !errors.label}
                                    isInvalid={fallo ? !!errors.label : false}
                                />

                                <Form.Control.Feedback type="invalid" tooltip>{errors.label}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik04" className="position-relative">
                                <Form.Label>Seleccione el tipo de pregunta</Form.Label>
                                <Form.Select
                                    required
                                    type="select"
                                    name="type"
                                    value={values.type}
                                    onChange={handleChange}
                                    isValid={touched.type && !errors.type}
                                    isInvalid={fallo ? !!errors.type : false}
                                >
                                    <option value="">Seleccione</option>
                                    <option value="text">Abierta</option>
                                    <option value="select">Opciones</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.type}</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        {values.type === "select" && (
                            <>
                                <Row className='mb-3'>
                                    <Form.Group as={Col} md="4">
                                        <Form.Label>Opcion 1</Form.Label>
                                        <Form.Control
                                            type='text'
                                            name="option1"
                                            value={arrOptions.option1}
                                            onChange={e => setArrOptions({
                                                ...arrOptions, option1: e.target.value
                                            })}
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} md="4">
                                        <Form.Label>Opcion 2</Form.Label>
                                        <Form.Control
                                            type='text'
                                            name="option2"
                                            value={arrOptions.option2}
                                            onChange={e => setArrOptions({
                                                ...arrOptions, option2: e.target.value
                                            })}
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} md="4">
                                        <Form.Label>Opcion 3</Form.Label>
                                        <Form.Control
                                            type='text'
                                            name="option3"
                                            value={arrOptions.option3}
                                            onChange={e => setArrOptions({
                                                ...arrOptions, option3: e.target.value
                                            })}
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className='mb-3'>
                                    <Form.Group as={Col} md="4">
                                        <Form.Label>Opcion 4</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="option4"
                                            value={arrOptions.option4}
                                            onChange={e => setArrOptions({
                                                ...arrOptions, option4: e.target.value
                                            })}
                                        />
                                    </Form.Group>
                                </Row>
                            </>
                        )
                        }


                        <Row className='mb-3'>
                            <Form.Group as={Col} md="4" >
                            </Form.Group>
                            <Form.Group as={Col} md="4" >
                                {save ?
                                    <Button type="submit" className="botonF" >Guardar Pregunta</Button>

                                    : <Button variant="secondary" disabled className="botonF"> Guardada</Button>}
                            </Form.Group>
                            <Form.Group as={Col} md="4" >
                            </Form.Group>
                        </Row>

                    </Form>
                )}

            </Formik>
            <Divider />
        </>

    );
}
