import React, { useState } from 'react';
import { Button, Modal, Row, Col, Form } from 'react-bootstrap';

function ModalPagos() {
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
                    <Modal.Title>Elige el Paquete que deseas</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="3">
                            <div className="pagos">

                            </div>
                            <Button className="BtnPagos" variant="outline-success"> Tarjeta</Button>
                            <Button className="BtnPagos" variant="outline-primary"> Paypal</Button>
                        </Form.Group>
                        <Form.Group as={Col} md="3">
                            <div className="pagos">

                            </div>
                            <Button className="BtnPagos" variant="outline-success"> Tarjeta</Button>
                            <Button className="BtnPagos" variant="outline-primary"> Paypal</Button>
                        </Form.Group>
                        <Form.Group as={Col} md="3">
                            <div className="pagos">

                            </div>
                            <Button className="BtnPagos" variant="outline-success"> Tarjeta</Button>
                            <Button className="BtnPagos" variant="outline-primary"> Paypal</Button>
                        </Form.Group>
                        <Form.Group as={Col} md="3">
                            <div className="pagos">

                            </div>
                            <Button className="BtnPagos" variant="outline-success"> Tarjeta</Button>
                            <Button className="BtnPagos" variant="outline-primary"> Paypal</Button>
                        </Form.Group>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary">Aceptar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalPagos;