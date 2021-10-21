import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import { Form, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Figure } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


const schema = yup.object().shape({
    Correo: yup.string().required("Ingrese el correo").email("Correo Invalido"),
    Contra: yup.string().matches(/^[a-zA-Z0-9]+$/).required("Ingrese la contraseña").min(8, 'Muy Corta'),
});

function InicioS() {
    const [validated, setValidated] = useState(false)
    const [fallo, setFallo] = useState(false);
    const [enviado, setEnviado] = useState(false);
    const [open, setOpen] = React.useState(false);
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
        setOpen(false);
    };

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
                        onSubmit={(valores, { resetForm }) => {
                            console.log()
                            setEnviado(true);
                            setValidated(true);
                        }}
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
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group controlId="formGroupEmail" className="position-relative">
                                        <Form.Label>Correo electronico</Form.Label>
                                        <Form.Control
                                        className="FormInicio"
                                            type="email"
                                            placeholder="Ingrese el correo"
                                            name="Correo"
                                            value={values.Correo}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.Correo && !errors.Correo}
                                            isInvalid={fallo ? !!errors.Correo : false}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid" tooltip>{errors.Correo}</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                <Form.Group className="position-relative" controlId="formGroupPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control
                                    className="FormInicio"
                                        type="password"
                                        placeholder="Contraseña"
                                        name="Contra"
                                        value={values.Contra}
                                        onChange={handleChange}
                                        isValid={touched.Contra && !errors.Contra}
                                        isInvalid={fallo ? !!errors.Contra : false}
                                        required
                                    />
                                      <Form.Control.Feedback type="invalid" tooltip>{errors.Contra}</Form.Control.Feedback>
                                </Form.Group>
                                <label>Olvide la contraseña</label>
                                </Row>
                                <div className="divBS">
                                    <Button className="botonS" type="submit" onClick={handleClick}>Iniciar Sesion</Button>
                                    <Button className="botonS" variant="danger" href="/">Cancelar</Button>
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
                                                {"Inicio de sesion"}
                                            </DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>
                                                   Inicio de Sesion Exitoso
                                                </DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button href="/Empresas" onClick={handleClose} autoFocus>
                                                    Aceptar
                                                </Button>
                                            </DialogActions>
                                        </Dialog>
                                    ))
                                }
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