import { Formik } from 'formik';
import { useState} from 'react';
import * as React from 'react';
import * as yup from 'yup';
import { Form, Col, Button, Row, InputGroup } from 'react-bootstrap';
import { Puesto, DiasP, SN, LugarT, RangoE, Genero } from './Opciones';
import useAuth from '../hooks/useAuth';
import { notification } from 'antd'; 
import { getAccessTokenApi } from '../api/auth';
import { createPollApi } from '../api/polls';
import '../scss/index.scss';

const schema = yup.object().shape({
    nameP: yup.string().required("Ingrese el puesto").matches(/^[a-zA-Z ]+$/, "Solo letras").min(5, 'muy corto'),
    numberP: yup.number().required("Numero de vacantes").min(1, 'Ingrese un numero'),
    activity: yup.string().max(100, 'Muy largo').min(0, 'Ingrese la descripción').required("Describir la actividad"),
    reportP: yup.string().required("Seleccione una opción"),
    daysToWork: yup.string().required("Ingrese los días laborales"),
    startTime: yup.string().required("Ingrese el horario laboral"),
    finishTime: yup.string().required("Ingrese el horario laboral"),
    turn: yup.string().required("Seleccione una opción"),
    daysToPay: yup.string().required("Seleccione una opción"),
    weekGap: yup.string().required("Seleccione una opción"),
    trip: yup.string().required("Seleccione una opcion"),
    place: yup.string().required("Seleccione una opción"),
    rangeAge: yup.string().required("Seleccione una opción"),
    sex: yup.string().required("Seleccione una opcion"),
    disability: yup.string().required("Seleccione una opción"),
    peopleOnCharge: yup.string().required("Seleccione una opción"),

});
const FormVac = (props) => {
    const [validated, setValidated] = useState(false)
    const [fallo, setFallo] = useState(false);
    const [estado,setEstado]=React.useState(true);
    const {funcion, place}=props;
    const token = getAccessTokenApi();
    const {user} = useAuth();
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
                onSubmit={async(valores, { resetForm }) => {
                    setValidated(true);
                    setEstado(false);
                    const result = await createPollApi(token,valores);
                    if (!result.ok) {
                        notification["error"]({
                          description: result.message,
                         placement: 'bottomLeft',
                        });
                    }else{
                      notification["success"]({
                        description: result.message,
                        placement: 'bottomLeft',
                      });
                      resetForm();
                    }
                }}
                initialValues={{
                    name: user.name, 
                    nameP: "",
                    numberP: "",
                    activity: "",
                    reportP: "",
                    daysToWork: "",
                    startTime: "",
                    finishTime:"",
                    turn: "",
                    daysToPay: "",
                    weekGap: "",
                    trip: "",
                    place: "",
                    rangeAge: "",
                    sex: "",
                    disability: "",
                    peopleOnCharge: "",
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
                    <Form noValidate validated={validated} onSubmit={handleSubmit} className="FormDatos">
                        <Form.Label className="titulo">Datos de la vacante</Form.Label>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Nombre del puesto</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nameP"
                                    value={values.nameP}
                                    onChange={handleChange}
                                    isValid={touched.nameP && !errors.nameP}
                                    isInvalid={fallo ? !!errors.nameP : false}
                                    required
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.nameP}</Form.Control.Feedback>


                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik02" className="position-relative">
                                <Form.Label>Número de posiciones a reclutar</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="numberP"
                                    value={values.numberP}
                                    onChange={handleChange}
                                    isValid={touched.numberP && !errors.numberP}
                                    isInvalid={fallo ? !!errors.numberP : false}
                                    required

                                />

                                <Form.Control.Feedback type="invalid" tooltip>{errors.numberP}</Form.Control.Feedback>

                            </Form.Group>
                            <Form.Group as={Col} md="4" validated={validated} controlId="validationFormik01" className="position-relative">
                                <Form.Label>¿A que puesto Reportara?</Form.Label>
                                <Form.Select id="inlineFormCustomSelect"
                                    type="select"
                                    name="reportP"
                                    value={values.reportP}
                                    onChange={handleChange}
                                    isValid={touched.reportP && !errors.reportP}
                                    isInvalid={fallo ? !!errors.reportP : false}
                                    required
                                >
                                    <option value="">Seleccionar</option>
                                    {Object.keys(Puesto).map((x, i) => (<option value={x} key={i}>{x}</option>))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.reportP}</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="9" controlId="validationFormikUsername" className="position-relative">
                                <Form.Label>Actividades del puesto</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        className="TextP"
                                        as='textarea'
                                        type="text"
                                        placeholder="Descripción"
                                        name="activity"
                                        value={values.activity}
                                        onChange={handleChange}
                                        isValid={touched.activity && !errors.activity}
                                        isInvalid={fallo ? !!errors.activity : false}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid" tooltip>{errors.activity}</Form.Control.Feedback>

                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Row className="mb-2">
                           
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Dias de trabajo</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="daysToWork"
                                    value={values.daysToWork}
                                    onChange={handleChange}
                                    isValid={touched.daysToWork && !errors.daysToWork}
                                    isInvalid={fallo ? !!errors.daysToWork : false}
                                    required
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.daysToWork}</Form.Control.Feedback>

                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Hora de Inicio</Form.Label>
                                <Form.Control
                                    type="time"
                                    name="startTime"
                                    value={values.startTime}
                                    onChange={handleChange}
                                    isValid={touched.startTime && !errors.startTime}
                                    isInvalid={fallo ? !!errors.startTime : false}
                                    required
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.startTime}</Form.Control.Feedback>

                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Hora  de termino</Form.Label>
                                <Form.Control
                                    type="time"
                                    name="finishTime"
                                    value={values.finishTime}
                                    onChange={handleChange}
                                    isValid={touched.finishTime && !errors.finishTime}
                                    isInvalid={fallo ? !!errors.finishTime : false}
                                    required
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.finishTime}</Form.Control.Feedback>

                            </Form.Group>


                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationFormik03" className="position-relative">
                                <Form.Label>¿Rola turnos?</Form.Label>
                                <Form.Select
                                    type="select"
                                    name="turn"
                                    value={values.turn}
                                    onChange={handleChange}
                                    isValid={touched.Turno && !errors.turn}
                                    isInvalid={fallo ? !!errors.turn : false}
                                    required
                                >

                                    <option value="">Seleccionar</option>
                                    {Object.keys(SN).map((x, i) => (<option value={x} key={i}>{x}</option>))}
                                </Form.Select>

                                <Form.Control.Feedback type="invalid" tooltip>{errors.turn}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik04" className="position-relative">
                                <Form.Label>¿Qué días se efectua el pago?</Form.Label>
                                <Form.Select
                                    type="select"
                                    name="daysToPay"
                                    value={values.daysToPay}
                                    onChange={handleChange}
                                    isValid={touched.daysToPay && !errors.daysToPay}
                                    isInvalid={fallo ? !!errors.daysToPay : false}
                                    required
                                >
                                    <option value="">Seleccionar</option>
                                    {Object.keys(DiasP).map((x, i) => (<option value={x} key={i}>{x}</option>))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.daysToPay}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationFormik03" className="position-relative">
                                <Form.Label>¿Existe semana de desface?</Form.Label>
                                <Form.Select
                                    type="select"
                                    name="weekGap"
                                    value={values.weekGap}
                                    onChange={handleChange}
                                    isValid={touched.weekGap && !errors.weekGap}
                                    isInvalid={fallo ? !!errors.weekGap : false}
                                    required
                                >
                                    <option value="">Seleccionar</option>
                                    {Object.keys(SN).map((x, i) => (<option value={x} key={i}>{x}</option>))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.weekGap}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">

                            <Form.Group as={Col} md="4" controlId="validationFormik03" className="position-relative">
                                <Form.Label>¿Requiere disponibilidad para viajar?</Form.Label>
                                <Form.Select
                                    type="select"
                                    name="trip"
                                    value={values.trip}
                                    onChange={handleChange}
                                    isValid={touched.Viajar && !errors.trip}
                                    isInvalid={fallo ? !!errors.trip : false}
                                    required
                                >
                                    <option value="" >Seleccionar</option>
                                    {Object.keys(SN).map((x, i) => (<option value={x} key={i}>{x}</option>))}
                                </Form.Select>

                                <Form.Control.Feedback type="invalid" tooltip>{errors.trip}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationFormik03" className="position-relative">
                                <Form.Label>Lugar de trabajo</Form.Label>
                                <Form.Select
                                    type="select"
                                    name="place"
                                    value={values.place}
                                    onChange={handleChange}
                                    isValid={touched.place && !errors.place}
                                    isInvalid={fallo ? !!errors.place : false}
                                    required
                                >
                                    <option value="">Seleccione</option>
                                    {Object.keys(LugarT).map((x, i) => (<option value={x} key={i}>{x}</option>))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.place}
                                </Form.Control.Feedback>

                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik03" className="position-relative">
                                <Form.Label>Rango de edad</Form.Label>
                                <Form.Select
                                    type="select"
                                    name="rangeAge"
                                    value={values.rangeAge}
                                    onChange={handleChange}
                                    isValid={touched.rangeAge && !errors.rangeAge}
                                    isInvalid={fallo ? !!errors.rangeAge : false}
                                    required
                                >
                                    <option value="">Seleccione</option>
                                    {Object.keys(RangoE).map((x, i) => (<option value={x} key={i}>{x}</option>))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.rangeAge}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationFormik03" className="position-relative">
                                <Form.Label>Sexo</Form.Label>
                                <Form.Select
                                    type="select"
                                    name="sex"
                                    value={values.sex}
                                    onChange={handleChange}
                                    isValid={touched.sex && !errors.sex}
                                    isInvalid={fallo ? !!errors.sex : false}
                                    required
                                >
                                    <option value="">Seleccione</option>
                                    {Object.keys(Genero).map((x, i) => (<option value={x} key={i}>{x}</option>))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.sex}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik03" className="position-relative">
                                <Form.Label>¿Se puede considerar gente con discapacidad?</Form.Label>
                                <Form.Select
                                    type="select"
                                    name="disability"
                                    value={values.disability}
                                    onChange={handleChange}
                                    isValid={touched.disability && !errors.disability}
                                    isInvalid={fallo ? !!errors.disability : false}
                                    required
                                >
                                    <option value="">Seleccione</option>
                                    {Object.keys(SN).map((x, i) => (<option value={x} key={i}>{x}</option>))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.disability}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik03" className="position-relative">
                                <Form.Label>¿Tendra gente a su cargo?</Form.Label>
                                <Form.Select
                                    type="select"
                                    name="peopleOnCharge"
                                    value={values.peopleOnCharge}
                                    onChange={handleChange}
                                    isValid={touched.peopleOnCharge && !errors.peopleOnCharge}
                                    isInvalid={fallo ? !!errors.peopleOnCharge : false}
                                    required
                                >
                                    <option value="">Seleccione</option>
                                    {Object.keys(SN).map((x, i) => (<option value={x} key={i}>{x}</option>))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.peopleOnCharge}
                                </Form.Control.Feedback>
                            </Form.Group>

                        </Row>

                        <div className="DivBF">
                            <Button type="submit" onClick={handleClick} className="botonF"  >Guardar</Button>
                            <Button variant="danger" className="botonF">Cancelar</Button>
                        </div>
                        <Row className="mt-3">
                        <Form.Group as={Col} md={{span:10, offset: 10}}>
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

export default FormVac;