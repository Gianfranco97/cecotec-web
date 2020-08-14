import React from "react";
import { Layout, Menu } from "antd";
import {
  LogoutOutlined,
  UserOutlined,
  HomeOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import logoIMG from "../../assets/img/cecotec-logo.jpg";

import "./styles.scss";

const { Header, Content, Footer, Sider } = Layout;

class AdminLayout extends React.Component {
  handleClick = (url) => {
    const { history } = this.props;
    history.push(url);
  };

  render() {
    const { children, title } = this.props;

    return (
      <Layout className="admin-layout">
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo">
            <img src={logoIMG} alt="cecotec" />
          </div>

          <Menu theme="dark" mode="inline" defaultSelectedKeys={[title]}>
            <Menu.Item
              onClick={() => this.handleClick("/")}
              key="Home"
              icon={<HomeOutlined />}
            >
              Home
            </Menu.Item>

            <Menu.Item
              onClick={() => this.handleClick("/clients")}
              key="Clients"
              icon={<UserOutlined />}
            >
              Clients
            </Menu.Item>

            <Menu.Item
              onClick={() => this.handleClick("/products")}
              key="Products"
              icon={<UnorderedListOutlined />}
            >
              Products
            </Menu.Item>

            <Menu.Item
              key="4"
              icon={<LogoutOutlined />}
              onClick={() => {
                console.log("Logout");
              }}
            >
              Logout
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          >
            <h1 style={{ marginLeft: 20 }}>{title}</h1>
          </Header>
          <Content className="admin-content" style={{ margin: "24px 16px 0" }}>
            <div className="site-layout-background" style={{ padding: 24 }}>
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Gianfranco Manganiello ©2020
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(AdminLayout);
