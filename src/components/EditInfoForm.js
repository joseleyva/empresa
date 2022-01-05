import React,{useState,useEffect, useCallback} from 'react';
import {Avatar, notification} from 'antd';
import {useDropzone} from 'react-dropzone';
import { Form, Col, Button, Row, InputGroup } from 'react-bootstrap';
import NoAvatar from "../assets/img/png/logo512.png"
import {UserOutlined} from '@ant-design/icons';
import {getAvatarApi, updateUserApi, uploadAvatarApi} from '../api/user';
import {getAccessTokenApi} from "../api/auth" 


export default function EditInfoForm(props){
   const {user, setIsVisibleModal ,setReloadUsers} = props;
   const [avatar, setAvatar]=useState(null);
   const [userData, setUserData]= useState({});
  
   useEffect(()=>{
      setUserData({
        name: user.name,
        lastnameP: user.lastnameP,
        lastnameM: user.lastnameM,
        RFC: user.RFC,
        RSocial: user.RSocial,
        estado: user.estado,
        houseNumber: user.houseNumber,
        nameUser: user.nameUser,
        numberEm: user.numberEm,
        numberphone: user.numberphone,
        street: user.street,
        suburb: user.suburb,
        municipality: user.municipality,
        business: user.business,
        schedule: user.schedule,
        job: user.job,
        zip: user.zip,
        email: user.email,
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
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [avatar]);
   
   const updateUser= e=>{
       e.preventDefault();
      const token= getAccessTokenApi();
      let userUpdate=userData;
      
      if(!userUpdate.nameUser || !userUpdate.lastnameP || !userUpdate.email || !userUpdate.lastnameM || !userUpdate.name){
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
            window.location.reload();
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
            <h4>Datos de Contacto</h4>
            </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormik01" className="position-relative">
              <Form.Label>Nombre(s)</Form.Label>
              <Form.Control
              prefix={<UserOutlined/>}
                type="text"
                name="nameUser"
                placeholder="Nombre(s)"
                value={userData.nameUser}
                onChange={e=> setUserData({
                    ...userData, nameUser: e.target.value
                })}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02" className="position-relative">
              <Form.Label>Apellido Paterno</Form.Label>
              <Form.Control
                type="text"
                name="ApellidosP"
                placeholder="Apellidos"
                value={userData.lastnameP}
                onChange={e=> setUserData({
                    ...userData, lastnameP: e.target.value
                })}
                required
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02" className="position-relative">
              <Form.Label>Apellido Materno</Form.Label>
              <Form.Control
                type="text"
                name="ApellidosM"
                placeholder="Apellidos"
                value={userData.lastnameM}
                onChange={e=> setUserData({
                    ...userData, lastnameM: e.target.value
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
                  type="email"
                  placeholder="Correo"
                  value={userData.email}
                  onChange={e=> setUserData({
                      ...userData, email: e.target.value
                  })}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="5" controlId="validationFormikUsername" className="position-relative">
              <Form.Label>Numero de telefono</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Numero de telefono"
                  value={userData.numberphone}
                  onChange={e=> setUserData({
                      ...userData, numberphone: e.target.value
                  })}
                />
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
          <Form.Group as={Col} md="5" controlId="validationFormikUsername" className="position-relative">
              <Form.Label>Puesto del encargado</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Puesto del encargado"
                  value={userData.job}
                  onChange={e=> setUserData({
                      ...userData, job: e.target.value
                  })}
                />
              </InputGroup>
            </Form.Group>
          </Row>
          <Row>
              <h4>Datos de la Empresa</h4>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="5" controlId="validationFormik01" className="position-relative">
              <Form.Label>Nombre de la empresa</Form.Label>
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
              <Form.Label>Giro Empresarial</Form.Label>
              <Form.Control
                type="text"
                name="business"
                placeholder="Giro empresarial"
                value={userData.business}
                onChange={e=> setUserData({
                    ...userData, business: e.target.value
                })}
                required
              />
            </Form.Group>
            </Row>
          <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationFormikUsername" className="position-relative">
              <Form.Label>RFC</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="RFC"
                  value={userData.RFC}
                  onChange={e=> setUserData({
                      ...userData, RFC: e.target.value
                  })}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik04" className="position-relative">
              <Form.Label>Razon Social</Form.Label>
              <Form.Control
                type="text"
               value={userData.RSocial}
                placeholder="Razon social"
                onChange={e=>setUserData({...userData, RSocial: e.target.value})}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik04" className="position-relative">
              <Form.Label>Horario de atencion</Form.Label>
              <Form.Control
                type="text"
               value={userData.schedule}
                placeholder="Horario"
                onChange={e=>setUserData({...userData, schedule: e.target.value})}
              />
            </Form.Group>

          </Row>

          <Row className="mb-3">

          <Form.Group as={Col} md="4" controlId="validationFormikUsername" className="position-relative">
              <Form.Label>Calle</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Calle"
                  value={userData.street}
                  onChange={e=> setUserData({
                      ...userData, street: e.target.value
                  })}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername" className="position-relative">
              <Form.Label>Numero</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Numero de casa"
                  value={userData.houseNumber}
                  onChange={e=> setUserData({
                      ...userData, houseNumber: e.target.value
                  })}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername" className="position-relative">
              <Form.Label>Colonia</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Colonia"
                  value={userData.suburb}
                  onChange={e=> setUserData({
                      ...userData, suburb: e.target.value
                  })}
                />
              </InputGroup>
            </Form.Group>

          </Row>
          <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationFormikUsername" className="position-relative">
              <Form.Label>Codigo Postal</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Codigo postal"
                  value={userData.zip}
                  onChange={e=> setUserData({
                      ...userData, zip: e.target.value
                  })}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik03" className="position-relative">
            <Form.Label> Estado</Form.Label>
              <Form.Control
                type="text"
                value={userData.estado}
                placeholder="Estado"
                onChange={e=>setUserData({...userData, estado: e.target.value})}
              />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormik02" className="position-relative">
              <Form.Label>Municipio</Form.Label>
              <Form.Control
                type="text"
                name="municipality"
                placeholder="Municipio"
                value={userData.municipality}
                onChange={e=> setUserData({
                    ...userData, municipality: e.target.value
                })}
                required
              />
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