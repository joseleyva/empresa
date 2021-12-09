import { useState } from "react";
import Box from "@mui/material/Box";
import { Form, Row, FloatingLabel, Col, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { notification } from "antd";
import * as React from "react";
import { signUpAdminApi } from "../../../../api/user";
import { getAccessTokenApi } from "../../../../api/auth";
import "./AddUserForm.scss";

const schema = yup.object().shape({
  name: yup.string().required("Ingrese su nombre").min(3, 'muy corto'),
  lastname: yup.string().required("Ingrese sus apellidos").min(4, "muy corto"),
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
    role: yup.string().required("Selecione una opción"),
});

export default function AddUserForm(props) {
  const { setIsVisibleModal, setReloadUsers } = props;

  return (
    <div className="add-user-form">
      <AddForm setIsVisibleModal={setIsVisibleModal} setReloadUsers={setReloadUsers}/>
    </div>
  );
}

function AddForm(props) {
    const {setIsVisibleModal, setReloadUsers} = props;
  const [validated, setValidated] = useState(false);
  const [fallo, setFallo] = useState(false);
  const token = getAccessTokenApi();
  const handleClick = (event) => {
    const Button = event.currentTarget;
    if (Button.checkValidity() === false) {
    }
    setFallo(true);
  };
  return (
    <Formik
      validationSchema={schema}
      onSubmit={ (valores, { resetForm }) => {
        setValidated(true);
        signUpAdminApi(token, valores).then(response=>{
            notification["success"]({
                message: response,
                placement: "bottomLeft",
              });
              setFallo(false);
              setIsVisibleModal(false);
              setReloadUsers(true);
              resetForm();
              
        }).catch(err=>{
            notification["error"]({
                message: err,
                placement: "bottomLeft",
              });
        })
      }}
      initialValues={{
        name: "",
        lastname:"",
        email: "",
        password: "",
        repeatPassword: "",
        role: '',
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
              md="6"
              controlId="validationFormik01"
              className="position-relative"
            >
              <FloatingLabel controlId="floatingInput" label="Nombre ">
                <Form.Control
                  className="FormInicio"
                  type="text"
                  placeholder="nombre"
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
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik01"
              className="position-relative"
            >
              <FloatingLabel controlId="floatingInput" label="Apellidos ">
                <Form.Control
                  className="FormInicio"
                  type="text"
                  placeholder="Apellidos"
                  name="lastname"
                  value={values.lastname}
                  onChange={handleChange}
                  isValid={touched.lastname && !errors.lastname}
                  isInvalid={fallo ? !!errors.lastname : false}
                  required
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.lastname}
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
              <FloatingLabel controlId="floatingInput" label="Contraseña">
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
                  isValid={touched.repeatPassword && !errors.repeatPassword}
                  isInvalid={fallo ? !!errors.repeatPassword : false}
                  required
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.repeatPassword}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik04"
              className="position-relative"
            >
              <FloatingLabel
                controlId="floatingInput"
                label="Seleccione un rol"
              >
              <Form.Select
                type="select"
                name="role"
                placeholder="Seleccióna un rol"
                onChange={handleChange}
                value={values.role}
                isValid={touched.role && !errors.role}
                isInvalid={fallo ? !!errors.role : false}
                required
              >
                  <option value=""> Seleccione</option>
                <option value="admin">Administrador</option>
                <option value="editor"> Editor</option>
                <option value="review">Revisor</option>
              </Form.Select>
              </FloatingLabel>
              <Form.Control.Feedback type="invalid" tooltip>
                  {errors.role}
                </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <div className="d-grid gap-2">
            <Button className="botonS" type="submit" onClick={handleClick}>
              Crear cuenta
            </Button>
          </div>
        </Box>
      )}
    </Formik>
  );
}
