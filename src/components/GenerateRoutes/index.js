import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import MissingPage from "../MissingPage";

const GenerateRoutes = ({ routes, rootPath, isAuthenticated }) => (
  <React.Fragment>
    {routes.map((route, key) => (
      <Route
        key={key}
        exact={route.exact}
        path={rootPath ? rootPath + route.path : route.path}
        render={(routeProps) => {
          if (route.isPrivate && !isAuthenticated) {
            return (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: routeProps.location },
                }}
              />
            );
          }
          return (
            <route.component
              sectionBarProps={{ ...route.sectionBarProps }}
              {...routeProps}
            />
          );
        }}
      />
    ))}

    <Route path="*">
      <MissingPage />
    </Route>
  </React.Fragment>
);

GenerateRoutes.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
  rootPath: PropTypes.string,
  isAuthenticated: PropTypes.bool
};

export default GenerateRoutes;
