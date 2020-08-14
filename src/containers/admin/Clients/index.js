import React from "react";
import { List, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import ClientForm from "./ClientForm";
import confirmDeleteClient from "./confirmDeleteClient";
import AdminLayout from "../../../components/AdminLayout";
import api from "../../../shared/api";
import "./styles.scss";

class ClientsPage extends React.Component {
  state = {
    loading: true,
    showFormModal: false,
    data: [],
    selectedProduct: null,
  };

  componentDidMount() {
    this.getData();
  }

  deleteProduct = (id) => {
    this.setState({ loading: true }, async () => {
      try {
        await api.deleteClients(id);

        this.getData();
      } catch (error) {}
    });
  };

  getData = () => {
    this.setState({ loading: true }, () => {
      setTimeout(async () => {
        try {
          const res = await api.getClients();

          this.setState({
            loading: false,
            data: res,
          });
        } catch (error) {}
      }, 1000);
    });
  };

  closeModal = (update) => {
    if (update) this.getData();
    this.setState({ showFormModal: false, selectedProduct: null });
  };

  render() {
    const { loading, data, showFormModal, selectedProduct } = this.state;

    return (
      <AdminLayout title="Clients">
        <List
          className="demo-loadmore-list"
          loading={loading}
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              key={`product-${item.id}`}
              actions={[
                <Button
                  type="link"
                  onClick={() => {
                    this.setState({
                      selectedProduct: item,
                      showFormModal: true,
                    });
                  }}
                >
                  edit
                </Button>,
                <Button
                  type="link"
                  onClick={() =>
                    confirmDeleteClient(item.name, item.id, this.deleteProduct)
                  }
                >
                  delete
                </Button>,
              ]}
            >
              <List.Item.Meta
                avatar={<UserOutlined style={{ fontSize: "22px" }} />}
                title={<a href="https://ant.design">{item.name}</a>}
                description={
                  <>
                    <b>Email: </b> {item.email} <br />
                  </>
                }
              />
            </List.Item>
          )}
        />

        <Button onClick={() => this.setState({ showFormModal: true })}>
          + ADD PRODUCT
        </Button>

        {showFormModal && (
          <ClientForm
            visible
            closeModal={this.closeModal}
            selectedProduct={selectedProduct}
          />
        )}
      </AdminLayout>
    );
  }
}

export default ClientsPage;
