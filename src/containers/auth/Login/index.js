import React from "react";
import { Form, Input, Button, Spin } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link, withRouter } from "react-router-dom";
import logoIMG from "../../../assets/img/cecotec-logo.jpg";
import api from "../../../shared/api";

import "./styles.scss";

class LoginPage extends React.Component {
  state = { loading: false };

  onFinish = (values) => {
    const { history } = this.props;

    this.setState({ loading: true }, () => {
      // setTimeout Used only to simulate a more realistic response time
      setTimeout(async () => {
        try {
          await api.login(values.username, values.password);
          this.setState({ loading: false });

          history.push("/admin");
        } catch (error) {
          console.log(error);
          this.setState({ loading: false });
        }
      }, 1000);
    });
  };

  loginPassword = () => (
    <Form className="login-form" onFinish={this.onFinish}>
      <div className="login-form-logo">
        <img src={logoIMG} alt="cecotec" />
      </div>

      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Link to="forgot-password" className="login-form-forgot">
        Forgot password
      </Link>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );

  render() {
    const { loading } = this.state;
    return (
      <div className="login-page-container">
        <Spin spinning={loading} delay={500}>
          {this.loginPassword()}
        </Spin>
      </div>
    );
  }
}

export default withRouter(LoginPage);
