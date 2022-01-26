import React, {useState} from "react";
import { Row, Col, Form } from 'react-bootstrap';
import { Button, Container } from 'react-bootstrap';
import {CreateReqReferenceApi} from '../api/reqReference';
import {getAccessTokenApi} from '../api/auth';
import {notification} from 'antd';

function CardsReferenciasMini(props)  {
    const { post} = props;
    const [estado, setEstado] = useState(false);
    const [textButton, setTextButton] = useState("Pedir Referencias");
    const [variantButton, setVariantButton]= useState("outline-primary");
    
    const ReqReferencia = reference =>{
        const token = getAccessTokenApi();
      const datos ={
          nameEm: reference.nameEmBack,
          nameEmS: reference.nameEmNext,
          email: reference.email,
          avatar: reference.avatar,
          nameUser: reference.nameUser,
          lastnameP: reference.lastnameP,
          lastnameM: reference.lastnameM,
          send: false
      }  
      CreateReqReferenceApi(token, datos).then(result =>{
          if(result.ok){
            notification["success"]({
                message: result.message,
                placement: "bottomLeft"
            })
            setEstado(true);
            setTextButton("Solicitado");
            setVariantButton("outline-secondary");
          }else{
              notification["error"]({
                  message: result.message,
                  placement: "bottomLeft"
              })
              setEstado(false);
              setTextButton("Solicitado");
              setVariantButton("outline-secondary");
          }
      }).catch(err =>{
          notification["error"]({
              message: err.message,
              placement: "bottomLeft"
          })
      })


    }
        return (
            <>

                <Container className="ContenedorRefMini">
                   <Row className="mb-3">
                    <Form.Group as={Col} md="4">
                    <Form.Label>{`${post.nameUser} ${post.lastnameP} ${post.lastnameM}`}</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                    <Form.Label>{post.workArea}</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                    <Form.Label>{post.yearsEx}</Form.Label>
                    </Form.Group>
                   </Row> 
                   <Row>
                       {post.solicitado ? <Button variant="outline-secondary" className="BtnRefMini" disabled>Solicitado</Button> :<Button variant={variantButton}  disabled={estado} onClick={()=> ReqReferencia(post)} className="BtnRefMini">{textButton}</Button>}
                   </Row>
                </Container>
            </>


        );

    

}

export default CardsReferenciasMini;