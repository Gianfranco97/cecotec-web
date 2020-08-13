import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import logoIMG from "../../../assets/img/cecotec-logo.jpg";

import "./styles.scss";

class LoginForm extends React.Component {
  onFinish = (values) => {
    console.log("Success:", values);
  };

  render() {
    return (
      <div className="login-page-container">
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
            <a className="login-form-forgot" href="forgot-password">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <a href="register">register now!</a>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default LoginForm;
