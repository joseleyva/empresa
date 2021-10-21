import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Figure } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
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
    Nombre: yup.string().required("Ingrese su nombre"),
    Correo: yup.string().required("Ingrese sus Correo").email('Correo Invalido'),
    Contra: yup.string().max(20, 'Muy larga').min(8, 'Muy corta').required("Ingrese su contraseña"),
    ConfContra: yup.string().required("Confirme su contraseña").max(20, 'Muy larga').min(8, 'Muy corta'),
});

function CrearC() {
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
                        onSubmit={(valores, { resetForm }) => {
                            console.log()
                            setEnviado(true);
                            setValidated(true);
                        }}
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
                            values,
                            touched,
                            isValid,
                            errors,
                        }) => (
                            <Form className="FormC" validated={validated} noValidate onSubmit={handleSubmit}>
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
                                            isInvalid={fallo ? !!errors.Nombre : false}
                                            required
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
                                            type="password"
                                            name="Contra"
                                            placeholder="Contraseña"
                                            value={values.Contra}
                                            onChange={handleChange}
                                            isValid={touched.Contra && !errors.Contra}
                                            isInvalid={fallo ? !!errors.Contra : false}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid" tooltip>{errors.Contra}</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group className="position-relative" controlId="Password">
                                        <Form.Label>Confirmar Contraseña</Form.Label>
                                        <Form.Control
                                            type="password"
                                            name="ConfContra"
                                            placeholder="Confirmar Contraseña"
                                            value={values.ConfContra}
                                            onChange={handleChange}
                                            isValid={touched.ConfContra && !errors.ConfContra}
                                            isInvalid={fallo ? !!errors.ConfContra : false}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid" tooltip>{errors.ConfContra}</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <div className="divBC">
                                    <Button className="botonC" onClick={handleClick} type="submit">Registrar</Button>
                                    <Button className="botonC" variant="danger" href="/">Cancelar</Button>
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
                                                {"Regístro"}
                                            </DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>
                                                   Datos guardador correctamente
                                                </DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button href="/" onClick={handleClose} autoFocus>
                                                    Aceptar
                                                </Button>
                                            </DialogActions>
                                        </Dialog>
                                    ))
                                }

                            </Form>
                        )}
                    </Formik>


                </div>
            </div>

        </div>


    );

}

export default CrearC;