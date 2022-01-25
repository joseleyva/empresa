import React, {useState, useEffect} from "react";
import { Row, Col, Image } from 'react-bootstrap';
import { Button, Container } from 'react-bootstrap';
import FormReferencias from "./FormReferencias";
import {getAvatarApi} from '../api/user';
import Modal from "./Modal";
import { notification, Modal as ModalAntd } from 'antd';
import Perfil from '../assets/img/jpg/Usuario.jpg';
import {getAccessTokenApi} from '../api/auth';
const { confirm } = ModalAntd;


function CardsReferencias(props) {
    const { post } = props;
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
          setModalContent(<FormReferencias userRef={user} avatar={avatar} setIsVisibleModal={setIsVisibleModal}/>);
      }

      const showDeleteConfirm = () => {
        const AccessToken = getAccessTokenApi();
    
        confirm({
          title: "Eliminar Referencia",
          content: `¿Estas seguro que quieres eliminar a ${post.nameUser}?`,
          okText: "Eliminar",
          okType: "danger",
          cancelText: "Cancelar",
          onOk() {
            
          }
        })
      }

    return (

        <Container className="ContenedorRef">
            <Row>
                <Col xs={2} md={1}>
                    <Image src={avatar ? avatar : Perfil} className="mt-3" roundedCircle width="100px" height="100px" />
                </Col>
            </Row>
            <div>
                <div class="col-md-10">
                    <div class="card-body">
                        <h6 align="left">El Candidato {`${post.nameUser} ${post.lastnameP} ${post.lastnameM}`} ha mencionado haber trabajado con la empresa a la que representas</h6>
                        <div className="DivRef">
                            <label>¿Trabajó en la empresa?</label>
                            <div className="BtnsRef">
                                <Button variant="primary" onClick={() => darReferencia(post)} className="botonRef" >Si</Button>
                                <Button variant="danger" onClick={()=> showDeleteConfirm(post)} className="botonRef" >No</Button>
                            </div>
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