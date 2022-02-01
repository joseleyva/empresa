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
import { notification } from 'antd';
import { getAccessTokenApi } from '../../api/auth';
import { CreateUserEvaluationsApi } from '../../api/userEvaluations';
import useAuth from '../../hooks/useAuth';


const schema = yup.object().shape({
    numberAsk: yup.number().required("Ingrese un numero").min(1, 'Minimo 1').max(10, 'Maximo 10'),
    nameEvaluation: yup.string().required("Ingrese el nombre").min(5, 'muy corto'),
    time: yup.string().required("Ingrese el tiempo")
});

export default function CrearEvaluaciones() {
    const [validated, setValidated] = useState(false);
    const [fallo, setFallo] = useState(false);
    const [num, setNum] = useState(0);
    const [disabled, setDisabled] = useState(false);
    const [Buttondisabled, setButtonDisabled] = useState(true);
    const [exam, setExam] = useState([]);
    const [data, setData] = useState([]);
    const { user } = useAuth();
    const handleClick = (event) => {
        const Button = event.currentTarget;
        if (Button.checkValidity() === false) {

        }
        setFallo(true);
    };

    const saveAl = () => {
        const token = getAccessTokenApi();
        const evaluation = {
            nameEm: user.name,
            nameEvaluation: data.nameEvaluation,
            time: data.time,
            exam: exam
        }
        console.log(evaluation);
        CreateUserEvaluationsApi(token, evaluation).then(result => {
            if (result.ok) {
                notification["success"]({
                    message: result.message,
                    placement: "bottomLeft"
                })
            } else {
                notification["error"]({
                    message: result.message,
                    placement: "bottomLeft"
                })
            }
        }).catch(err => {
            notification["error"]({
                message: err.message,
                placement: "bottomLeft"
            })
        })
    }
    let persons = [];
    for (let i = 0; i < num; i++) {
        persons.push(<FormAsk ask={`Pregunta${i+1}`} key={i+1} id={i+1} exam={exam} setExam={setExam} />)
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
                        setNum(valores.numberAsk);
                        setDisabled(true);
                        setData(valores);
                        setButtonDisabled(false);
                    }}
                    initialValues={{
                        numberAsk: '',
                        nameEvaluation: "",
                        time: ""
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
                        <Form noValidate validated={validated} className="m-3" onSubmit={handleSubmit}>
                            <Row className='mb-3 mt-3'>
                                <Form.Group as={Col} md="4">
                                    <Form.Label>Nombre del examen</Form.Label>
                                    <Form.Control
                                        disabled={disabled}
                                        type="text"
                                        name="nameEvaluation"
                                        onChange={handleChange}
                                        value={values.nameEvaluation}
                                        isValid={touched.nameEvaluation && !errors.nameEvaluation}
                                        isInvalid={fallo ? !!errors.nameEvaluation : false}
                                    />
                                    <Form.Control.Feedback type='invalid' tooltip>{errors.nameEvaluation} </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4">
                                    <Form.Label>Tiempo para el examen(minutos)</Form.Label>
                                    <Form.Control
                                        disabled={disabled}
                                        type="number"
                                        name="time"
                                        onChange={handleChange}
                                        value={values.time}
                                        isValid={touched.time && !errors.time}
                                        isInvalid={fallo ? !!errors.time : false}
                                    />
                                    <Form.Control.Feedback type='invalid' tooltip>{errors.time} </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationFormik101" className="position-relative">
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
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="4">

                                </Form.Group>
                                <Form.Group as={Col} md="4" className='d-grid gap-2'>
                                    <Button type="submit" onClick={handleClick}>Agregar</Button>
                                </Form.Group>

                                <Form.Group as={Col} md="4" >
                                </Form.Group>
                            </Row>


                        </Form>
                    )}
                </Formik>
                <Divider />

                {persons}

                <Row className='mb-3'>
                    <Form.Group as={Col} md="4" >
                    </Form.Group>
                    <Form.Group className='d-grid gap-2' as={Col} md="4" >
                        <Button variant='primary' disabled={Buttondisabled} onClick={saveAl}>Guardar</Button>
                    </Form.Group>
                    <Form.Group as={Col} md="4" >
                    </Form.Group>
                </Row>
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
