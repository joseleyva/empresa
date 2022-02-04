import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Button, Form, Row} from 'react-bootstrap';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Instagram } from '@mui/icons-material';
import Link from '@mui/material/Link';
import { Divider } from '@mui/material';

function Evaluaciones() {
    return (

        <div className="App">
           
            <div className="ContenedorEmpresas">
            <h4> Escritorio Virtual</h4>
            <Divider/>
                <Row className="MargenL" >
                <Form.Group as={Col} md="4">
                        <h6>Evaluacíon Psicometrica </h6>
                
                </Form.Group>
                <Form.Group as={Col} md="4">
                        <h6> Evaluacíon de Conocimientos</h6>
                </Form.Group>
                <Form.Group as={Col} md="4">
                        <h6>Resultados</h6>
                </Form.Group>
                </Row>
                <Row className="mb-3 ">
                    <Form.Group as={Col} md="4">
                        <Button variant="outline-primary" className="BtnSolicitudes">CLEAVER</Button>{' '}
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Button variant="outline-primary" href='/Empresas/CrearEvaluaciones'  className="BtnSolicitudes">Crea tu Evaluación</Button>{' '}
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Button variant="outline-primary" className="BtnSolicitudes" href="/Empresas/PruebasFinalizadas">Pruebas Finalizadas</Button>{' '}
                    </Form.Group>
                </Row>
                <Row className="mb-3 ">
                    <Form.Group as={Col} md="4">
                        <Button variant="outline-primary" className="BtnSolicitudes" >Estilo Gerencial</Button>{' '}
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Button variant="outline-primary" href="/Empresas/EvaluacionesDisponibles" className="BtnSolicitudes">Evaluaciones Disponibles</Button>{' '}
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Button variant="outline-primary" className="BtnSolicitudes">Ranking de Resultados</Button>{' '}
                    </Form.Group>
                </Row>
                <Row className="mb-3 ">
                    <Form.Group as={Col} md="4">
                        <Button variant="outline-primary" className="BtnSolicitudes" >Ver más</Button>{' '}
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Button variant="outline-primary" className="BtnSolicitudes">Volver al Inicio</Button>{' '}
                    </Form.Group>
                </Row>
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

export default Evaluaciones;

