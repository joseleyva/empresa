import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Button, Form, Col } from 'react-bootstrap';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Instagram } from '@mui/icons-material';
import Link from '@mui/material/Link';
import { Chart } from 'primereact/chart';



function Empresas() {

    const basicData = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Nobiembre', 'Diciembre'],
        datasets: [
            {
                label: 'First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40, 54, 65, 34, 51, 100],
                fill: false,
                borderColor: '#42A5F5',
                tension: .4
            },
            {
                label: 'Second Dataset',
                data: [28, 48, 40, 19, 86, 27, 90, 13, 53, 12, 56, 10],
                fill: false,
                borderColor: '#FFA726',
                tension: .4
            }
        ]
    };
    const getLightTheme = () => {
        let basicOptions = {
            maintainAspectRatio: false,
            aspectRatio: .6,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };


        return {
            basicOptions
        }
    }

    const { basicOptions, } = getLightTheme();

    return (

        <div className="App">


            <div className="ContenedorEmpresas">
                <h4> Escritorio Virtual</h4>
                <div className="Graficas">
                    <Chart type="line" height='350px' data={basicData} options={basicOptions} />
                </div>
                <Row className="mb-3 BotonesEm">
                    <Form.Group as={Col} md="4">
                        <Button variant="outline-primary">Encuentra capacitaciones avaladas ante STPS</Button>{' '}
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Button variant="outline-primary" href="/Empresas/VacantesActivas">Mira el status de tus vacantes activas</Button>{' '}
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Button variant="outline-primary">Cotiza estudios socio economicos</Button>{' '}
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

export default Empresas;

