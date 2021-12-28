import React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Home from '../pages/Home';
import useAuth from "../hooks/useAuth";

export default function LayoutsPanel({ routes }) {
  const { Content} = Layout;
  const { user, isLoading } = useAuth();

    if (!user && !isLoading) {
        return (
          <>
            <Route path="/" component={Home} />
            <Redirect to="/"  />
          </>
        );
      }
  if (user && !isLoading  ) {
    return (
      <Layout>

        <Layout>
          <Content>
            <LoadRouters routes={routes} />
          </Content>
        </Layout>
      </Layout>
    );
  }
  return null;
}

function LoadRouters({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      ))}
    </Switch>
  );
}
