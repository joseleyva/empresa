import React, { useState, useEffect, useCallback } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import {Formik} from 'formik';
import {useDropzone} from 'react-dropzone';
import * as yup from 'yup';
import NoAvatar from "../../../../assets/img/png/logo512.png";
import {Avatar, notification} from 'antd';
import {addCompanyApi} from '../../../../api/company';
import { getAccessTokenApi } from '../../../../api/auth';
import './AddEmpresa.scss';


export default function AddEmpresa(props) {
    const {setRealoadCompany, setIsVisibleModal} = props;
    const [avatar, setAvatar]=useState(null);
    return (
        <div className='empresa'>
            <UploadAvatar avatar={avatar} setAvatar={setAvatar}/>
            <AddEmpresaForm setAvatar={setAvatar}  avatar={avatar} setIsVisibleModal={setIsVisibleModal} setRealoadCompany={setRealoadCompany}/>
        </div>
    )
}

const schema = yup.object().shape({
    title: yup.string().required("Ingrese el nombre"),
    description: yup.string().required("Ingrese una descripción")

});
function AddEmpresaForm(props) {
    const {avatar, setAvatar,setRealoadCompany, setIsVisibleModal} = props;
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
            enableReinitialize={true}
            onSubmit={ (valores, { resetForm }) => {
                addCompanyApi(token,valores, avatar ).then(result=>{
                    if(result.ok){
                        notification["success"]({
                            message: result.message,
                            placement: "bottomLeft"
                        })
                        setIsVisibleModal(false);
                        setRealoadCompany(true);
                        resetForm(true);
                        setAvatar(null);
                        setFallo(false);
                    }else{
                        notification["error"]({
                            message: result.message,
                            placement: "bottomLeft"
                        })
                    }
                }).catch(err =>{
                    notification["error"]({
                        message: err.message,
                        placement: "bottomLeft"
                    })
                })
            }}
            initialValues={{
                title: "",
                description: "",
            }
            }
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                isInvalid,
                errors,
            }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" className="position-relative">
                            <Form.Label>Nombre de la empresa</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={values.title}
                                onChange={handleChange}
                                isValid={touched.title && !errors.title}
                                isInvalid={fallo ? !!errors.title : false}
                                required
                            />
                            <Form.Control.Feedback type="invalid" tooltip>{errors.title}</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} md="10" className="position-relative">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                            style={{resize: "none", height: 125}}
                            className="TextP"
                            type="text"
                            name='description'
                            as="textarea"
                            value={values.description}
                            onChange={handleChange}
                            isValid={touched.description && !errors.description}
                            isInvalid={fallo ? !!errors.description : false}
                            required
                            />
                            <Form.Control.Feedback type='invalid' tooltip>{errors.description}</Form.Control.Feedback>
                        </Form.Group>

                    </Row>
                    <Row className='mb-3 d-grid gap-2'>
                        <Button onClick={handleClick} type="submit">Crear</Button>
                    </Row>
                </Form>
            )}
        </Formik>
    );
}

function UploadAvatar(props){
    const {avatar, setAvatar}=props;
    const [avatarUrl, setAvatarUrl]= useState(null);
    useEffect(()=>{
      if(avatar){
        if(avatar.preview){
          setAvatarUrl(avatar.preview);
        }else{
          setAvatarUrl(avatar);
        }
      }else{
        setAvatarUrl(null);
      }
    }, [avatar]);
    const onDrop= useCallback(
        acceptedFile=>{
            const file = acceptedFile[0];
            setAvatar({file, preview: URL.createObjectURL(file)});
        },
        [setAvatar]
    );

    const {getRootProps, getInputProps, isDragActive}= useDropzone({
        accept: "image/jpeg, image/png",
        noKeyboard:true,
        onDrop
    });

    return (
        <div className="upload-avatar" {...getRootProps()}>
            <input {...getInputProps()}/>
            {isDragActive? (
                <Avatar size={150} src={NoAvatar}/>
            ):(
                <Avatar size={150} src={avatarUrl ? avatarUrl : NoAvatar}/>
            )}
        </div>
    );
}