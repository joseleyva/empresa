import React from 'react'
import { Card } from 'antd';
import { EditOutlined, InfoCircleOutlined, SettingOutlined } from '@ant-design/icons';
import VisibilityIcon from '@mui/icons-material/Visibility';
import '../App.css';

const { Meta } = Card;


export default function CardsBuscarCandidatos(props) {
    const {user, id} = props;
  return (
    <Card
    className="CardsBuscar"
    cover={
      <img
        alt="example"
        src={user.imagen}
        width={240}
        height={120}
        className="imageCandidatos"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <VisibilityIcon key="Info" />,
    ]}
    key={id}
  >
    <Meta
      title={user.name}
      description={user.expeciality}
    />
  </Card>
  )
}
