import React from "react";
import { List } from "antd";
import { ShoppingFilled } from '@ant-design/icons';
import AdminLayout from "../../../components/AdminLayout";
import api from "../../../shared/api";
import "./styles.scss";

class ProductsPage extends React.Component {
  state = {
    initLoading: true,
    loading: false,
    data: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const res = await api.getProducts();
      console.log(res);

      this.setState({
        initLoading: false,
        data: res,
      });
    } catch (error) {}
  };

  render() {
    const { initLoading, loading, data } = this.state;

    return (
      <AdminLayout title="Products">
        <List
          className="demo-loadmore-list"
          loading={initLoading}
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              key={`product-${item.id}`}
              actions={[
                <a key="list-loadmore-edit">edit</a>,
                <a key="list-loadmore-more">delete</a>,
              ]}
            >
              <List.Item.Meta
                avatar={
                  <ShoppingFilled style={{ fontSize: '22px' }}/>
                }
                title={<h3><a href="https://ant.design">{item.name}</a></h3>}
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
      </AdminLayout>
    );
  }
}

export default ProductsPage;
