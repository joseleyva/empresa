import React, { useState } from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Button, Form, Row } from 'react-bootstrap';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Instagram } from '@mui/icons-material';
import Link from '@mui/material/Link';
import { Divider } from '@mui/material';
import FormAsk from '../../components/Web/FormAsk'
import { Formik } from 'formik';
import * as yup from 'yup';


const schema = yup.object().shape({
    numberAsk: yup.number().required("Ingrese un numero").min(1, 'Minimo 1').max(10, 'Maximo 10')
});

export default function CrearEvaluaciones() {
    const [validated, setValidated] = useState(false);
    const [fallo, setFallo] = useState(false);
    const [num, setNum] = useState(0);
    const [disabled, setDisabled] = useState(false);

    const handleClick = (event) => {
        const Button = event.currentTarget;
        if (Button.checkValidity() === false) {

        }
        setFallo(true);
    };

    let persons = [];
    for (let i = 0; i<num.numberAsk; i++){
      persons.push(<FormAsk ask={`Pregunta${i}`}/>)
    }
    return (
        <div className="App">

            <div className="ContenedorEmpresas">
                <h4> Escritorio Virtual</h4>
                <Divider />
                <Formik
                    validationSchema={schema}
                    onSubmit={(valores, { resetForm }) => {
                        setValidated(true);
                        setFallo(true);
                        setNum(valores);
                        setDisabled(true);
                    }}
                    initialValues={{
                        numberAsk: ''
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
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="4">

                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    md="4"
                                    controlId="validationFormik101"
                                    className="position-relative"
                                >
                                    <Form.Label>Ingrese el numero de preguntas</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="numberAsk"
                                        disabled={disabled}
                                        value={values.numberAsk}
                                        onChange={handleChange}
                                        isValid={touched.numberAsk && !errors.numberAsk}
                                        isInvalid={fallo ? !!errors.numberAsk : false}
                                    />
                                    <Form.Control.Feedback type="invalid" tooltip>{errors.numberAsk}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} md="4" className='mt-4 d-grid gap-2'>
                                    <Button type="submit" onClick={handleClick}>Agregar</Button>
                                </Form.Group>
                            </Row>


                        </Form>
                    )}
                </Formik>
                <Divider />

               {persons}

            </div>

            <footer>
                <div className="Fcontainer">
                    <div className="row">
                        <div className="Fcol-md-4 footer-col">
                            <h4>Dirección</h4>
                            <p>

                            </p>
                        </div>
                        <div className="Fcol-md-4 footer-col">
                            <h4>Correo</h4>
                            <p>

                            </p>
                        </div>
                        <div className="Fcol-md-4 footer-col">
                            <h4>Redes Sociales</h4>
                            <Link
                                display="block"
                                variant="body1"
                                href="#"
                                name="GitHub"
                                sx={{ mb: 0.5 }}
                            >
                                <GitHubIcon name='GitHub'
                                />
                                <span>GitHub</span>
                            </Link>
                            <Link
                                display="block"
                                variant="body1"
                                href="#"
                                name="Facebook"
                                sx={{ mb: 0.5 }}
                            >
                                <FacebookIcon name='Facebook'
                                />
                                <span>Facebook</span>
                            </Link>
                            <p>
                                <Link
                                    display="block"
                                    variant="body1"
                                    href="#"
                                    name="Twitter"
                                    sx={{ mb: 0.5 }}
                                >
                                    <TwitterIcon name='Twitter'
                                    />
                                    <span>Twitter</span>
                                </Link>

                                <Link
                                    display="block"
                                    variant="body1"
                                    href="#"
                                    name="Instagram"
                                    sx={{ mb: 0.5 }}
                                >
                                    <Instagram name='Instagram'
                                    />
                                    <span>Instagram</span>
                                </Link>
                            </p>
                        </div>
                        <div className="Fcol-md-4 footer-col">
                            <h4>Empresa</h4>
                            <p>

                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
