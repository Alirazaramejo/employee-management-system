import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Button, Space, Spin } from 'antd';
import { getAllData, addFormData } from '../../services/products.service';
const { Option } = Select;

const DataForm = () => {
  const [form] = Form.useForm();
  const [references, setReferences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllData();
        setReferences(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const onFinish = async(values) => {
    try {
      await addFormData(values);
      form.resetFields();
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <Spin spinning={loading}>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please enter a valid email!' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Designation"
          name="designation"
          rules={[{ required: true, message: 'Please select your designation!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="References"
          name="references"
        >
          <Select mode="multiple" style={{ width: '100%' }}>
            {references.map(reference => (
              <Option key={reference.pid} value={reference.references}>{reference.references}</Option>
            ))}
          </Select>
        </Form.Item>
        {/* Add more input fields here */}
        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: 'Please input your address!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Spin>
  );
};

export default DataForm;
