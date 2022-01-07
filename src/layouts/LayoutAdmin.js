import React,{useState} from "react";
import { Layout } from "antd";
import {Redirect, Route, Switch } from "react-router-dom";
import './LayoutAdmin.scss';
import MenuTop from '../components/Admin/MenuTop';
import MenuSider from '../components/Admin/MenuSider';
import AdminSignIn from '../pages/Admin/SignIn/SignIn';
import useAuth from "../hooks/useAuth";



export default function LayoutsAdmin({routes}) {
  const { Header, Content, Footer} = Layout;
  const [menuCollapsed, setMenuCollapsed] =useState(true);
  const { user, isLoading } = useAuth();
  

  if(!user && !isLoading){
    return(
      <>
      <Route path="/admin/login" component={AdminSignIn}/>
      <Redirect to="/admin/login"/>
      </>
      )
  }
  if(user && !isLoading && user.role==="usuario"){
    return <Redirect to="/Empresas"/>
  }

  if (user && !isLoading  && user.role === "admin") {
  return (
    <Layout>
     <MenuSider menuCollapsed={menuCollapsed}/>
      <Layout className="layout-admin" style={{marginLeft: menuCollapsed ? "80px" : "200px" }}>
        <Header className="layout-admin__header">
          <MenuTop menuCollapsed={menuCollapsed} setMenuCollapsed={setMenuCollapsed}/>
        </Header>
       
        <Content className="layout-admin__content"> 
       
          <LoadRoutes routes={routes} />
        </Content>
        <Footer className="layout-admin__footer">Footer....</Footer>
      </Layout>
    </Layout>
  );
  }
  return null;
}

function LoadRoutes({ routes }) {
  return (
    <Switch>
     { routes.map((route, index)=>(
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
      ))}
    </Switch> 
  );
}
