import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Instagram } from '@mui/icons-material';
import Link from '@mui/material/Link';
import { Divider } from '@mui/material';
import { Button, Form, Col, Row } from 'react-bootstrap';
import ModalEstudios from '../../components/ModalEstudios';
import ModalPagos from '../../components/ModalPagos';


function EstudiosSimple() {
    const [Enviado, setEnviado] = useState(false);
    const [show, setShow] = useState(false);
    const [showPago, setShowPago] = useState(false);
    const handleClick = (event) => {
        const Button = event.currentTarget;
        if (Button.checkValidity() === false) {

        }
        setEnviado(!Enviado);
    };
    const handleShow = () => setShow(!show);
    const handleShowPago = () => setShowPago(!showPago);
    return (
        <div className="App">
            <div className="ContenedorEmpresas">
                <h4> Escritorio Virtual</h4>
                <Divider />
                <Button variant="outline-primary" onClick={handleClick} className="BtnSolicitar">Solicitar estudios socioeconómicos</Button>
                {(Enviado && (
                    <div className="Paquetes">
                        <Row className="mb-3">
                            <Form.Group as={Col} md="10" className="Texto">
                                <Form.Label align="justify">
                                    Se ha avisado a la plataforma que deseas incluir estudios socioeconómicos a tu paquete,
                                    tu esquema de pago séra por estudio realizado con un costo de $343,98 por estudio
                                    si deseas cambiar tu paquete a otro selecciona una de la opciones y cambiaremos tu esquema de cobro
                                    a otro, en un plazo de 72hr. Se activara la pestaña de estudios socioeconómicos
                                </Form.Label>
                            </Form.Group>

                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="5">
                                <Button variant="outline-primary" onClick={handleShowPago}>Cambiar paquete</Button>
                            </Form.Group>
                            <Form.Group as={Col} md="7">
                                <Button variant="outline-primary" onClick={handleShow}>ok, Quiero pagar por estudio realizado</Button>
                            </Form.Group>
                        </Row>


                    </div>
                ))}
                {(show && (
                    <ModalEstudios />

                ))}
                {(showPago && (
                    <ModalPagos />

                ))}
            </div>

            <footer>
                <div className="Fcontainer">
                    <div className="row">
                        <div className="Fcol-md-4 footer-col">
                            <h4>Dirección</h4>
                            <p>

                            </p>
                        </div>
                        <div className="Fcol-md-4 footer-col">
                            <h4>Correo</h4>
                            <p>

                            </p>
                        </div>
                        <div className="Fcol-md-4 footer-col">
                            <h4>Redes Sociales</h4>
                            <Link
                                display="block"
                                variant="body1"
                                href="#"
                                name="GitHub"
                                sx={{ mb: 0.5 }}
                            >
                                <GitHubIcon name='GitHub'
                                />
                                <span>GitHub</span>
                            </Link>
                            <Link
                                display="block"
                                variant="body1"
                                href="#"
                                name="Facebook"
                                sx={{ mb: 0.5 }}
                            >
                                <FacebookIcon name='Facebook'
                                />
                                <span>Facebook</span>
                            </Link>
                            <p>
                                <Link
                                    display="block"
                                    variant="body1"
                                    href="#"
                                    name="Twitter"
                                    sx={{ mb: 0.5 }}
                                >
                                    <TwitterIcon name='Twitter'
                                    />
                                    <span>Twitter</span>
                                </Link>

                                <Link
                                    display="block"
                                    variant="body1"
                                    href="#"
                                    name="Instagram"
                                    sx={{ mb: 0.5 }}
                                >
                                    <Instagram name='Instagram'
                                    />
                                    <span>Instagram</span>
                                </Link>
                            </p>
                        </div>
                        <div className="Fcol-md-4 footer-col">
                            <h4>Empresa</h4>
                            <p>

                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    );
}

export default EstudiosSimple;