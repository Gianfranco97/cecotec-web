import React from "react";
import { List, Button } from "antd";
import { ShoppingFilled } from "@ant-design/icons";
import ProductForm from "./ProductForm";
import confirmDeleteProduct from "./confirmDeleteProduct";
import AdminLayout from "../../../components/AdminLayout";
import api from "../../../shared/api-rest";
import "./styles.scss";

class ProductsPage extends React.Component {
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
        await api.deleteProduct(id);

        this.getData();
      } catch (error) {}
    });
  };

  getData = () => {
    this.setState({ loading: true }, () => {
      setTimeout(async () => {
        try {
          const res = await api.getProducts();

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
      <AdminLayout title="Products">
        <List
          className="my-list"
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
                    confirmDeleteProduct(item.name, item.id, this.deleteProduct)
                  }
                >
                  delete
                </Button>,
              ]}
            >
              <List.Item.Meta
                avatar={<ShoppingFilled style={{ fontSize: "22px" }} />}
                title={item.name}
                description={
                  <>
                    <b>Price: </b> {item.price} <br />
                    <b>Quantity: </b> {item.quantity}
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
          <ProductForm
            visible
            closeModal={this.closeModal}
            selectedProduct={selectedProduct}
          />
        )}
      </AdminLayout>
    );
  }
}

export default ProductsPage;
