import { Divider } from '@mui/material';
import React from 'react';
import { notification, Modal, Descriptions } from 'antd';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { getAccessTokenApi } from '../../../api/auth';
import { deleteEvaluationApi } from '../../../api/userEvaluations';
const { confirm } = Modal;

export default function InfoEvaluations(props) {
    const { id, evaluations, setIsVisibleModal, setReloadEvaluations } = props;
    const deleteEvaluation = evaluation => {
        const token = getAccessTokenApi();

        confirm({
            title: "Eliminar Evaluación",
            content: `¿Estas seguro que quieres eliminar la evaluación?`,
            okText: "Eliminar",
            okType: "danger",
            cancelText: "Cancelar",
            onOk() {
                deleteEvaluationApi(token, evaluation._id).then(response => {
                    notification["success"]({
                        message: response,
                        placement: "bottomLeft"
                    });
                    setReloadEvaluations(true);
                    setIsVisibleModal(false);
                }).catch(err => {
                    notification["error"]({
                        message: err,
                        placement: "bottomLeft"
                    })
                })
            }
        })
    }
    return (
        <div id={id}>
            <Descriptions size='small' className='mb-3' layout='vertical' bordered>
                <Descriptions.Item label="Nombre del examen">{evaluations.nameEvaluation}</Descriptions.Item>
                <Descriptions.Item label="Tiempo de duración">{`${evaluations.time} min`}</Descriptions.Item>
                <Descriptions.Item label="Cantidad de preguntas"> {evaluations.exam.length}</Descriptions.Item>
            </Descriptions>
            {evaluations.exam.map((post) => (
                <div id={post.label} key={post.label}>
                    <Divider style={{ backgroundColor: "black", color: "black", opacity: 1 }} />
                    <Descriptions  title={post.ask} size="small" layout='vertical' className='mb-3' bordered>
                        <Descriptions.Item label="Pregunta">{post.label}</Descriptions.Item>
                        <Descriptions label="Tipo de pregunta">{post.type === "select"? "Opciones" : "Abierta" }</Descriptions>
                    </Descriptions>
                    {post.type === "select" && (
                        <Descriptions column={{xs:8, sm:16, md:24}} title="Opciones" size='small' className='mb-3' layout='vertical' bordered>
                            <Descriptions.Item label="Opción 1">{post.options.option1}</Descriptions.Item>
                            <Descriptions.Item label="Opción 2">{post.options.option2}</Descriptions.Item>
                            <Descriptions.Item label="Opción 3">{post.options.option3}</Descriptions.Item>
                            <Descriptions.Item label="Opción 4">{post.options.option4}</Descriptions.Item>
                        </Descriptions>
                    )}

                </div>
            ))}
            <Row className='mt-3 mb-3'>
                <Form.Group as={Col} md="6" className='d-grid gap-2'>
                    <Button onClick={() => setIsVisibleModal(false)}>Cerrar</Button>
                </Form.Group>
                <Form.Group as={Col} md="6" className='d-grid gap-2'>
                    <Button variant='danger' onClick={() => deleteEvaluation(evaluations)}>Eliminar</Button>
                </Form.Group>
            </Row>
        </div>

    );
}
