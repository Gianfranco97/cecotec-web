import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GenerateRoutes from "./components/GenerateRoutes";
import routesAdmin from "./containers/admin";
import routesAuth from "./containers/auth";

class App extends Component {
  render() {
    const isAuthenticated = !!sessionStorage.getItem("session-token");

    return (
      <Router>
        <GenerateRoutes
          routes={[...routesAuth, ...routesAdmin]}
          isAuthenticated={isAuthenticated}
        />
      </Router>
    );
  }
}

export default App;
