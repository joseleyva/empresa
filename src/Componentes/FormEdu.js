import { Formik } from 'formik'
import React,{useState} from 'react'
import * as yup from 'yup';
import { Form, Col, Button, Row, InputGroup } from 'react-bootstrap';

const schema = yup.object().shape({
    Escolaridad: yup.string().required("Seleccione la Escolaridad"),
    Conocimientos: yup.string().required("especifique los conociemntos").min(1).matches(/^[a-zA-Z]+$/),
    Experiencia: yup.string().required("Especifique el puesto").matches(/^[a-zA-Z]+$/),
    Compe: yup.string().required("Especifique las competencias").matches(/^[a-zA-Z]+$/),
    Habilidad: yup.string().required("Especifique las habilidades").matches(/^[a-zA-Z]+$/),
    Paqueteria: yup.string().required("Especifique").matches(/^[a-zA-Z]+$/),
    Idiomas: yup.string().required("Ingrese los idiomas").matches(/^[a-zA-Z]+$/),
    ActIdioma: yup.string().required("Ingrese las actividades").matches(/^[a-zA-Z]+$/),
    NivelIdioma: yup.string().required("Seleccione una opcion"),
    NivelExpe: yup.string().required("Seleccione una opcion"),


});
const FormEdu = () => {
    const [fallo, setFallo]=useState(false);
    const [validated, setValidated]= useState(false)

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        setValidated(true);
        setFallo(true);
        
        
      };
    return (
        <div className="VacanteForm">
            <Formik
                validationSchema={schema}
                onSubmit={console.log}
                initialValues={{
                    Escolaridad: "",
                    Conocimientos: "",
                    Experiencia: "",
                    Compe: "",
                    Habilidad: "",
                    Paqueteria: "",
                    Idiomas: "",
                    ActIdioma: "",
                    NivelIdioma:"",
                    NivelExpe:"",
                }}
            >
                {({
                    
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isValid,
                    errors,
                }) => (
                    <Form noValidate validated={validated} onSubmit={handleSubmit} className="FormDatos">
                        <h4>Datos de la Educativos</h4>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Escolaridad</Form.Label>
                                <Form.Select
                                    type="text"
                                    name="Escolaridad"
                                    value={values.Escolaridad}
                                    onChange={handleChange}
                                    isValid={touched.Escolaridad && !errors.Escolaridad}
                                    isInvalid={fallo ? !!errors.Escolaridad : false}
                                >
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Escolaridad}</Form.Control.Feedback>

                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="9" controlId="validationFormikUsername" className="position-relative">
                                <Form.Label>Conocimientos Requeridos</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        className="TextP"
                                        as='textarea'
                                        type="text"
                                        placeholder="Especificar"
                                        name="Conocimientos"
                                        value={values.Conocimientos}
                                        onChange={handleChange}
                                        isValid={touched.Conocimientos && !errors.Conocimientos}
                                        isInvalid={!!errors.Conocimientos}
                                    />
                                    <Form.Control.Feedback type="invalid" tooltip>{errors.Conocimientos}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Row className="mb-2">
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Experiencia Requerida</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Experiancia"
                                    value={values.Experiencia}
                                    onChange={handleChange}
                                    isValid={touched.Experiencia && !errors.Experiencia}
                                    isInvalid={!!errors.Experiencia}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Experiencia}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationFormik04" className="position-relative">
                                <Form.Label> Nivel en años</Form.Label>

                                <Form.Select
                                    type="text"
                                    name="NivelExpe"
                                    value={values.NivelExpe}
                                    onChange={handleChange}
                                    isValid={touched.NivelExpe && !errors.NivelExpe}
                                    isInvalid={!!errors.NivelExpe}
                                >
                                    <option value="0"></option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.NivelExpe}</Form.Control.Feedback>
                            </Form.Group>


                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Competencias requeridas</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Compe"
                                    value={values.Compe}
                                    onChange={handleChange}
                                    isValid={touched.Compe && !errors.Compe}
                                    isInvalid={!!errors.Compe}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Compe}</Form.Control.Feedback>

                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
                                <Form.Label>Habilidades requeridas</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Habilidad"
                                    value={values.Habilidad}
                                    onChange={handleChange}
                                    isValid={touched.Habilidad && !errors.Habilidad}
                                    isInvalid={!!errors.Habilidad}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.Habilidad}</Form.Control.Feedback>

                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik03" className="position-relative">
                                <Form.Label>% de paqueteria de office</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Paqueteria"
                                    value={values.Paqueteria}
                                    onChange={handleChange}
                                    isValid={touched.Paqueteria && !errors.Paqueteria}
                                    isInvalid={!!errors.Paqueteria}
                                />

                                <Form.Control.Feedback type="invalid" tooltip>{errors.Paqueteria}
                                </Form.Control.Feedback>
                            </Form.Group>

                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="3" controlId="validationFormik04" className="position-relative">
                                <Form.Label>Idiomas adicionales</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Idiomas"
                                    value={values.Idiomas}
                                    onChange={handleChange}
                                    isValid={touched.Idiomas && !errors.Idiomas}
                                    isInvalid={!!errors.Idiomas}
                                />


                                <Form.Control.Feedback type="invalid" tooltip>{errors.Idiomas}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationFormik04" className="position-relative">
                                <Form.Label> Nivel de idioma</Form.Label>

                                <Form.Select
                                    type="text"
                                    name="NivelIdioma"
                                    value={values.NivelIdioma}
                                    onChange={handleChange}
                                    isValid={touched.NivelIdioma && !errors.NivelIdioma}
                                    isInvalid={!!errors.NivelIdioma}
                                >
                                    <option value="0"></option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid" tooltip>{errors.NivelIdioma}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="5" controlId="validationFormik03" className="position-relative">
                                <Form.Label>¿Para que actividades utiliza el idioma?</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="ActIdioma"
                                    value={values.ActIdioma}
                                    onChange={handleChange}
                                    isValid={touched.ActIdioma && !errors.ActIdioma}
                                    isInvalid={!!errors.ActIdioma}
                                />

                                <Form.Control.Feedback type="invalid" tooltip>{errors.ActIdioma}
                                </Form.Control.Feedback>
                            </Form.Group>

                        </Row>


                        <div className="DivBF">
                            <Button type="submit" className="botonF" >Guardar</Button>
                            <Button variant="danger" className="botonF">Cancelar</Button>
                        </div>



                    </Form>
                )}
            </Formik>


        </div>

    );



}

export default FormEdu;