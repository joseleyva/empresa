import React,{useState, useEffect} from "react";
import { Row, Col, Image } from 'react-bootstrap';
import { Form, Button, Container } from 'react-bootstrap';
import { getAvatarApi } from "../api/user";
import Imagen from '../assets/img/jpg/imagen1.jpg';

function Cartas(props) {
    const {id, post} = props;
    const [avatar, setAvatar] = useState(null);
    
    useEffect(() => {
        if (post.avatar) {
          getAvatarApi(post.avatar).then((response) => {
            setAvatar(response);
          });
        } else {
          setAvatar(null);
        }
      }, [post]);

        return (
            <>

                <Container className="ContenedorV">
                    <Row className="IconCartas" key={id}>
                        <Col xs={2} md={1}>
                            <Image src={avatar ? avatar : Imagen} roundedCircle width="150px" height="150px" />
                        </Col>
                    </Row>
                    <div className="C">
                        <div className="col-md-10">
                            <div className="card-body">
                                <div>
                                <h5 align="left" className="card-title">Nombre: {post.name}</h5>
                                <h5 align="left" className="card-title">Area: <label>{post.email}</label></h5>
                                <h5 align="left" className="card-title">Experiencia: <label></label></h5>
                                <h5 align="left" className="card-title">Examenes:</h5>
                                </div>
                                <Row>
                                    <Form.Group as={Col} md="6">

                                    <Button variant="primary" className="m-1" >Enviar Examen</Button>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6">

                                    <Button variant="primary" className="m-1" >Ver más</Button>
                                    </Form.Group>
                                </Row>
                            </div>

                        </div>

                    </div>

                </Container>
            </>


        );

    

}


export default Cartas;