import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Col, Row, Image, Form, Button } from 'react-bootstrap';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Instagram } from '@mui/icons-material';
import Link from '@mui/material/Link';
import Imagen from '../../assets/img/jpg/imagen1.jpg';


function DatosEmpresas() {
    const Datos ={
        RazonSocial:' Empresa 100% reponsable',
        Direccion:'palenque, 602, Huizache 2',
        RFC:'KDH7765875JHG',
        Giro:'Servicios',
        Nombre:'Paulo Lopez',
        Puesto:'Gerente',
        Estado:'Durango',
        Municipio:'Durango',
        Codigo:'34000',
        telefono:'6180456456',
        Horario:'10:00 am- 04:00pm',
        Correo:'localsid@hotmail.com'
    };
    return (
      

        <div className="App">
           
            <div className="DivDatosEmpresa">
                <Row className="mb-3 ImagenDatosEmpresa">
                <Form.Group as={Col} md="3" >
                        <Image src={Imagen} width="150px" height="150px" />
                        <div className="DivBtnDE">
                        <Button variant="outline-primary" className="boton">Editar datos</Button>
                        <Button variant="outline-primary" className="boton">Volver al inicio</Button>
                        </div>
                </Form.Group>
                <Form.Group as={Col} md="5" className="DatosEmpresas">
                    <div className="AlinDatosEmpresas">
                    <h5>Datos de la Empresa: </h5>
                    <Form.Label>Razon Social: {Datos.RazonSocial}</Form.Label>
                    <Form.Label>Dirección: {Datos.Direccion} </Form.Label>
                    <Form.Label>RFC: {Datos.RFC}</Form.Label>
                    <Form.Label>Giro Empresarial: {Datos.Giro} </Form.Label>
                    <Form.Label>Responsable de la Empresa: {Datos.Nombre}</Form.Label>
                    <Form.Label>Puesto del Responsable: {Datos.Puesto}</Form.Label>
                    <Form.Label>Estado: {Datos.Estado}</Form.Label>
                    <Form.Label>Municipio: {Datos.Municipio}</Form.Label>
                    <Form.Label>Codigo Postal: {Datos.Codigo}</Form.Label>
                    <Form.Label>Télefono: {Datos.telefono}</Form.Label>
                    <Form.Label>Horario de atención: {Datos.Horario}</Form.Label>
                    <Form.Label>Correo: {Datos.Correo}</Form.Label>
                </div>
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

export default DatosEmpresas;

