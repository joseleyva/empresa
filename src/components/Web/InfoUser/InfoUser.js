import React, { useEffect, useState } from 'react';
import { getAvatarApi } from '../../../api/user';
import { getAccessTokenApi } from '../../../api/auth';
import { deleteReferenceApi } from '../../../api/reference';
import Perfil from '../../../assets/img/jpg/Usuario.jpg';
import { Col, Row, Image, Form, Button } from 'react-bootstrap';
import { notification } from 'antd';
import { Modal as ModalAntd, Descriptions } from 'antd';
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
                   <Descriptions size='small' layout='vertical' className='mb-3' bordered>
                    <Descriptions.Item  label="Nombre">{user.nameUser}</Descriptions.Item>
                    <Descriptions.Item label="Apellido paterno">{user.lastnameP}</Descriptions.Item>
                    <Descriptions.Item label="Apellido materno">{user.lastnameM}</Descriptions.Item>
                    <Descriptions.Item label="Correo" span={2}>{user.email}</Descriptions.Item>
                    <Descriptions.Item label="Puesto que desempeño">{user.job}</Descriptions.Item>
                    <Descriptions.Item label="Area o departamento">{user.workArea}</Descriptions.Item>
                    <Descriptions.Item label="Fecha de inicio">{startDate.format('LL')}</Descriptions.Item>
                    <Descriptions.Item label="Fecha de terminación" span={2}>{endDate.format('LL')}</Descriptions.Item>
                    <Descriptions.Item label="Motivo de su salida">{user.reason}</Descriptions.Item>
                    <Descriptions.Item label="Recontratable">{user.tohire}</Descriptions.Item>
                    <Descriptions.Item label="Recomendable">{user.recommendable}</Descriptions.Item>
                    <Descriptions.Item label="Comentarios" span={3}>{user.comments}</Descriptions.Item>
                   </Descriptions>

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
