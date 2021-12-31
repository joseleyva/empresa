import React from 'react'
import {Row, Col, Card} from "antd";
import {ClockCircleOutlined, KeyOutlined, RiseOutlined, UserOutlined, DollarOutlined, CheckCircleOutlined} from "@ant-design/icons"
import "./HowMyPagesWork.scss"

export default function HowMyPagesWork() {
    return (
        <Row className="how-my-pages-work">
            <Col lg={24} className="how-my-pages-work__title">
                <h2>Como funciona "Nombre de la empresa" </h2>
                <h3>Contamos con diversas funcionalidades que posicionan 
                nuestra pagina como una de las mas competitivas del mercado</h3>
            </Col>

            <Col lg={4}/>
            <Col lg={16}>
                <Row className="row-cards">
                    <Col md={8}>
                        <CardsInfo 
                        icon={<ClockCircleOutlined />} 
                        title="Publicacion rapida" 
                        description="Puedes publica de forma rapida las vacantes requeridas en tu empresa"/>
                    </Col>
                    <Col md={8}>
                        <CardsInfo 
                        icon={<KeyOutlined />} 
                        title="Acceso 24/7" 
                        description="Puedes publicar tus vacantes a cualquier hora del dia sin importar la hora ni el dia."/>
                    </Col>
                    <Col md={8}>
                        <CardsInfo 
                        icon={<RiseOutlined />} 
                        title="Haz crecer tu empresa" 
                        description="Haz crecer de forma rapida tu empresa con la ayuda de nosotros."/>
                    </Col>
                </Row>
                <Row className="row-cards">
                    <Col md={8}>
                        <CardsInfo 
                        icon={<UserOutlined />} 
                        title="Contrata personal" 
                        description="Recluta personal para las areas requeridas para tu empresa"/>
                    </Col>
                    <Col md={8}>
                        <CardsInfo 
                        icon={<DollarOutlined />} 
                        title="Precios Competitivos" 
                        description="Precios competitivos para que puedas reclutar mas personal por menos costo"/>
                    </Col>
                    <Col md={8}>
                        <CardsInfo 
                        icon={<CheckCircleOutlined />} 
                        title="Certificado de confianza" 
                        description="Empresa con certificacion de calidad en el area de recursos humanos."/>
                    </Col>
                </Row>
            </Col>
            <Col lg={4}/>
        </Row>
    )
}


function CardsInfo(props){
    const {icon, title, description} = props;
    const {Meta} = Card;
    return(
        <Card className="how-my-pages-work__card">
            {icon}
            <Meta title={title} description={description}/>
        </Card>
    )
}