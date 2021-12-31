import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Instagram } from '@mui/icons-material';
import {Row, Col} from "antd";
import "./Footer.scss";

export default function Footer() {
    
    return (
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
                    <Row className="redes">
                    <a
                        display="block"
                        variant="body1"
                        href="https://www.twitter.com"
                        
                    >
                        <GitHubIcon name='GitHub'
                        />
                        <span>GitHub</span>
                    </a>
                    </Row>
                    <Row className="redes">
                    <a
                        display="block"
                        variant="body1"
                        href="https://www.facebook.com"
                        target="_blank"
                            rel="noopener noreferrer"
                        sx={{ mb: 0.5 }}
                    >
                        <FacebookIcon name='Facebook'
                        />
                        <span>Facebook</span>
                    </a>
                    </Row>
                    <Row className="redes">
                        <a
                            display="block"
                            variant="body1"
                            href="https://www.twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            name="Twitter"
                            sx={{ mb: 0.5 }}
                        >
                            <TwitterIcon name='Twitter'
                            />
                            <span>Twitter</span>
                        </a>
                    </Row>
                    <Row className="redes">
                        <a
                            display="block"
                            variant="body1"
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            name="Instagram"
                            sx={{ mb: 0.5 }}
                        >
                            <Instagram name='Instagram'
                            />
                            <span>Instagram</span>
                        </a>
                        </Row>
                </div>
                <div className="Fcol-md-4 footer-col">
                    <h4>Newsletter</h4>
                    <p>

                    </p>
                </div>
            </div>
            <Row >
                <Col md={12}>© TODOS LOS DERECHOS RESERVADOS</Col>
                <Col md={12}>"NOMBRE DE LA EMPRESA"</Col>
            </Row>
        </div>
       
    </footer>
    )
}
