import React from "react";
import { Row, Col, Form } from 'react-bootstrap';
import { Button, Container } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import {CreateReqReferenceApi} from '../api/reqReference';
import {getAccessTokenApi} from '../api/auth';
import {notification} from 'antd';

function CardsReferenciasMini(props)  {
    const { post} = props;
    const {user} = useAuth();

    const ReqReferencia = reference =>{
        const token = getAccessTokenApi();
      const datos ={
          nameEm: reference.name,
          nameEmS: user.name,
          email: reference.email,
          avatar: reference.avatar,
          nameUser: reference.nameUser,
          lastnameP: reference.lastnameP,
          lastnameM: reference.lastnameM
      }  
      CreateReqReferenceApi(token, datos).then(result =>{
          if(result.ok){
            notification["success"]({
                message: result.message,
                placement: "bottomLeft"
            })
          }else{
              notification["error"]({
                  message: result.message,
                  placement: "bottomLeft"
              })
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
                    <Form.Label>{post.email}</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                    <Form.Label>{post.name}</Form.Label>
                    </Form.Group>
                   </Row> 
                   <Row>
                   <Button variant="outline-primary" onClick={()=> ReqReferencia(post)} className="BtnRefMini">Pedir Referencias</Button>{' '}
                   </Row>
                </Container>
            </>


        );

    

}

export default CardsReferenciasMini;