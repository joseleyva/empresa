import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Figure } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
    Correo: yup.string().required().matches(/^[a-zA-Z@]+$/).min(8),
    Contra: yup.string().matches(/^[a-zA-Z0-9]+$/).required(),
});

function InicioS() {
    return (
        <div className="PrincipalS">
            <div className="Contenedor">
                <Figure className="ImagenS">
                    <Figure.Image
                        src="imagen1.jpg"
                    />
                </Figure>
                <div className="FormularioS">

                    <h2>Inicia Sesión</h2>
                    <Formik
                        validationSchema={schema}
                        onSubmit={console.log}
                        initialValues={{
                            Correo: '',
                            Contra: '',
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
                            <Form noValidate onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group controlId="formGroupEmail" className="position-relative">
                                        <Form.Label>Correo electronico</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Ingrese el correo"
                                            name="Correo"
                                            value={values.Correo}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.Correo && !errors.Correo}
                                            isInvalid={!!errors.Correo}
                                        />
                                      
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                <Form.Group className="position-relative" controlId="formGroupPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Contraseña"
                                        name="Contra"
                                        value={values.Contra}
                                        onChange={handleChange}
                                        isValid={touched.Contra && !errors.Contra}
                                        isInvalid={!!errors.Contra}
                                    />
                                    
                                </Form.Group>
                                <label>Olvide la contraseña</label>
                                </Row>
                                <div className="divBS">
                                    <Button className="botonS" href="/Empresas">Iniciar Sesion</Button>
                                    <Button className="botonS" variant="danger" href="/">Cancelar</Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    <div>
                        <label  >¿No tienes cuenta?</label>
                        <Alert.Link className="labelI" href="/CrearC">Crear una aquí</Alert.Link>
                    </div>
                </div>
            </div>


        </div>


    );

}

export default InicioS;