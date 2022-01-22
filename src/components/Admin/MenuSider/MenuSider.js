import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Layout, Menu ,} from "antd";
import "./MenuSider.scss";
import { HomeOutlined, UserOutlined, ShoppingCartOutlined,AppstoreAddOutlined } from "@ant-design/icons";

function MenuSider(props) {

  const { Sider } = Layout;
  const { menuCollapsed, location } = props;
  return (

  <Sider className="admin-sider"  collapsed={menuCollapsed}>
      <Menu
      theme="dark"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
      >
        <Menu.Item key="/admin" icon={<HomeOutlined/>} >
          <Link to={"/admin"}>
          <span className="nav-text">Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/users">
          <Link to={"/admin/users"}>
            <UserOutlined />
            <span className="nav-text">Usuarios</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/products">
          <Link to={"/admin/products"}>
          <ShoppingCartOutlined />
            <span className="nav-text">Productos</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/Empresas">
          <Link to={"/admin/Empresas"}>
          <AppstoreAddOutlined/>
            <span className="nav-text">Empresas</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default withRouter(MenuSider);