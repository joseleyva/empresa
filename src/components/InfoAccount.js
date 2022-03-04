/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { Row, Col, Form,Button } from 'react-bootstrap';
import { List } from 'antd';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import {getUserApi} from '../api/user';
import useAuth from '../hooks/useAuth';
import { getAccessTokenApi } from '../api/auth';
import "../App.css";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
export default function InfoAccount() {
    const [expanded, setExpanded] = useState(false);
    const [open, setOpen] = useState(false);
    const {user} = useAuth();
    const [infoAccount, setInfoAccount]= useState([]);
    useEffect(()=>{
        const token = getAccessTokenApi();
        getUserApi(token, user.id).then(reponse=>{
            setInfoAccount(reponse);
        })
    },[user])
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <Row className='mb-3'>
            <List
                className="demo-loadmore-list"
                itemLayout="horizontal"
            >

                <List.Item
                    actions={[<ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                    >
                        <EditIcon style={{ fontSize: "13px" }} /> <label style={{ fontSize: "13px" }}>Editar</label>
                    </ExpandMore>]}

                >
                    <List.Item.Meta
                        title="Nombre: "
                        description={infoAccount.name}

                    />

                </List.Item>
                <Collapse in={expanded} timeout="auto" >
                    <div >
                        <Row className='mb-2'>
                            <Form.Group as={Col} md="4">

                            </Form.Group>
                            <Form.Group as={Col} md="4">
                                <Form.Label>Nombre: </Form.Label>
                                <Form.Control
                                    type='text'
                                    defaultValue={infoAccount.name}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4">

                            </Form.Group>
                        </Row>
                        <Row>
                            <Col></Col>
                            <Col xs={6} className="App">
                                <Button>
                                    Guardar
                                </Button>
                            </Col>
                            <Col></Col>
                        </Row>
                    </div>
                </Collapse>
{/*============================================================================================================   */}
                <List.Item
                    actions={
                        [<ExpandMore
                            expand={open}
                            onClick={handleOpen}
                        >
                            <EditIcon style={{ fontSize: "13px" }} /> <label style={{ fontSize: "13px" }}>Editar</label>
                        </ExpandMore>]
                    }

                >
                    <List.Item.Meta
                        title="Correo: "
                        description={infoAccount.email}
                    />
                </List.Item>
                <Collapse in={open} timeout="auto" >
                    <div >
                        <Row className='mb-2'>
                            <Form.Group as={Col} md="4">

                            </Form.Group>
                            <Form.Group as={Col} md="4">
                                <Form.Label>Correo: </Form.Label>
                                <Form.Control
                                    type='text'
                                    defaultValue={infoAccount.email}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4">

                            </Form.Group>
                        </Row>
                        <Row>
                            <Col></Col>
                            <Col xs={6} className="App">
                                <Button>
                                    Guardar
                                </Button>
                            </Col>
                            <Col></Col>
                        </Row>
                    </div>
                </Collapse>
            </List>

        </Row>

    )
}
