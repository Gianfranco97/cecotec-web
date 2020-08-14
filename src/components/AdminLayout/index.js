import React from "react";
import { Layout, Menu } from "antd";
import {
  LogoutOutlined,
  UserOutlined,
  HomeOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";

import "./styles.scss";

const { Header, Content, Footer, Sider } = Layout;

export default ({ children }) => (
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
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          Clients
        </Menu.Item>
        <Menu.Item key="3" icon={<UnorderedListOutlined />}>
          Products
        </Menu.Item>
        <Menu.Item key="4" icon={<LogoutOutlined />}>
          Logout
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header
        className="site-layout-sub-header-background"
        style={{ padding: 0 }}
      />
      <Content style={{ margin: "24px 16px 0" }}>
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
