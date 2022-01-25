import { Formik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup';
import { Form, Col, Button, Row, InputGroup, Image, Container } from 'react-bootstrap';
import { SN } from './Opciones';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import Perfil from '../assets/img/jpg/Usuario.jpg'
import { useTheme } from '@mui/material/styles';
import useAuth from '../hooks/useAuth';
import {CreateReferenceApi} from '../api/reference';
import {getAccessTokenApi} from '../api/auth';
import { notification } from 'antd';

const schema = yup.object().shape({
    startDate: yup.string().required("Seleccione la fecha"),
    endDate: yup.string().required("Seleccione la fecha"),
    job: yup.string().required("Seleccione el puesto").min(5, 'muy corto').matches(/^[a-zA-Z ]+$/),
    workArea: yup.string().required("Ingrese el area").matches(/^[a-zA-Z ]+$/),
    reason: yup.string().required("Ingrese un motivo").min(5, 'muy corto').matches(/^[a-zA-Z ]+$/),
    tohire: yup.string().required("Seleccione una opción"),
    recommendable: yup.string().required("Seleccione una opción"),
    comments: yup.string().required("Ingrese algun comentario").matches(/^[a-zA-Z ñÑ.,]+$/),
    
});
function FormReferencias(props) {
    const { userRef, avatar, setIsVisibleModal } = props;
    const [validated, setValidated] = useState(false)
    const [fallo, setFallo] = useState(false);
    const [enviado, setEnviado] = useState(false);
    const [open, setOpen] = useState(false);
    const [data, setData]= useState({});
    const {user} = useAuth();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleClick = (event) => {
        const Button = event.currentTarget;
        if (Button.checkValidity() === false) {

        }
        setOpen(true);
        setFallo(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        const token = getAccessTokenApi();

        CreateReferenceApi(token, data).then(result=>{
            if(result.ok){
                notification["success"]({
                    message: result.message,
                    placement: "bottomLeft"
                })
                setOpen(false);
            }else{
                notification["error"]({
                    message: result.message,
                    placement: "bottomLeft"
                })
                setIsVisibleModal(true);
                setOpen(false);
            }
        }).catch(err =>{
            notification["error"]({
                message: err.message,
                placement: "bottomLeft"
            })
            setIsVisibleModal(true);
            setOpen(false);
        })
    
        
    };
    const handleCancel = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
        setIsVisibleModal(true);
    };

    return (
        <div className="ReferenciasForm">
            <Formik
                validationSchema={schema}
                onSubmit={(valores, { resetForm }) => {
                    setData(valores);
                    setEnviado(true);
                    setValidated(true);
                    setIsVisibleModal(false);

                }}
                initialValues={{
                    nameEm: user.name,
                    nameUser: userRef.nameUser,
                    lastnameP: userRef.lastnameP,
                    lastnameM: userRef.lastnameM,
                    email: userRef.email,
                    startDate: "",
                    endDate: "",
                    job: "",
                    workArea: "",
                    reason: "",
                    tohire: "",
                    recommendable: "",
                    comments: "",
                   
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
                        <Container className="ContenedorRefForm">
                            <Row>
                                <Col xs={2} md={1}>
                                    <Image src={avatar ? avatar : Perfil} width="150px" height="150px" />
                                </Col>
                            </Row>
                            <div>
                                <div class="col-md-10">
                                    <div class="card-body">
                                        <h5 align="left">{`${userRef.nameUser} ${userRef.lastnameP} ${userRef.lastnameM}`}</h5>
                                    </div>
                                </div>
                            </div>
                        </Container>
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
                            <Button type="submit" onClick={handleClick} className="botonF" >Enviar</Button>
                            <Button variant="danger" onClick={() => setIsVisibleModal(false)} className="botonF">Cancelar</Button>
                        </div>
                        {
                            (enviado && (
                                <Dialog
                                    fullScreen={fullScreen}
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="responsive-dialog-title"
                                >
                                    <DialogTitle id="responsive-dialog-title">
                                        {"Confirmación de datos"}
                                    </DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            ¿Estás seguro de que haz llenado los datos correctamente?
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button className="boton" onClick={handleClose} autoFocus>
                                            Sí, Enviar
                                        </Button>
                                        <Button variant="danger" className="boton" onClick={handleCancel}>No, Enviar</Button>
                                    </DialogActions>
                                </Dialog>
                            ))
                        }
                    </Form>
                )}
            </Formik>


        </div>

    );



}

export default FormReferencias;