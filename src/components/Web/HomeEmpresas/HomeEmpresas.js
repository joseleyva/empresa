import React from 'react';
import {Row, Col, Card, Button} from "antd";
import {Link} from "react-router-dom"
import lala from "../../../assets/img/jpg/lala.jpg";
import adidas from "../../../assets/img/jpg/Logo-Adidas.jpg";
import toyota from "../../../assets/img/jpg/logo-toyota.jpg";
import cemex from "../../../assets/img/jpg/logotipo-constructora-cemex.jpg";
import mcdonalds from "../../../assets/img/png/mcdonalds.png";
import fedex from "../../../assets/img/png/fedex.png";

import "./HomeEmpresas.scss"
export default function HomeEmpresas() {
    return (
        <Row className="home-empresas">
            <Col lg={24} className="home-empresas__title">
                <h2>Empresas destacadas</h2>
            </Col>
            <Col lg={4}/>
            <Col lg={16}>
                <Row className="row-empresas">
                    <Col md={6}> <CardEmpresas image={lala} title="LALA" subtitle="Empresa dedicada a la leche" /></Col>
                    <Col md={6}><CardEmpresas image={toyota} title="Toyota" subtitle="Empresa numero 1 en automoviles"/> </Col>
                    <Col md={6}><CardEmpresas image={cemex} title="Cemex" subtitle="Empresa numero 1 en construccion"/> </Col>
                    <Col md={6}><CardEmpresas image={adidas} title="Adidas" subtitle="Empresa numero 1 en moda"/> </Col>
                    <Col md={6}><CardEmpresas image={cemex} title="Cemex" subtitle="Empresa numero 1 en construccion"/> </Col>
                    <Col md={6}><CardEmpresas image={mcdonalds} title="Mc Donalds" subtitle="Empresa numero 1 en comida"/> </Col>
                    <Col md={6}><CardEmpresas image={toyota} title="Toyota" subtitle="Empresa numero 1 en automoviles"/> </Col>
                    <Col md={6}><CardEmpresas image={fedex} title="Fedex" subtitle="Empresa numero 1 en paqueteria"/> </Col>
                </Row>
            </Col>
            <Col lg={4}/>
            <Col lg={24} className="home-empresas__more">
                <Link to="/MoreEmpresas">
                    <Button>Ver más</Button>                
                </Link>
            </Col>
        </Row>
    )
}


function CardEmpresas(props){
    const {image, title, subtitle, link} = props;
    const {Meta} = Card;

    return(
        <a href={link} >
            <Card 
            className="home-empresas__card" 
            cover={<img src={image} alt={title}/>}
            actions={[<Button> Ver más</Button>]}
            >
            <Meta title={title} description={subtitle}/>
            </Card>
        </a>
    )
}