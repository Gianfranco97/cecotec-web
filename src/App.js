import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import GenerateRoutes from "./components/GenerateRoutes";
import routesAdmin from "./containers/admin";
import routesGuest from "./containers/auth";

class App extends Component {
  render() {
    const isAuth = true; // TODO: cambiar para diferenciar estado

    let routes = null;

    if (isAuth) {
      routes = <GenerateRoutes routes={routesAdmin} />;
    } else {
      routes = <GenerateRoutes routes={routesGuest} />;
    }

    return routes;
  }
}

export default withRouter(App);
