import React from "react";
import { Modal, Form, Input, Spin } from "antd";
import api from "../../../../shared/api";

const { TextArea } = Input;

class ClientForm extends React.Component {
  state = {
    loading: false,
  };

  handleOk = () => {
    this.myForm.submit();
  };

  save = (values) => {
    const { closeModal, selectedClient } = this.props;
    this.setState({ loading: true }, () => {
      setTimeout(async () => {
        try {
          console.log(values);

          if (selectedClient)
            await api.updateClients({ id: selectedClient.id, ...values });
          else await api.addClients(values);

          closeModal(true);
        } catch (error) {}
      }, 1000);
    });
  };

  render() {
    const { visible, selectedClient, closeModal } = this.props;
    const { loading } = this.state;

    return (
      <Modal
        title={
          selectedClient ? `Update '${selectedClient.name}'` : `Add new product`
        }
        visible={visible}
        onOk={this.handleOk}
        onCancel={() => closeModal()}
        okText={selectedClient ? "Update" : "Submit"}
        cancelText="Cancel"
      >
        <Spin spinning={loading} delay={500}>
          <Form
            ref={(e) => {
              this.myForm = e;
            }}
            initialValues={selectedClient}
            onFinish={this.save}
            layout="vertical"
            name="userForm"
          >
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item
              name="address"
              label="Address"
              rules={[{ required: true }]}
            >
              <TextArea autoSize={{ minRows: 3, maxRows: 5 }} />
            </Form.Item>
          </Form>
        </Spin>
      </Modal>
    );
  }
}

export default ClientForm;
