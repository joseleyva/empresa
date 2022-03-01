import React from 'react'
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Instagram } from '@mui/icons-material';
import Link from '@mui/material/Link';
import { Input } from 'antd';
import { Divider } from '@mui/material';
import CardsBuscarCandidatos from '../../components/CardsBuscarCandidatos';
import Imagen from '../../assets/img/jpg/Usuario.jpg'
const { Search } = Input;

const users= [
    {
    id: 1,
    name: "Jose guadalupe leyva robles",
    expeciality: "Sistemas",
    imagen: Imagen
    },
    {
    id: 2,
    name: "Jose guadalupe leyva robles",
    expeciality: "Sistemas",
    imagen: Imagen
    },
    {
    id: 3,
    name: "Jose guadalupe leyva robles",
    expeciality: "Sistemas",
    imagen: Imagen
    },
    {
    id: 4,
    name: "Jose guadalupe leyva robles",
    expeciality: "Sistemas",
    imagen: Imagen
    },
    {
    id: 5,
    name: "Jose guadalupe leyva robles",
    expeciality: "Sistemas",
    imagen: Imagen
    },
]


export default function BuscarCandidatos() {
    const onSearch = value => console.log(value);
    return (
        <div className='App'>

            <div className='ContenedorEmpresas'>
                <h5>Buscar Candidatos</h5>
                <Divider className='mb-3'/>
                <Row className='mb-3'>
                <Col></Col>
                <Col xs={6}>
                <Search
                    placeholder="Buscar Candidatos"
                    allowClear
                    enterButton="Buscar"
                    size="large"
                    onSearch={onSearch}
                    />
                </Col>
                <Col></Col>
                </Row>
                <Divider/>
                <div className="DivBuscar">
                    {users.map((user)=>((
                    <CardsBuscarCandidatos user={user} key={user.id} id={user.id}/>
                    )))}
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
    )
}
