import { Formik } from 'formik'
import React,{useState} from 'react'
import * as yup from 'yup';
import { Form, Col, Button, Row, InputGroup } from 'react-bootstrap';


const FormVac = () => {
    const [ setEnviado] = useState(false);

    const schema = yup.object().shape({
        Nombre: yup.string().required("Ingrese el puesto").matches(/^[a-zA-Z ]+$/, "Solo letras").min(4, 'Muy corto'),
        NumeroP: yup.number().required("Numero de vacantes").min(1, 'Ingrese un numero'),
        Actividades: yup.string().max(100, 'Muy largo').min(0, 'Ingrese la descripción').required("Describir la actividad"),
        PuestoR: yup.string().required("Seleccione el puesto"),
        Dias: yup.string().required("Ingrese los días laborales").matches(/^[a-zA-Z -&]+$/),
        Horario: yup.string().required("Ingrese el horario laboral"),
        Turno: yup.string().required("Ingrese el Turno").matches(/^[a-zA-Z -&]+$/),
        DiasPago: yup.string().required("Ingrese de pagó").matches(/^[0-9]+$/),
        Semana: yup.string().required("").matches(/^[0-9]+$/),
        Viajar: yup.string().required("Seleccione la opcion").matches(/^[a-zA-Z -&]+$/),
        Lugar: yup.string().required("Ingrese el lugar de trabajo").matches(/^[a-zA-Z -&]+$/),
        Rango: yup.string().required("Ingrese el rango de edad").matches(/^[a-zA-Z -&]+$/),
        Sexo: yup.string().required("Seleccione una opcion").matches(/^[a-zA-Z -&]+$/),
        Discapacidad: yup.string().required("Seleccione una opción").matches(/^[a-zA-Z -&]+$/),
        GenCar: yup.string().required("Seleccione una opción").matches(/^[a-zA-Z -&]+$/),
    
    });


    return (
        <div className="VacanteForm">
        
            <Formik
                
                initialValues={{
                    Nombre: "",
                    NumeroP: "",
                    Actividades: "",
                    PuestoR: "",
                    Dias: "",
                    Horario: "",
                    Turno: "",
                    DiasPago: "",
                    Semana: "",
                    Viajar: "",
                    Lugar: "",
                    Rango: "",
                    Sexo: "",
                    Discapacidad: "",
                    GenCar: "",
                }}
                onSubmit={(valores, {resetForm})=>{
                    console.log(valores)
                    setEnviado(true);
                    setTimeout(()=>setEnviado(false),5000);
                }}
                validationSchema={schema}
           >
                {({
                    touched,
                    errors,
                }) => (
                    <Form className="FormDatos">
                        <h4>Datos de la vacante</h4>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Nombre del puesto</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Nombre"
                                   errors={errors.Nombre}
                                   touched={touched.Nombre}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Nombre}</Form.Control.Feedback>

                            </Form.Group>
                            <Form.Group as={Col} md="5" controlId="validationFormik02" className="position-relative">
                                <Form.Label>Número de posiciones a reclutar</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="NumeroP"
                                    errors={errors.NumeroP}
                                    touched={touched.NumeroP}
                                   
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Apellidos}</Form.Control.Feedback>
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
                                        name="Actividades"
                                        errors={errors.Actividades}
                                        touched={touched.Actividades}
                                       
                                    />
                                    <Form.Control.Feedback type="invalid" tooltip>{errors.Actividades}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Row className="mb-2">
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>¿A que puesto Reportara?</Form.Label>
                                <Form.Select id="inlineFormCustomSelect"
                                    type="text"
                                    name="PuestoR"
                                >
                                    <option value="0"></option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.PuestoR}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Dias de trabajo</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Dias"
                                   
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Dias}</Form.Control.Feedback>

                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Horario laboral</Form.Label>
                                <Form.Control
                                    type="time"
                                    name="Horario"
                                  
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Horario}</Form.Control.Feedback>

                            </Form.Group>

                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationFormik03" className="position-relative">
                                <Form.Label>¿Rola turnos? ¿Cuales?</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Turno"
                                    
                                />

                                <Form.Control.Feedback type="invalid" tooltip>{errors.Turno}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik04" className="position-relative">
                                <Form.Label>¿Qué días se efectua el pago?</Form.Label>
                                <Form.Select
                                    type="text"
                                    name="DiasPago"
                                    
                                >
                                    <option value="0"></option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.DiasPago}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationFormik03" className="position-relative">
                                <Form.Label>¿Existe semana de desface?</Form.Label>
                                <Form.Select
                                    type="text"
                                    name="Semana"
                                   
                                >
                                    <option value="0"></option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Semana}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">

                            <Form.Group as={Col} md="4" controlId="validationFormik03" className="position-relative">
                                <Form.Label>¿Requiere disponibilidad para viajar?</Form.Label>
                                <Form.Select
                                    type="text"
                                    name="Viajar"
                                   
                                >
                                    <option value="0"></option>
                                    <option value="1">One</option>
                                </Form.Select>

                                <Form.Control.Feedback type="invalid" tooltip>{errors.Viajar}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationFormik03" className="position-relative">
                                <Form.Label>Lugar de trabajo</Form.Label>
                                <Form.Select
                                    type="text"
                                    name="Lugar"
                                    
                                >
                                    <option value="0"></option>
                                    <option value="1">One</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Lugar}
                                </Form.Control.Feedback>

                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik03" className="position-relative">
                                <Form.Label>Rango de edad</Form.Label>
                                <Form.Select
                                    type="text"
                                    name="Rango"
                                   
                                >
                                    <option value="0"></option>
                                    <option value="1">One</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Rango}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationFormik03" className="position-relative">
                                <Form.Label>Sexo</Form.Label>
                                <Form.Select
                                    type="text"
                                    name="Sexo"
                                   
                                >
                                    <option value="0"></option>
                                    <option value="1">One</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Sexo}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik03" className="position-relative">
                                <Form.Label>¿Se puede considerar gente con discapacidad?</Form.Label>
                                <Form.Select
                                    type="text"
                                    name="Discapacidad"
                                   
                                >
                                    <option value="0"></option>
                                    <option value="1">One</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Discapacidad}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik03" className="position-relative">
                                <Form.Label>¿Tendra gente a su cargo?</Form.Label>
                                <Form.Select
                                    type="text"
                                    name="GenCar"
                                   
                                >
                                    <option value="0"></option>
                                    <option value="1">One</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.GenCar}
                                </Form.Control.Feedback>
                            </Form.Group>

                        </Row>
                        
                            <div className="DivBF">
                            <Button type="submit" className="botonF"  >Guardar</Button>
                            <Button variant="danger" className="botonF">Cancelar</Button>
                            </div>
                        


                    </Form>
                )}
            </Formik>


        </div>

    );



}

export default FormVac;