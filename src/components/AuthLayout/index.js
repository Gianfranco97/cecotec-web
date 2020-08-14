import React from "react";
import PropTypes from "prop-types";
import logoIMG from "../../assets/img/cecotec-logo.jpg";

import "./styles.scss";

class AuthLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="auth-page-container">
        <div className="auth-form">
          <div className="auth-form-logo">
            <img src={logoIMG} alt="cecotec" />
          </div>

          {children}
        </div>
      </div>
    );
  }
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthLayout;
