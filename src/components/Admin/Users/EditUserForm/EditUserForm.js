import React,{useState,useEffect, useCallback} from 'react';
import {Avatar, notification} from 'antd';
import {useDropzone} from 'react-dropzone';
import { Form, Col, Button, Row, InputGroup } from 'react-bootstrap';
import NoAvatar from "../../../../assets/img/png/logo512.png"
import {UserOutlined} from '@ant-design/icons';
import {getAvatarApi, updateUserApi, uploadAvatarApi} from '../../../../api/user';
import {getAccessTokenApi} from "../../../../api/auth" 

import "./EditUserForm.scss";
export default function EditUserForm(props){
   const {user, setIsVisibleModal, setReloadUsers} = props;
   const [avatar, setAvatar]=useState(null);
   const [userData, setUserData]= useState({});
  
   useEffect(()=>{
      setUserData({
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        role: user.role,
        active: user.active,
        avatar: user.avatar,
      });
      
   }, [user]);


   useEffect(()=>{
     if(user.avatar){
      getAvatarApi(user.avatar).then(response=>{
        setAvatar(response);
      })
     }else{
       setAvatar(null);
     }
   }, [user])
   useEffect(()=>{
    if(avatar){
      setUserData({...userData, avatar: avatar.file});
    }
   // eslint-disable-next-line no-use-before-define
   }, [avatar]);
   
   const updateUser= e=>{
       e.preventDefault();
      const token= getAccessTokenApi();
      let userUpdate=userData;
      if(userUpdate.password || userUpdate.repeatPassword){
        if(userUpdate.password !== userUpdate.repeatPassword){
          notification["error"]({
            message: "las contraseñas no son iguales",
            placement: 'bottomLeft',
          });
         
        }else{
          
          delete userUpdate.repeatPassword;
        }

      }
      if(!userUpdate.name || !userUpdate.lastname || !userUpdate.email){
        notification["error"]({
          message: "El nombre, apellidos y email son obligatorios",
          placement: 'bottomLeft',
        })
        return;
      }
      if(typeof userUpdate.avatar === "object"){
        uploadAvatarApi(token, userUpdate.avatar, user._id).then(response=>{
          userUpdate.avatar=response.avatarName;
          updateUserApi(token, userUpdate, user._id).then(result=>{
            notification["success"]({
              message: result.message,
              placement: 'bottomLeft',
            });
            setIsVisibleModal(false);
            setReloadUsers(true);
            setUserData({...userData, password:"", repeatPassword:""});
          });
        });
      }else{
        updateUserApi(token, userUpdate, user._id).then(result=>{
          notification["success"]({
            message: result.message,
            placement: 'bottomLeft',
          });
          setIsVisibleModal(false);
          setReloadUsers(true);
          setUserData({...userData, password:"", repeatPassword:""});
        });
      }
   };
    
    return(
        <div className="edit-user-form">
        <UploadAvatar avatar={avatar} setAvatar={setAvatar}/>
        <EditForm userData={userData} setUserData={setUserData} updateUser={updateUser}/>
        </div>
    )
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

function EditForm(props){
    const { userData, setUserData, updateUser}=props;
   
    return(
        <Form className="form-edit" onSubmit={updateUser}>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
              <Form.Label>Nombre(s)</Form.Label>
              <Form.Control
              prefix={<UserOutlined/>}
                type="text"
                name="Nombre"
                placeholder="Nombre(s)"
                value={userData.name}
                onChange={e=> setUserData({
                    ...userData, name: e.target.value
                })}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02" className="position-relative">
              <Form.Label>Apellido Materno</Form.Label>
              <Form.Control
                type="text"
                name="Apellidos"
                placeholder="Apellidos"
                value={userData.lastname}
                onChange={e=> setUserData({
                    ...userData, lastname: e.target.value
                })}
                required
              />
            </Form.Group>

          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormikUsername" className="position-relative">
              <Form.Label>Correo</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Correo"
                  value={userData.email}
                  onChange={e=> setUserData({
                      ...userData, email: e.target.value
                  })}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik04" className="position-relative">
            <Form.Label>Roles</Form.Label>
            <Form.Select
                  type="select"
                 placeholder="Seleccióna un rol"
                 onChange={e=> setUserData({...userData, role: e.target.value})}
                 value={userData.role}
                >
                  <option value="admin">Administrador</option>
                  <option value="editor"> Editor</option>
                  <option value="review">Revisor</option>
                </Form.Select>
              </Form.Group>
          </Row>
          <Row className="mb-3">
         
            <Form.Group as={Col} md="6" controlId="validationFormik04" className="position-relative">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
               value={userData.password}
                placeholder="Contraseña"
                onChange={e=>setUserData({...userData, password: e.target.value})}
              />
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik03" className="position-relative">
            <Form.Label> Repetir Contraseña</Form.Label>
              <Form.Control
                type="password"
                value={userData.repeatPassword}
                placeholder="Repetir Contraseña"
                onChange={e=>setUserData({...userData, repeatPassword: e.target.value})}
              />
              </Form.Group>
          </Row>

          <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationFormik04" className="position-relative">
            <Form.Label>Activar</Form.Label>
            <Form.Select
                  type="select"
                 placeholder="Seleccióna una opcion"
                 onChange={e=> setUserData({...userData, active: e.target.value})}
                 value={userData.active}
                >
                  <option value="true">Activo</option>
                  <option value="false">Inactivo</option>
                </Form.Select>
              </Form.Group>
          </Row>
          <Row>
          <Form.Group as={Col} md="10">
              <Button variant="primary" className="form-edit__boton" type="submit">Actualizar datos</Button>
            </Form.Group>
        </Row>
        </Form>

    )

}