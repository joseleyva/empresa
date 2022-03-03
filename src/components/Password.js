/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Row } from 'react-bootstrap';
import { List } from 'antd';
export default function Password() {
  return (
    <Row className='mb-3'>
    <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
    >

        <List.Item
            actions={[<a>Editar</a>]}

        >
            <List.Item.Meta
                title="Cambiar Contraseña: "
                description="*************"
            />
        </List.Item>
        <List.Item
            actions={[<a>Ver</a>]}

        >
            <List.Item.Meta
                title="Ver Contaseña: "
                description="*************"
            />
        </List.Item>
        <List.Item
            actions={[<a>Ver</a>]}

        >
            <List.Item.Meta
                title="Autenticación de dos factores: "
                description="Activo"
            />
        </List.Item>

    </List>

</Row>
  )
}
