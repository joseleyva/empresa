import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Form, Col } from 'react-bootstrap';
import * as React from 'react';
import {Button} from 'react-bootstrap';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Instagram } from '@mui/icons-material';
import Link from '@mui/material/Link';
import { Divider } from '@mui/material';
import CardsVacantes from '../../components/CardsVacantes';


const cards = [
    {
      Nombre: 'Contador',
      id:1,
     
    },
    {
      Nombre: 'Desarrollador de software',
      id:2,
    },
    {
        Nombre: 'Velador',
        id:3,
       
      },
      {
        Nombre: 'Electrico',
        id:4,
      }
  ];
 
function Vacante() {
   

    return (
        <div className="App">

            <div className="ContenedorEmpresas">
                <h4> Escritorio Virtual</h4>
                <Row className="mb-3 BotonesEm">
                    <Form.Group as={Col} md="4">
                        <Button variant="outline-primary" href="/Empresas/VacanteForm">Publicar Vacante</Button>{' '}
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Button variant="outline-primary" href="/Empresas/CandidatosPostulados">Candidatos Postulados</Button>{' '}
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Button variant="outline-primary" href="/Empresas/VacantesActivas">Vacantes Activas</Button>{' '}
                    </Form.Group>
                </Row>
                <Divider/>
                <h5>Vacantes Activas</h5>
                <div className="VacantesActivas">
                {cards.map((post) => (
                  <CardsVacantes key={post.id} post={post} />
                ))}
                </div>
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


export default Vacante;