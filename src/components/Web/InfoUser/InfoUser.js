import React, { useEffect, useState } from 'react';
import { getAvatarApi } from '../../../api/user';
import { getAccessTokenApi } from '../../../api/auth';
import { deleteReferenceApi } from '../../../api/reference';
import Perfil from '../../../assets/img/jpg/Usuario.jpg';
import { Col, Row, Image, Form, Button } from 'react-bootstrap';
import { notification } from 'antd';
import { Modal as ModalAntd } from 'antd';
import moment from 'moment';
import 'moment/locale/es-mx';
const { confirm } = ModalAntd;

export default function InfoUser(props) {
    const { user, setIsVisibleModal, setReloadReference } = props;
    const [avatar, setAvatar] = useState(null);
    useEffect(() => {
        getAvatarApi(user.avatar).then(response => {
            setAvatar(response)
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    const showDeleteConfirm = () => {
        const AccessToken = getAccessTokenApi();

        confirm({
            title: "Eliminar Vacante",
            content: `¿Estas seguro que quieres eliminar a ${user.nameUser} ${user.lastnameP} ${user.lastnameM}?`,
            okText: "Eliminar",
            okType: "danger",
            cancelText: "Cancelar",
            onOk() {
                deleteReferenceApi(AccessToken, user._id).then(response => {
                    notification["success"]({
                        message: response,
                        placement: "bottomLeft"
                    });
                    setIsVisibleModal(false);
                    setReloadReference(true)
                }).catch(err => {
                    notification["error"]({
                        message: err,
                        placement: "bottomLeft"
                    })
                })
            }
        })
    }
    var startDate = moment(user.startDate);
    var endDate = moment(user.endDate);
    return (
        <div>
            <Row className='mb-3'>
                <Form.Group as={Col} md="4">
                </Form.Group>
                <Form.Group as={Col} md="4">
                    <Image src={avatar ? avatar : Perfil} className="mt-3" roundedCircle width="150px" height="150px" />
                </Form.Group>
                <Form.Group as={Col} md="4">
                </Form.Group>
            </Row>
            {user.toWork ?
                (
                    <>
                        <Row className='mb-3'>
                            <Form.Group as={Col} md="6">
                                <Form.Label>Nombre:  </Form.Label>
                                <Form.Control
                                    readOnly
                                    disabled
                                    defaultValue={`${user.nameUser} ${user.lastnameP} ${user.lastnameM}`}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="6">
                                <Form.Label>Correo: </Form.Label>
                                <Form.Control
                                    disabled
                                    readOnly
                                    defaultValue={user.email}
                                />
                            </Form.Group>
                        </Row>
                        <Row className='mb-3'>
                            <Form.Group as={Col} md="6">
                                <Form.Label>Puesto que desempeño: </Form.Label>
                                <Form.Control
                                    disabled
                                    readOnly
                                    defaultValue={user.job}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="6">
                                <Form.Label>Área o departamento</Form.Label>
                                <Form.Control
                                    disabled
                                    readOnly
                                    defaultValue={user.workArea}
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-2">
                            <Form.Group as={Col} md="6">
                                <Form.Label>Periodo en el que trabajo:</Form.Label>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6">
                                <Form.Label>Fecha de Inicio: </Form.Label>
                                <Form.Control
                                    type="text"
                                    disabled
                                    readOnly
                                    defaultValue={`del ${startDate.format('dddd D, MMMM YYYY')}`}

                                />
                            </Form.Group>
                            <Form.Group as={Col} md="6">
                                <Form.Label>Fecha de Terminación: </Form.Label>
                                <Form.Control
                                    type="text"
                                    disabled
                                    readOnly
                                    defaultValue={`al ${endDate.format('dddd D, MMMM YYYY')}`}
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4">
                                <Form.Label>Motivo de su salida: </Form.Label>
                                <Form.Control
                                    disabled
                                    readOnly
                                    defaultValue={user.reason}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4">
                                <Form.Label>Recontratable: </Form.Label>
                                <Form.Control
                                    disabled
                                    readOnly
                                    defaultValue={user.tohire}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4">
                                <Form.Label>Recomendable: </Form.Label>
                                <Form.Control
                                    disabled
                                    readOnly
                                    defaultValue={user.recommendable}
                                />
                            </Form.Group>

                            <Form.Group as={Col} md="10">
                                <Form.Label>Recomendable: </Form.Label>
                                <Form.Control
                                    disabled
                                    readOnly
                                    style={{ resize: "none" }}
                                    as="textarea"
                                    rows={4}
                                    defaultValue={user.comments}
                                />
                            </Form.Group>
                        </Row>
                        <Row className='mb-3'>
                            <Form.Group as={Col} md="4" className="d-grid gap-2">
                                <Button variant='success'>Imprimir</Button>
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="d-grid gap-2" >
                                <Button variant='primary' onClick={() => setIsVisibleModal(false)}> Cerrar </Button>
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="d-grid gap-2">
                                <Button variant="danger" onClick={() => showDeleteConfirm(user)}>Eliminar</Button>
                            </Form.Group>
                        </Row>
                    </>
                )
                : (
                    <>
                        <p style={{textAlign: 'justify', fontFamily: 'sans-serif', fontSize: 18}}>La empresa <label style={{fontWeight: 'bold', fontFamily: 'sans-serif', fontSize: 18}}> {user.nameEm}</label> ha manifestado que la persona de nombre  
                        <label style={{fontWeight: 'bold', fontFamily: 'sans-serif', fontSize: 18}}>{`${user.nameUser} ${user.lastnameP} ${user.lastnameM}`}</label> no ha trabajado en ningun momento con ellos.</p>
                        <Row className='mb-3'>
                            <Form.Group as={Col} md="6" className="d-grid gap-2" >
                                <Button variant='primary' onClick={() => setIsVisibleModal(false)}> Cerrar </Button>
                            </Form.Group>
                            <Form.Group as={Col} md="6" className="d-grid gap-2">
                                <Button variant="danger" onClick={() => showDeleteConfirm(user)}>Eliminar</Button>
                            </Form.Group>
                        </Row>

                    </>
                )}

        </div>
    )
}
