import React from 'react';
import { useState } from "react";
import Box from "@mui/material/Box";
import { Form, Row, FloatingLabel, Col, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { notification } from "antd";
import { CreateProductApi } from '../../../../api/products';
import { getAccessTokenApi } from '../../../../api/auth';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    '10 users included',
    '2 GB of storage',
    'Help center access',
    'Email support',
    '20 users included',
    '10 GB of storage',
    'Help center access',
    'Priority email support',
    '50 users included',
    '30 GB of storage',
    'Help center access',
    'Phone & email support',
];
function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


const schema = yup.object().shape({
    title: yup.string().required("Ingrese el titulo").min(3, 'muy corto'),
    price: yup.string().required("Ingrese el precio"),
    buttonText: yup.string().required("seleccione una opción"),
    buttonVariant: yup.string().required("Selecione una opción"),
});


export default function AddProduct(props) {
    const { setReloadProducts, setIsVisibleModal } = props;
    return (
        <div className="add-user-form">
            <AddForm setIsVisibleModal={setIsVisibleModal} setReloadProducts={setReloadProducts} />
        </div>
    );
}


function AddForm(props) {
    const { setIsVisibleModal, setReloadProducts } = props;
    const [validated, setValidated] = useState(false);
    const [fallo, setFallo] = useState(false);
    const token = getAccessTokenApi();
    const handleClick = (event) => {
        const Button = event.currentTarget;
        if (Button.checkValidity() === false) {
        }
        setFallo(true);
    };
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    const handleChange2 = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    return (
        <Formik
            validationSchema={schema}
            onSubmit={(valores, { resetForm }) => {
                valores.description = personName;
                setValidated(true);
                CreateProductApi(token, valores).then(result => {
                    console.log(result)
                    if (result.ok) {
                        notification["success"]({
                            message: result.message,
                            placement: "bottomLeft",
                        });
                        setFallo(false);
                        setIsVisibleModal(false);
                        setReloadProducts(true);
                        setPersonName([]);
                        resetForm();
                    } else {
                        notification["error"]({
                            message: result.message,
                            placement: "bottomLeft",
                        });
                    }

                }).catch(err => {
                    notification["error"]({
                        message: err,
                        placement: "bottomLeft",
                    });
                })

            }}
            initialValues={{
                description: "",
                title: "",
                price: "",
                buttonText: "",
                buttonVariant: '',
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
                        <Form.Group as={Col} md="10" controlId="validationFormik01" className="position-relative">
                            <FloatingLabel controlId="floatingInput" label="Titulo ">
                                <Form.Control
                                    className="FormInicio"
                                    type="text"
                                    placeholder="Titutlo"
                                    name="title"
                                    value={values.title}
                                    onChange={handleChange}
                                    isValid={touched.title && !errors.title}
                                    isInvalid={fallo ? !!errors.title : false}
                                    required
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.title}</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="15" className="position-relative">
                            <FloatingLabel controlId="floatingInput" label="Precio">
                                <Form.Control
                                    className="FormInicio"
                                    type="number"
                                    name="price"
                                    value={values.price}
                                    onChange={handleChange}
                                    isValid={touched.price && !errors.price}
                                    isInvalid={fallo ? !!errors.price : false}
                                    required
                                />
                                <Form.Control.Feedback type="invalid" tooltip>
                                    {errors.price}
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">

                        <FormControl sx={{ marginLeft: 1.5, width: 450 }}>
                            <InputLabel id="demo-multiple-name-label">Seleccione...</InputLabel>
                            <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                multiple
                                value={personName}
                                onChange={handleChange2}
                                input={<OutlinedInput label="Seleccione.." />}
                                required
                                MenuProps={MenuProps}
                            >
                                {names.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, personName, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="15" className="position-relative">
                            <FloatingLabel controlId="floatingInput" label="Texto del botón">
                                <Form.Control
                                    className="FormInicio"
                                    type="text"
                                    name="buttonText"
                                    value={values.buttonText}
                                    onChange={handleChange}
                                    isValid={touched.buttonText && !errors.buttonText}
                                    isInvalid={fallo ? !!errors.buttonText : false}
                                    required
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.buttonText}</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" className="position-relative">
                            <FloatingLabel controlId="floatingInput" label="Seleccione...">
                                <Form.Select
                                    type="select"
                                    name="buttonVariant"
                                    onChange={handleChange}
                                    value={values.buttonVariant}
                                    isValid={touched.buttonVariant && !errors.buttonVariant}
                                    isInvalid={fallo ? !!errors.buttonVariant : false}
                                    required
                                >
                                    <option value=""> Seleccione</option>
                                    <option value="outlined">Outlined</option>
                                    <option value="contained"> Contained</option>
                                </Form.Select>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid" tooltip>{errors.buttonVariant}</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <div className="d-grid gap-2">
                        <Button className="botonS" type="submit" onClick={handleClick}>
                            Crear Producto
                        </Button>
                    </div>
                </Box>
            )}
        </Formik>
    );
}
