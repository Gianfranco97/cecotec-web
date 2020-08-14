import React from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { confirm } = Modal;

function showDeleteConfirm(name, id, onOk) {
  confirm({
    title: "Are you sure delete this client?",
    icon: <ExclamationCircleOutlined />,
    content: `All information of '${name}' will be deleted`,
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk() {
      onOk(id)
    },
  });
}

export default showDeleteConfirm;
