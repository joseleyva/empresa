import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { Form, Row, FloatingLabel,Col,Button } from 'react-bootstrap';
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
    Correo: yup.string().required("Ingrese el correo").email("Correo no valido"),
    Contra: yup.string().required("Ingrese la contraseña"),
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
                                    <LockOutlinedIcon   />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    Inicio de Sesion
                                </Typography>
                                </div>
                                <Box component="form" validated={validated} noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
                                    <Row className="mb-4">
                                        <Form.Group as={Col} md="15" controlId="formGroupEmail" className="position-relative">
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Correo electronico"
                                                
                                            >
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
                                            </FloatingLabel>
                                            
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group className="position-relative" controlId="formGroupPassword">
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Contraseña"
                                               
                                            >
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
                                            </FloatingLabel>
                                            
                                        </Form.Group>
                                    </Row>
                                    <div className="d-grid gap-2">
                                    <Button className="botonS" type="submit" onClick={handleClick}>Iniciar Sesion</Button>
                                    <Button className="botonS" variant="danger" href="/">Cancelar</Button>
                                </div>
                                    <Grid container className="MargenL">
                                        <Grid item xs>
                                            <Link  variant="body3" >
                                                Olvide la Contraseña
                                            </Link>
                                        </Grid>
                                        <Grid item>
                                            <Link href="/CrearC" variant="body3" className="labelI">
                                                {"¿No tienes una cuenta? Crea una aquí"}
                                            </Link>
                                        </Grid>
                                    </Grid>
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
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            )}
        </Formik>
    );
}

export default InicioS;