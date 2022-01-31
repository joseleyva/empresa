import React, { useState } from 'react';
import { Form, Col, Row, Button } from "react-bootstrap";
import * as yup from 'yup';
import { Formik } from 'formik'
import { SN } from '../../Opciones';

const schema = yup.object().shape({
    label: yup.string().required("Seleccione el puesto").matches(/^[a-zA-Z ]+$/),
    type: yup.string().required("Ingrese el area").matches(/^[a-zA-Z ]+$/),
});
export default function FormAsk(props) {
    const { ask } = props;
    const [validated, setValidated] = useState(false)
    const [fallo, setFallo] = useState(false);


    return (
        <Formik
            validationSchema={schema}
            enableReinitialize={true}
            onSubmit={(valores, { resetForm }) => {
                setValidated(true);
                setFallo(true);
                
                console.log(ask);
            }}
            initialValues={{
                label: "",
                type: "",


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
                                {Object.keys(SN).map((x, i) => (<option value={x} key={i}>{x}</option>))}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid" tooltip>{errors.type}</Form.Control.Feedback>
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
