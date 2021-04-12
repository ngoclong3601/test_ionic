import React from 'react'

import { Form, Input, Button, } from 'antd';
import { useStoreState, useStoreActions } from 'easy-peasy';

const AddProduct = () => {
  const products = useStoreState((state) => state.products);
  const { saveAddProduct } = useStoreActions((actions) => ({
    saveAddProduct: actions.saveAddProduct,
  }));

  const onFinish = (values) => {
    console.log('Success:', values);
    saveAddProduct(values)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return <Form
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
  >
    <Form.Item
      label="Product name"
      name="name"
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Product price"
      name="price"
    >
      <Input />
    </Form.Item>

    <Form.Item >
      <Button type="primary" htmlType="submit">
        Create
        </Button>
    </Form.Item>
  </Form>


}
export default AddProduct;