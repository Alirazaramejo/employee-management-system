import React from 'react';
import { Form, Input, Button, Space, notification } from 'antd';
import { addData } from '../../services/products.service';

const Refer = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      // Check if the input value is not empty
      if (!values.references) {
        throw new Error('Please select your references!');
      }

      // Add data
      await addData(values);

      // Show success notification
      notification.success({
        message: 'Success',
        description: 'Data submitted successfully!',
      });

      // Reset the form fields
      form.resetFields();
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="References"
          name="references"
          rules={[{ required: true, message: 'Please select your references!' }]}
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
    </div>
  );
};

export default Refer;
