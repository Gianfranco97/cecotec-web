import React from "react";
import { Form, Input, Button, Spin } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import logoIMG from "../../../assets/img/cecotec-logo.jpg";

import "./styles.scss";

class ForgotPage extends React.Component {
  state = {
    emailSent: false,
    loading: false,
  };

  onFinish = (values) => {
    this.setState({ loading: true }, () => {
      setTimeout(() => {
        this.setState({
          loading: false,
          emailSent: true,
        });
      }, 1000);
    });
  };

  message = () => (
    <div className="forgot-form">
      <h2>Message sent successfully</h2>
      <p>
        <b>Note: </b> This message is a lie, for the moment this is just a test.
        Maybe in the future if I am hired I will make this feature ^_^
      </p>

      <Link to="/">
        <Button type="primary" className="forgot-form-button">
          Go to Login
        </Button>
      </Link>
    </div>
  );

  forgotForm = () => (
    <div className="forgot-form">
      <div className="forgot-form-logo">
        <img src={logoIMG} alt="cecotec" />
      </div>

      <Form onFinish={this.onFinish}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            type="email"
            placeholder="Your Email"
          />
        </Form.Item>
        <Link className="forgot-form-login" to="/">
          Go to login
        </Link>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="forgot-form-button"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );

  render() {
    const { emailSent, loading } = this.state;

    return (
      <div className="forgot-page-container">
        <Spin spinning={loading} delay={500}>
          {!emailSent ? this.forgotForm() : this.message()}
        </Spin>
      </div>
    );
  }
}

export default ForgotPage;
