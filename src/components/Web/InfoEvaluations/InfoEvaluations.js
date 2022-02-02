import { Divider } from '@mui/material';
import React from 'react';
import { notification, Modal } from 'antd';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { getAccessTokenApi } from '../../../api/auth';
import { deleteEvaluationApi } from '../../../api/userEvaluations';
const { confirm } = Modal;

export default function InfoEvaluations(props) {
    const { evaluations, setIsVisibleModal, setReloadEvaluations } = props;
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
        <div>
            <Row className='mb-3'>
                <Form.Group as={Col} md="4">
                    <Form.Label> Nombre del Examen: </Form.Label>
                    <Form.Control
                        disabled
                        readOnly
                        defaultValue={evaluations.nameEvaluation}
                    />
                </Form.Group>
                <Form.Group as={Col} md="4">
                    <Form.Label> Tiempo de duración: </Form.Label>
                    <Form.Control
                        disabled
                        readOnly
                        defaultValue={`${evaluations.time} min`}
                    />
                </Form.Group>
                <Form.Group as={Col} md="4">
                    <Form.Label>Cantidad de preguntas: </Form.Label>
                    <Form.Control
                        disabled
                        readOnly
                        defaultValue={evaluations.exam.length}
                    />
                </Form.Group>
            </Row>
            {evaluations.exam.map((post) => (
                <>
                    <Divider style={{ backgroundColor: "black", color: "black", opacity: 1 }} />
                    <Row className='mb-3'>
                        <Form.Group as={Col} md="6">
                            <Form.Label >{post.ask}</Form.Label>
                            <Form.Control
                                disabled
                                readOnly
                                defaultValue={post.label}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="6">
                            <Form.Label >Tipo de pregunta</Form.Label>
                            <Form.Control
                                disabled
                                readOnly
                                defaultValue={post.type}
                            />
                        </Form.Group>
                    </Row>
                    {post.type === "select" && (
                        <Row className="mb-3">
                            <Form.Group as={Col} md="3">
                                <Form.Label>Opción 1</Form.Label>
                                <Form.Control
                                    disabled
                                    readOnly
                                    defaultValue={post.options.option1}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="3">
                                <Form.Label>Opción 2</Form.Label>
                                <Form.Control
                                    disabled
                                    readOnly
                                    defaultValue={post.options.option2}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="3">
                                <Form.Label>Opción 3</Form.Label>
                                <Form.Control
                                    disabled
                                    readOnly
                                    defaultValue={post.options.option3}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="3">
                                <Form.Label>Opción 4</Form.Label>
                                <Form.Control
                                    disabled
                                    readOnly
                                    defaultValue={post.options.option4}
                                />
                            </Form.Group>
                        </Row>
                    )}

                </>
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
