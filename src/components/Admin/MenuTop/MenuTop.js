import React from "react";
import "./MenuTop.scss";
import Logo from "../../../assets/img/png/logo512.png";
import { Button } from "antd";
import {MenuUnfoldOutlined, PoweroffOutlined, MenuFoldOutlined } from "@ant-design/icons";
import {logout} from '../../../api/auth';

export default function MenuTop(props) {
  const {menuCollapsed, setMenuCollapsed}=props;
  const logoutUser=()=>{
    logout();
    window.location.reload();
}
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img className="menu-top__left-logo" src={Logo} alt="Nala" />

        <Button type="link"  onClick={()=>setMenuCollapsed(!menuCollapsed)} >
          {menuCollapsed ?    <MenuUnfoldOutlined/> :  <MenuFoldOutlined /> }
          
        </Button>
      </div>
      <div className="menu-top__right">
          <Button type="link" onClick={logoutUser}><PoweroffOutlined/></Button>
      </div>
    </div>
  );
}
