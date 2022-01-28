import React, {useState, useEffect} from "react";
import { Row, Col, Image } from 'react-bootstrap';
import { Button, Container } from 'react-bootstrap';
import FormReferencias from "./FormReferencias";
import {getAvatarApi} from '../api/user';
import Modal from "./Modal";
import {notification,  Modal as ModalAntd } from 'antd';
import Perfil from '../assets/img/jpg/Usuario.jpg';
import {CreateReferenceApi} from '../api/reference';
import {updateInfoReferenceApi} from '../api/reqReference';
import {getAccessTokenApi} from '../api/auth';
const { confirm } = ModalAntd;


function CardsReferencias(props) {
    const { post , setReloadUsers, id} = props;
    const [avatar, setAvatar] = useState(null);
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [width, setWidth] = useState(500);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState("");
   
    useEffect(() => {
        if (post.avatar) {
          getAvatarApi(post.avatar).then((response) => {
            setAvatar(response);
          });
        } else {
          setAvatar(null);
        }
      }, [post]);

    const darReferencia = user =>{
        setWidth(1000);
          setIsVisibleModal(true);
          setModalTitle(`Referencias de ${user.nameUser}`);
          setModalContent(<FormReferencias userRef={user} avatar={avatar} setReloadUsers={setReloadUsers} setIsVisibleModal={setIsVisibleModal}/>);
      }

      const showDeleteConfirm = () => {
    const token = getAccessTokenApi();
        confirm({
          title: "Rechazar Referencia",
          content: `¿Estas seguro que ${post.nameUser} no fue su colaborador?`,
          okText: "Si",
          okType: "danger",
          cancelText: "No",
          onOk() {
            const data= {
              nameEm: post.nameEm,
              nameEmS: post.nameEmS,
              nameUser: post.nameUser,
              lastnameP: post.lastnameP,
              lastnameM: post.lastnameM,
              email: post.email,
              avatar: post.avatar,
              toWork: false
            }
            CreateReferenceApi(token, data).then(result=>{
              if(result.ok){
                  notification["success"]({
                      message: result.message,
                      placement: "bottomLeft"
                  })
                  
                  const send ={
                      send: true,
                      toWork: false
                  }
                  updateInfoReferenceApi(token,send ,post._id).then(result=>{
                      notification["success"]({
                          message: result.message,
                          placement: "bottomLeft"
                      })
                  
                  }).catch(err =>{
                      notification["error"]({
                          message: err.message,
                          placement: "bottomLeft"
                      })
                  })
               
                  setReloadUsers(true);
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
          }
        })
      }

    return (

        <Container className="ContenedorRef" key={id}>
            <Row>
                <Col xs={2} md={1}>
                    <Image src={avatar ? avatar : Perfil} className="mt-3" roundedCircle width="100px" height="100px" />
                </Col>
            </Row>
            <div>
                <div className="col-md-10">
                    <div className="card-body">
                        <h6 align="left">El Candidato {`${post.nameUser} ${post.lastnameP} ${post.lastnameM}`} ha mencionado haber trabajado con la empresa a la que representas</h6>
                        <div className="DivRef">
                        {post.send ? <h5>Referencia enviada </h5>
                              :
                              (<>
                              <label>¿Trabajó en la empresa?</label>
                            <div className="BtnsRef">
                              <Button variant="primary" onClick={() => darReferencia(post)} className="botonRef" >Si</Button> 
                              <Button variant="danger" onClick={()=> showDeleteConfirm(post)} className="botonRef" >No</Button>
                              </div>
                              </>)}
                                
                           
                        </div>
                    </div>

                </div>


            </div>
            <Modal
                width={width}
                title={modalTitle}
                isVisible={isVisibleModal}
                setIsVisible={setIsVisibleModal}
            >
                {modalContent}
            </Modal>

        </Container>


    );



}

export default CardsReferencias;