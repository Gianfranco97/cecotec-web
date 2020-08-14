import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import GenerateRoutes from "./components/GenerateRoutes";
import routesAdmin from "./containers/admin";
import routesAuth from "./containers/auth";

class App extends Component {
  render() {
    const isAuthenticated = !!sessionStorage.getItem("session-token");

    return (
      <GenerateRoutes
        routes={[...routesAuth, ...routesAdmin]}
        isAuthenticated={isAuthenticated}
      />
    );
  }
}

export default withRouter(App);
