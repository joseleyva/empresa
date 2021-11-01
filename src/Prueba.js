import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { Form, Row, FloatingLabel, Col, Button } from 'react-bootstrap';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Formik } from 'formik';
import * as yup from 'yup';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const schema = yup.object().shape({
    Nombre: yup.string().required("Ingrese su nombre"),
    Correo: yup.string().required("Ingrese sus Correo").email('Correo Invalido'),
    Contra: yup.string().max(20, 'Muy larga').min(8, 'Muy corta').required("Ingrese su contraseña"),
    ConfContra: yup.string().required("Confirme su contraseña").max(20, 'Muy larga').min(8, 'Muy corta'),
});


export default function Prueba() {
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
                handleBlur,
                values,
                touched,
                isValid,
                errors,
            }) => (
                <ThemeProvider theme={theme}>
                    <Grid container component="main" sx={{ height: '100vh' }}>
                        <CssBaseline />
                        <Grid
                            item
                            xs={false}
                            sm={4}
                            md={7}
                            sx={{
                                backgroundImage: 'url(https://source.unsplash.com/random)',
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: (t) =>
                                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                            <Box
                                sx={{
                                    my: 8,
                                    mx: 7,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'unset',
                                }}
                            >
                                <div className="InicioAli">
                                    <Avatar className="InicioAli" sx={{ m: 2, bgcolor: 'secondary.main' }}>
                                        <LockOutlinedIcon />
                                    </Avatar>
                                    <Typography component="h1" variant="h5">
                                        Registro
                                    </Typography>
                                </div>
                                <Box component="form" validated={validated} noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="15" controlId="validationFormik01" className="position-relative">
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Nombre Comercial"
                                                
                                            >
                                            <Form.Control
                                            className="FormInicio"
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
                                            </FloatingLabel>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="15" className="position-relative" controlId="formGroupEmail">
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Correo electronico"
                                                
                                            >
                                            <Form.Control
                                            className="FormInicio"
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
                                            </FloatingLabel>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="15" className="position-relative" controlId="formGroupPassword">
        
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Contraseña"
                                                
                                            >
                                            <Form.Control
                                            className="FormInicio"
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
                                            </FloatingLabel>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="15" className="position-relative" controlId="Password">
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Confirmar Contraseña"
                                                
                                            >
                                            <Form.Control
                                            className="FormInicio"
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
                                            </FloatingLabel>
                                        </Form.Group>
                                    </Row>
                                    <div className="d-grid gap-2">
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
                                                    {"Crear Cuenta"}
                                                </DialogTitle>
                                                <DialogContent>
                                                    <DialogContentText>
                                                        Cuenta Creada Correctamente
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
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            )}
        </Formik>
    );
}