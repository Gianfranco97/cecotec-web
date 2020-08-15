import React from "react";
import { Modal, Form, Input, InputNumber, Spin } from "antd";
import PropTypes from "prop-types";
import api from "../../../../shared/api-rest";

class ProductForm extends React.Component {
  state = {
    loading: false,
  };

  handleOk = () => {
    this.myForm.submit();
  };

  save = (values) => {
    const { closeModal, selectedProduct } = this.props;
    this.setState({ loading: true }, () => {
      setTimeout(async () => {
        try {
          if (selectedProduct)
            await api.updateProduct({ id: selectedProduct.id, ...values });
          else await api.addProduct(values);

          closeModal(true);
        } catch (error) {}
      }, 1000);
    });
  };

  render() {
    const { visible, selectedProduct, closeModal } = this.props;
    const { loading } = this.state;

    return (
      <Modal
        title={
          selectedProduct
            ? `Update '${selectedProduct.name}'`
            : `Add new product`
        }
        visible={visible}
        onOk={this.handleOk}
        onCancel={() => closeModal()}
        okText={selectedProduct ? "Update" : "Submit"}
        cancelText="Cancel"
      >
        <Spin spinning={loading} delay={500}>
          <Form
            ref={(e) => {
              this.myForm = e;
            }}
            initialValues={selectedProduct}
            onFinish={this.save}
            layout="vertical"
            name="userForm"
          >
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="price" label="Price" rules={[{ required: true }]}>
              <InputNumber min={0} />
            </Form.Item>
            <Form.Item
              name="quantity"
              label="Quantity"
              rules={[{ required: true }]}
            >
              <InputNumber min={0} />
            </Form.Item>
          </Form>
        </Spin>
      </Modal>
    );
  }
}

ProductForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
  visible: PropTypes.element.isRequired,
  selectedProduct: PropTypes.object,
};

export default ProductForm;
