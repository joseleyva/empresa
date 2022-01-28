import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Form, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import * as React from 'react';
import { Button } from 'react-bootstrap';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Instagram } from '@mui/icons-material';
import {Switch} from 'antd';
import Link from '@mui/material/Link';
import { Divider } from '@mui/material';
import CardsVacantes from '../../components/CardsVacantes';
import { getVacanciesActiveApi } from '../../api/vacancies';
import { getAccessTokenApi } from '../../api/auth';
import useAuth from '../../hooks/useAuth'

function Vacante() {
    const token = getAccessTokenApi();
    const [reloadUsers, setReloadUsers] = useState(false);
    const [vacanciesActive, setVacanciesActive] = useState([]);
    const [vacanciesInactive, setVacanciesInactive] = useState([]);
    const { user } = useAuth();
    const [viewUsersActives, setViewUsersActives] = useState(true);
    useEffect(() => {
        getVacanciesActiveApi(token, user.name, true).then(response => {
            setVacanciesActive(response.vacancies);
        });
        getVacanciesActiveApi(token, user.name, false).then(response => {
            setVacanciesInactive(response.vacancies);
        });
        setReloadUsers(false);
    }, [token, reloadUsers, user]);

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
                <Divider />
                <div className="list-users">

                        <div className="switch">
                            <Switch
                                defaultChecked
                                onChange={() => setViewUsersActives(!viewUsersActives)}
                            />
                            <span>
                                {viewUsersActives ? "Vacantes Activas" : "Vacantes Inactivas"}
                            </span>
                        </div>
                    </div>
                    {viewUsersActives ? (
                         <div className="VacantesActivas">
                         {vacanciesActive.map((post) => (
                             <CardsVacantes key={post._id} id={post._id} post={post} setReloadUsers={setReloadUsers}/>
                         ))}
                     </div>
                    ) : (
                        <div className="VacantesActivas">
                        {vacanciesInactive.map((post) => (
                            <CardsVacantes key={post._id} id={post._id} post={post} setReloadUsers={setReloadUsers}/>
                        ))}
                    </div>
                    )}
                   

               
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