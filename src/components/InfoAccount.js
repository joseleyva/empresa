/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Row } from 'react-bootstrap';
import { List } from 'antd';
export default function InfoAccount() {
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
                        title="Nombre: "
                        description="Jose Guadalupe Leyva Robles"
                    />
                </List.Item>
                <List.Item
                    actions={[<a>Editar</a>]}

                >
                    <List.Item.Meta
                        title="Correo: "
                        description="jose.leyva005@gmail.com"
                    />
                </List.Item>

            </List>

        </Row>

    )
}
