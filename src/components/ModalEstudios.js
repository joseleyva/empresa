import React, { useState } from 'react';
import { Button, Modal, Row, Col, Form } from 'react-bootstrap';

function ModalEstudios() {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size={"lg"}

            >
                <Modal.Header closeButton>
                    <Modal.Title>Estudios Socioeconómicos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="7">
                            <Form.Label>¿Cuántos estudios en promedio planeas realizar por mes?</Form.Label>
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                            <Form.Control
                                required
                                type="number"
                                name="Conocimientos"
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="8">
                            <Form.Label>Los estudios que planeas ¿Son Foráneos o de tu zona? </Form.Label>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4">
                            <Button className="BtnEstudio" variant="outline-primary"> Foráneos</Button>
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                            <Button className="BtnEstudio" variant="outline-primary"> De mi zona</Button>
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                            <Button className="BtnEstudio" variant="outline-primary"> Ambos</Button>
                        </Form.Group>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary">Enviar Información</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalEstudios;