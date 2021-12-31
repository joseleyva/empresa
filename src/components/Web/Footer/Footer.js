import React from 'react'
import {Layout, Row, Col} from "antd";
import "./Footer.scss"
export default function Footer() {
    const {Footer} = Layout;
    return (
        <Footer className="footer">
            <Row>
                <Col md={4}/>
                <Col md={16}>
                    <Row>
                        <Col md={6}>Dirección</Col>
                        <Col md={6}>Correo</Col>
                        <Col md={6}>Redes sociales</Col>
                        <Col md={6}>newlester</Col>
                    </Row>
                    <Row className="footer__copyright">
                        <Col md={12}>© TODOS LOS DERECHOS RESERVADOS</Col>
                        <Col md={12}>"NOMBRE DE LA EMPRESA"</Col>
                    </Row>
                </Col>
                <Col md={4}/>
            </Row>
        </Footer>
    )
}
