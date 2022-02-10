import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import {Formik} from 'formik';
import * as yup from 'yup';
export default function AddEmpresa() {

    return (
        <div>
            <AddEmpresaForm />
        </div>
    )
}

const schema = yup.object().shape({
    title: yup.string().required("Ingrese el puesto").matches(/^[a-zA-Z ]+$/, "Solo letras").min(5, 'muy corto'),
    description: yup.string().required("Ingrese una descripción")

});
function AddEmpresaForm() {
    const [fallo, setFallo] = useState(false);

    const handleClick = (event) => {
        const Button = event.currentTarget;
        if (Button.checkValidity() === false) {

        }
        setFallo(true);
    };
    return (
        <Formik
            validationSchema={schema}
            onSubmit={async (valores, { resetForm }) => {

            }}
            initialValues={{
                title: "",
                description: "",
            }
            }
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                isInvalid,
                errors,
            }) => (
                <Form >
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4">
                            <Form.Label>Nombre de la empresa</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={values.title}
                                onChange={handleChange}
                                isValid={touched.title && !errors.title}
                                isInvalid={fallo ? !!errors.title : false}
                                required
                            />
                            <Form.Control.Feedback type="invalid" tooltip>{errors.title}</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} md="10">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                            style={{resize: "none", height: 125}}
                            className="TextP"
                            type="text"
                            name='description'
                            as="textarea"
                            value={values.description}
                            onChange={handleChange}
                            isValid={touched.description && !errors.description}
                            isInvalid={fallo ? !!errors.description : false}
                            required
                            />
                            <Form.Control.Feedback type='invalid' tooltip>{errors.description}</Form.Control.Feedback>
                        </Form.Group>

                    </Row>
                    <Row className='mb-3 d-grid gap-2'>
                        <Button onClick={handleClick}>Crear</Button>
                    </Row>
                </Form>
            )}
        </Formik>
    );
}