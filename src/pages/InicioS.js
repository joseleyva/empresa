import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
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
import { notification } from "antd";
import { signInApi , googleSignInApi} from "../api/user";
import { getAccessTokenApi } from "../api/auth";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../utils/constants";
import { Redirect } from "react-router-dom";
import GoogleLogin from "react-google-login";
import '../App.css';
  
const schema = yup.object().shape({
  email: yup.string().required("Ingrese el correo").email("Correo no valido"),
  password: yup.string().required("Ingrese la contraseña"),
});

function InicioS() {
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

  const handleLogin =  (googleData)=>{
    googleSignInApi(googleData).then(result=>{
      if(result.ok){
        const { accessToken, refreshToken } = result.result;
        localStorage.setItem(ACCESS_TOKEN, accessToken);
        localStorage.setItem(REFRESH_TOKEN, refreshToken);
        notification["success"]({
          message: "login Correcto",
          placement: "bottomLeft"
        })
        window.location.href = "/DatosR/DatosR"
      }else{
        notification["error"]({
          message: result.message,
          placement: "bottomLeft"
        })
      }
     
    }).catch(err=>{
       notification["error"]({
          message: err.message,
          placement: "bottomLeft"
        })
      
    })
  }
  return (
    <Formik
    
      validationSchema={schema}
      onSubmit={async (valores, { resetForm }) => {
        setValidated(true);
        const result = await signInApi(valores);
        if (result.message) {
          notification["error"]({
            message: result.message,
            placement: 'bottomLeft',
          });
        } else {
          const { accessToken, refreshToken } = result;
          localStorage.setItem(ACCESS_TOKEN, accessToken);
          localStorage.setItem(REFRESH_TOKEN, refreshToken);
          notification["success"]({
            message: "Login correcto",
            placement: 'bottomLeft',
          });

          window.location.href = "/DatosR/DatosR"

        }
      }}
      initialValues={{
        email: "",
        password: "",
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
                    Inicio de Sesion
                  </Typography>
                </div>
                <Box
                  component="form"
                  validated={validated}
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 2 }}
                >
                  <Row className="mb-4">
                    <Form.Group
                      as={Col}
                      md="15"
                      controlId="formGroupEmail"
                      className="position-relative"
                    >
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Correo electronico"
                      >
                        <Form.Control
                          type="email"
                          placeholder="Ingrese el correo"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
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
                      className="position-relative"
                      controlId="formGroupPassword"
                    >
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Contraseña"
                      >
                        <Form.Control
                          type="password"
                          placeholder="Contraseña"
                          name="password"
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
                  <Row className="mb-3 d-grid gap-2">
                  <Form.Group
                      as={Col}
                      md="10"
                    >
                    <GoogleLogin
                      className="buttonGoogle"
                      buttonText="Log in with Google"
                      clientId="564024155592-3ss6jku6up1ahup0furr44p3omqsh0p2.apps.googleusercontent.com"
                      onSuccess={handleLogin}
                      onFailure={handleLogin}
                      cookiePolicy={'single_host_origin'}
                      icon={true}
                    />
                    </Form.Group>
                  </Row>
                  <div className="d-grid gap-2">
                    <Button
                      className="botonS"
                      type="submit"
                      onClick={handleClick}
                    >
                      Iniciar Sesion
                    </Button>
                    <Button className="botonS" variant="danger" href="/">
                      Cancelar
                    </Button>
                  </div>
                  <Grid container className="MargenL">
                    <Grid item xs>
                      <Link variant="body3">Olvide la Contraseña</Link>
                    </Grid>
                    <Grid item>
                      <Link href="/CrearC" variant="body3" className="labelI">
                        {"¿No tienes una cuenta? Crea una aquí"}
                      </Link>
                    </Grid>
                  </Grid>
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
