import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Figure } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';


const schema = yup.object().shape({
    Nombre: yup.string().required("Ingrese su nombre").matches(/^[a-zA-Z ]+$/, "Solo letras"),
    Correo: yup.string().required("Ingrese sus Correo").matches(/^[a-zA-Z ]+$/, 'Solo letras'),
    Contra: yup.string().matches(/^[a-zA-Z0-9]+$/).max(20, 'Muy larga').min(8, 'Muy corta').required("Ingrese su contraseña"),
    ConfContra: yup.string().matches(/^[a-zA-Z0-9]+$/).required("Confirme su contraseña").max(20, 'Muy larga').min(8, 'Muy corta'),
});

function CrearC() {
    return (
        <div className="PrincipalC">
            <div className="ContenedorC">

                <Figure className="ImagenC">
                    <Figure.Image
                        src="imagen1.jpg"
                        className="ImgC"

                    />
                </Figure>


                <div className="FormularioC">
                    <Formik
                        validationSchema={schema}
                        onSubmit={console.log}
                        initialValues={{
                            Nombre: '',
                            Correo: '',
                            Contra: '',
                            ConfContra: '',
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
                            <Form className="FormC" noValidate onSubmit={handleSubmit}>
                                <h4>Registro:</h4>
                                <Row className="mb-3">
                                    <Form.Group controlId="validationFormik01" className="position-relative">
                                        <Form.Label>Nombre Comercial</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Ingrese el nombre"
                                            name="Nombre"
                                            value={values.Nombre}
                                            onChange={handleChange}
                                            isValid={touched.Nombre && !errors.Nombre}
                                            isInvalid={!!errors.Nombre}
                                        />
                                        <Form.Control.Feedback type="invalid" tooltip>{errors.Nombre}</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                <Form.Group className="position-relative" controlId="formGroupEmail">
                                    <Form.Label>Correo electronico</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="Correo"
                                        placeholder="Ingrese el correo"
                                        value={values.Correo}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isValid={touched.Correo && !errors.Correo}
                                        isInvalid={!!errors.Correo}
                                    />
                                    <Form.Control.Feedback type="invalid" tooltip>{errors.Correo}</Form.Control.Feedback>
                                
                                </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                <Form.Group className="position-relative" controlId="formGroupPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="Contra"
                                        placeholder="Contraseña"
                                        value={values.Contra}
                                        onChange={handleChange}
                                        isValid={touched.Contra && !errors.Contra}
                                        isInvalid={!!errors.Contra}
                                    />
                                     <Form.Control.Feedback type="invalid" tooltip>{errors.Contra}</Form.Control.Feedback>
                                </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                <Form.Group className="position-relative" controlId="formGroupPassword">
                                    <Form.Label>Confirmar Contraseña</Form.Label>
                                    <Form.Control 
                                    type="password" 
                                    name="ConfContra"
                                    placeholder="Confirmar Contraseña"
                                      value={values.ConfContra}
                                      onChange={handleChange}
                                      isValid={touched.ConfContra && !errors.ConfContra}
                                      isInvalid={!!errors.ConfContra}
                                    />
                                     <Form.Control.Feedback type="invalid" tooltip>{errors.ConfContra}</Form.Control.Feedback>
                                </Form.Group>
                                </Row>
                                <div className="divBC">
                                    <Button className="botonC" type="submit">Registrar</Button>
                                    <Button className="botonC" variant="danger" href="/">Cancelar</Button>
                                </div>
                            </Form>
                        )}
                    </Formik>


                </div>
            </div>

        </div>


    );

}

export default CrearC;