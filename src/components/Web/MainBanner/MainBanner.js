import React from "react";
import {Row, Col} from "antd";
import "./MainBanner.scss";

export default function MainBanner(){
    return(
        <div className="main-banner">   
            <div className="main-banner__dark"/>

            <Row>
                <Col lg={4}/>
                <Col lg={16}>
                    <h2> Empresa socialmente reponsable</h2>
                    <h3>
                        Nos comprometemos a que encuentres el personal que tanto necesitas para tu empresa
                    </h3>
                </Col>
                <Col lg={4}/>
            </Row>
        
        </div>
    );
}