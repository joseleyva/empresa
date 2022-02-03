import React, { useState, useEffect } from "react";
import { Row, Col, Image } from 'react-bootstrap';
import { Form, Button, Container } from 'react-bootstrap';
import { getAvatarApi } from "../api/user";
import InfoCandidate from "./Web/InfoCandidate/InfoCandidate";
import Imagen from '../assets/img/jpg/imagen1.jpg';
import Modal from './Modal';

function Cartas(props) {
    const { id, post } = props;
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
    const infoCandidato = candidato => {
        setWidth(600);
        setIsVisibleModal(true);
        setModalTitle(`Información de ${candidato.nameUser} ${candidato.lastnameP} ${candidato.lastnameM}`);
        setModalContent(<InfoCandidate candidato={candidato} avatar={avatar} setIsVisibleModal={setIsVisibleModal} />);

    }
    return (
        <>

            <Container className="ContenedorV">
                <Row className="IconCartas" key={id}>
                    <Col xs={2} md={1}>
                        <Image src={avatar ? avatar : Imagen} roundedCircle width="150px" height="150px" />
                    </Col>
                </Row>
                <div className="C">
                    <div className="col-md-10">
                        <div className="card-body">
                            <div>
                                <h5 align="left" className="card-title">Nombre: {`${post.nameUser} ${post.lastnameP} ${post.lastnameM}`}</h5>
                                <h5 align="left" className="card-title">Area: <label>{post.workArea}</label></h5>
                                <h5 align="left" className="card-title">Experiencia: <label>{post.yearsEx}</label></h5>
                                <h5 align="left" className="card-title">Puesto:</h5>
                            </div>
                            <Row>
                                <Form.Group as={Col} md="4">

                                </Form.Group>
                                <Form.Group as={Col} md="4">

                                </Form.Group>
                                <Form.Group as={Col} md="4" className='d-grid gap-2'>

                                    <Button variant="outline-primary" className="m-1" onClick={()=>infoCandidato(post)}>Ver más</Button>
                                </Form.Group>
                            </Row>
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
        </>


    );



}


export default Cartas;