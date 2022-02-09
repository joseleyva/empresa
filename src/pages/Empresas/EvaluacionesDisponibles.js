import React, { useState, useEffect } from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Instagram } from '@mui/icons-material';
import Link from '@mui/material/Link';
import CardsEvaluaciones from '../../components/CardsEvaluaciones';
import { getAccessTokenApi } from '../../api/auth';
import { getEvaluationApi } from '../../api/userEvaluations';
import useAuth from '../../hooks/useAuth';


export default function EvaluacionesDisponibles() {
    const [evaluations, setEvaluations] = useState([]);
    const token = getAccessTokenApi();
    const [reloadEvaluations, setReloadEvaluations] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        getEvaluationApi(token, user.name).then(response => {
            setEvaluations(response.userevaluation);
        })
        setReloadEvaluations(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, reloadEvaluations])



    return (
        <div className="App">

            <div className="ContenedorEmpresas">
                <h4> Escritorio Virtual</h4>
                <Divider />
                <h4>Evaluaciones Disponibles</h4>
                <Divider />
                <div className="DivEvaluaciones">

                    {evaluations.map((post) => (
                        <CardsEvaluaciones post={post} key={post._id} id={post._id} setReloadEvaluations={setReloadEvaluations} />
                    ))}
                </div>
                <Row className='mb-3 mt-3'>
                    <Form.Group as={Col} md="4">
                        <Button variant="secondary" href="/Empresas/Evaluaciones"> Regresar </Button>
                    </Form.Group>
                    <Form.Group as={Col} md="4">

                    </Form.Group>
                    <Form.Group as={Col} md="4">
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
