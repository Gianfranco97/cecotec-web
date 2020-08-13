import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

const GenerateRoutes = ({ routes, rootPath }) => (
  <React.Fragment>
    {routes.map((route, key) => (
      <Route
        key={key}
        exact={route.exact}
        path={rootPath ? rootPath + route.path : route.path}
        render={(routeProps) => (
          <route.component
            sectionBarProps={{ ...route.sectionBarProps }}
            {...routeProps}
          />
        )}
      />
    ))}
  </React.Fragment>
);

GenerateRoutes.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
  rootPath: PropTypes.string,
};

export default GenerateRoutes;
