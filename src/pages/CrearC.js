import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { Form, Row, FloatingLabel, Col, Button } from "react-bootstrap";
import { useTheme } from "@mui/material/styles";
import { Formik } from "formik";
import * as yup from "yup";
import {notification} from 'antd';
import * as React from 'react';
import { getAccessTokenApi } from "../api/auth";
import { Redirect } from "react-router-dom";
import { signUpApi } from "../api/user";

const schema = yup.object().shape({
    name: yup.string().required("Ingrese su nombre"),
    email: yup.string().required("Ingrese sus Correo").email("Correo no valido"),
    password: yup
        .string()
        .required("Ingrese su contraseña")
        .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Min 8 Caracteres, 1 Mayúscula, 1 Minúscula, Un Numero y Un Carácter Especial"
        ),
    repeatPassword: yup
        .string()
        .required("Confirme su contraseña")
        .min(8, "Muy corta")
        .oneOf([yup.ref("password"), null], "Passwords must match"),
});

function CrearC() {
    const [validated, setValidated] = useState(false);
    const [fallo, setFallo] = useState(false);
    const theme = useTheme();
    const handleClick = (event) => {
        const Button = event.currentTarget;
        if (Button.checkValidity() === false) {
        }
        setFallo(true);
    };
    if (getAccessTokenApi()) {
        return <Redirect to="/Empresas" />;
      }
    return (
        <Formik
            validationSchema={schema}
            onSubmit={async (valores, { resetForm }) => {
                setValidated(true);
                const result = await signUpApi(valores);
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
                window.location.href = "/";
                  
            }
                
            }}
            initialValues={{
                name: "",
                email: "",
                password: "",
                repeatPassword: "",
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
                    <Grid container component="main" sx={{ height: "100vh" }}>
                        <CssBaseline />
                        <Grid
                            item
                            xs={false}
                            sm={4}
                            md={7}
                            sx={{
                                backgroundImage: "url(https://source.unsplash.com/random)",
                                backgroundRepeat: "no-repeat",
                                backgroundColor: (t) =>
                                    t.palette.mode === "light"
                                        ? t.palette.grey[50]
                                        : t.palette.grey[900],
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        />
                        <Grid
                            item
                            xs={12}
                            sm={8}
                            md={5}
                            component={Paper}
                            elevation={6}
                            square
                        >
                            <Box
                                sx={{
                                    my: 8,
                                    mx: 7,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "unset",
                                }}
                            >
                                <div className="InicioAli">
                                    <Avatar
                                        className="InicioAli"
                                        sx={{ m: 2, bgcolor: "secondary.main" }}
                                    >
                                        <LockOutlinedIcon />
                                    </Avatar>
                                    <Typography component="h1" variant="h5">
                                        Registro
                                    </Typography>
                                </div>
                                <Box
                                    component="form"
                                    validated={validated}
                                    noValidate
                                    onSubmit={handleSubmit}
                                    sx={{ mt: 2 }}
                                >
                                    <Row className="mb-3">
                                        <Form.Group
                                            as={Col}
                                            md="15"
                                            controlId="validationFormik01"
                                            className="position-relative"
                                        >
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Nombre Comercial"
                                            >
                                                <Form.Control
                                                    className="FormInicio"
                                                    type="text"
                                                    placeholder="Ingrese el nombre"
                                                    name="name"
                                                    value={values.name}
                                                    onChange={handleChange}
                                                    isValid={touched.name && !errors.name}
                                                    isInvalid={fallo ? !!errors.name : false}
                                                    required
                                                />
                                                <Form.Control.Feedback type="invalid" tooltip>
                                                    {errors.name}
                                                </Form.Control.Feedback>
                                            </FloatingLabel>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group
                                            as={Col}
                                            md="15"
                                            className="position-relative"
                                            controlId="formGroupEmail"
                                        >
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Correo electronico"
                                            >
                                                <Form.Control
                                                    className="FormInicio"
                                                    type="email"
                                                    name="email"
                                                    placeholder="Ingrese el correo"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    isValid={touched.email && !errors.email}
                                                    isInvalid={fallo ? !!errors.email : false}
                                                    required
                                                />
                                                <Form.Control.Feedback type="invalid" tooltip>
                                                    {errors.email}
                                                </Form.Control.Feedback>
                                            </FloatingLabel>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group
                                            as={Col}
                                            md="15"
                                            className="position-relative"
                                            controlId="formGroupPassword"
                                        >
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Contraseña"
                                            >
                                                <Form.Control
                                                    className="FormInicio"
                                                    type="password"
                                                    name="password"
                                                    placeholder="Contraseña"
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    isValid={touched.password && !errors.password}
                                                    isInvalid={fallo ? !!errors.password : false}
                                                    required
                                                />
                                                <Form.Control.Feedback type="invalid" tooltip>
                                                    {errors.password}
                                                </Form.Control.Feedback>
                                            </FloatingLabel>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group
                                            as={Col}
                                            md="15"
                                            className="position-relative"
                                            controlId="Password"
                                        >
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Confirmar Contraseña"
                                            >
                                                <Form.Control
                                                    className="FormInicio"
                                                    type="password"
                                                    name="repeatPassword"
                                                    placeholder="Confirmar Contraseña"
                                                    value={values.repeatPassword}
                                                    onChange={handleChange}
                                                    isValid={
                                                        touched.repeatPassword && !errors.repeatPassword
                                                    }
                                                    isInvalid={fallo ? !!errors.repeatPassword : false}
                                                    required
                                                />
                                                <Form.Control.Feedback type="invalid" tooltip>
                                                    {errors.repeatPassword}
                                                </Form.Control.Feedback>
                                            </FloatingLabel>
                                        </Form.Group>
                                    </Row>
                                    <div className="d-grid gap-2">
                                        <Button
                                            className="botonS"
                                            type="submit"
                                            onClick={handleClick}
                                        >
                                            Crear cuenta
                                        </Button>
                                        <Button className="botonS" variant="danger" href="/">
                                            Cancelar
                                        </Button>
                                    </div>
                                </Box>
                                
                            </Box>
                            
                        </Grid>
                       
                    </Grid>
                   
                </ThemeProvider>
            )}
        </Formik>
    );
}

export default CrearC;
