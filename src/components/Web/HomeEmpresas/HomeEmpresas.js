import React, {useState, useEffect} from 'react';
import {Row, Col, Card, Button, Rate} from "antd";
import { getCompanyActiveApi } from '../../../api/company';
import { getAvatarApi } from '../../../api/user';
//import {Link} from "react-router-dom"

import "./HomeEmpresas.scss"
export default function HomeEmpresas() {
    const [reloadCompany, setRealoadCompany] = useState(false);
    const [companies, setCompanies]= useState([]);
  
    useEffect(() => {
        getCompanyActiveApi(true).then(response => {
        setCompanies(response.company);
      })
      setRealoadCompany(false);
    }, [reloadCompany]);
    return (
        <Row className="home-empresas">
            <Col lg={24} className="home-empresas__title">
                <h2>Empresas destacadas</h2>
            </Col>
            <Col lg={4}/>
            <Col lg={16}>
                <Row className="row-empresas">
                    {companies ? 
                     companies.map((post)=>(                       
                    <Col md={6}> <CardEmpresas key={post._id} id={post._id} image={post.avatar} title={post.title} description={post.description} rate={post.rate} /></Col>
                    ))
                    : null}
                </Row>
            </Col>
          {/*  <Col lg={4}/>
            <Col lg={24} className="home-empresas__more">
                <Link to="/MoreEmpresas">
                    <Button>Ver más</Button>                
                </Link>
            </Col>
       */}
        </Row>
    )
}


function CardEmpresas(props){
    const {image, title, description, link, id, rate} = props;
    const [avatar, setAvatar]=useState(null);
    const {Meta} = Card;
    useEffect(()=>{
            getAvatarApi(image).then(response=>{
                setAvatar(response);
            })
    }, [image]);
    return(
        <a href={link} id={id} key={id}>
            <Card 
            id={id}
            key={id}
            className="home-empresas__card" 
            cover={<img src={avatar} alt={title}/>}
            actions={[<Button> Ver más</Button>]}
            >
            <Meta title={title} description={description}/>
            <Rate defaultValue={rate} disabled />
            </Card>
        </a>
    )
}