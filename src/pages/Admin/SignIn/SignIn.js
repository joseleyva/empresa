import React from "react";
import {Layout, Tabs} from 'antd';

import Logo from '../../../assets/img/png/logo512.png';
import "./SignIn.scss";

import RegisterForm from "../../../components/Admin/RegisterForm";
import LoginForm from "../../../components/Admin/LoginForm"

export default function SignIn(){
    const {Content}= Layout;
    const {TabPane}= Tabs;
    return(
            <Layout className="sign-in">
                <Content className="sign-in__content">
                    <h1 className="sign-in__content-logo">
                        <img src={Logo} alt="Nala" width="150px" height="150px"/>
                    </h1>
                    <div className="sign-in__content-tabs">
                        <Tabs type="card">
                            <TabPane tab={<span>Entrar</span>} key="1">
                               <LoginForm/>
                            </TabPane>
                            <TabPane tab={<span>Nuevo Usuario</span>} key="2">
                                <RegisterForm/>
                            </TabPane>
                        </Tabs>
                    </div>
                </Content>
            </Layout>
        );
}

