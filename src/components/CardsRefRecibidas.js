/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Row, Col, Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import perfil from '../assets/img/jpg/Usuario.jpg'
import { getAvatarApi } from '../api/user';
import InfoUser from './Web/InfoUser';
import Modal from '../components/Modal';

function CardsRefRecibidas(props) {
    const { post,setReloadReference, id} = props;
    const [avatar, setAvatar] = useState(null);
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [width, setWidth] = useState(500);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState("");
    useEffect(() => {
        getAvatarApi(post.avatar).then(response => {
            setAvatar(response);
        })
    }, [avatar])

    const Info = user =>{
        setWidth(600);
          setIsVisibleModal(true);
          setModalTitle(`Información de ${user.nameUser} ${user.lastnameP} ${user.lastnameM}`);
          setModalContent(<InfoUser user={user} setReloadReference={setReloadReference}  setIsVisibleModal={setIsVisibleModal}/>);
      }
    return (

        <div className="ContenedorRefRec" key={id}>
            <Row className="m-1">
                <Col xs={2} md={1}>
                    <Image src={avatar ? avatar : perfil} roundedCircle width="110px" height="118px" />
                </Col>
            </Row>
            <div>
                <div className="col-md-10">
                    <div className="card-body">
                        <h6 align="left">Nombre del Candidato: </h6>
                        <h5 align="left">{`${post.nameUser} ${post.lastnameP} ${post.lastnameM}`}</h5>
                        <Button variant="outline-primary" onClick={()=> Info(post)} className="BtnRefRec">Ver</Button>
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
        </div>



    );



}
export default CardsRefRecibidas;