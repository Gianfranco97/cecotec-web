import React from "react";
import { List, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import ClientForm from "./ClientForm";
import confirmDeleteClient from "./confirmDeleteClient";
import AdminLayout from "../../../components/AdminLayout";
import api from "../../../shared/api-graphql";
import "./styles.scss";

class ClientsPage extends React.Component {
  state = {
    loading: true,
    showFormModal: false,
    data: [],
    selectedClient: null,
  };

  componentDidMount() {
    this.getData();
  }

  deleteProduct = (id) => {
    this.setState({ loading: true }, async () => {
      try {
        await api.deleteClient(id);

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
    this.setState({ showFormModal: false, selectedClient: null });
  };

  render() {
    const { loading, data, showFormModal, selectedClient } = this.state;

    return (
      <AdminLayout title="Clients">
        <List
          className="my-list"
          loading={loading}
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              key={`client-${item.id}`}
              id={`client-${item.name}`.replace(" ", "-")}
              actions={[
                <Button
                  type="link"
                  onClick={() => {
                    this.setState({
                      selectedClient: item,
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
                title={item.name}
                description={
                  <>
                    <b>Address: </b> {item.address} <br />
                  </>
                }
              />
            </List.Item>
          )}
        />

        <Button onClick={() => this.setState({ showFormModal: true })}>
          + ADD CLIENT
        </Button>

        {showFormModal && (
          <ClientForm
            visible
            closeModal={this.closeModal}
            selectedClient={selectedClient}
          />
        )}
      </AdminLayout>
    );
  }
}

export default ClientsPage;
