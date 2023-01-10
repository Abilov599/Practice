import React, { useState } from "react";
import { Button, Form, Input, Space } from "antd";
import { useDispatch } from "react-redux";
import { addCustomerAction } from "../../redux/action/customers.actions";

const AddCustomer = () => {
  const dispatch = useDispatch();
  const [companyNameValue, setCompanyNameValue] = useState(null);
  const [contactTitleValue, setContactTitleValue] = useState(null);
  const [cityValue, setCityValue] = useState(null);
  const [countryValue, setCountryValue] = useState(null);
  const onFinish = () => {
    let obj = {
      companyName: companyNameValue,
      contactTitle: contactTitleValue,
      address: {
        city: cityValue,
        country: countryValue,
      },
    };
    dispatch(addCustomerAction(obj));
  };
  return (
    <div style={{ maxWidth: "500px" }}>
      <Form
        onFinish={onFinish}
        name="complex-form"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
      >
        <Form.Item label="Company Name">
          <Space>
            <Form.Item
              name="companyName"
              noStyle
              rules={[
                {
                  required: true,
                  message: "Company Name is required",
                },
              ]}
            >
              <Input
                onChange={(e) => {
                  setCompanyNameValue(e.target.value);
                }}
                style={{
                  width: 160,
                }}
                placeholder="Please input"
              />
            </Form.Item>
          </Space>
        </Form.Item>
        <Form.Item label="Contact Title">
          <Space>
            <Form.Item
              name="contactTitle"
              noStyle
              rules={[
                {
                  required: true,
                  message: "Contact Title is required",
                },
              ]}
            >
              <Input
                onChange={(e) => {
                  setContactTitleValue(e.target.value);
                }}
                style={{
                  width: 160,
                }}
                placeholder="Please input"
              />
            </Form.Item>
          </Space>
        </Form.Item>
        <Form.Item label="City">
          <Space>
            <Form.Item
              name="city"
              noStyle
              rules={[
                {
                  required: true,
                  message: "City is required",
                },
              ]}
            >
              <Input
                onChange={(e) => {
                  setCityValue(e.target.value);
                }}
                style={{
                  width: 160,
                }}
                placeholder="Please input"
              />
            </Form.Item>
          </Space>
        </Form.Item>
        <Form.Item label="Country">
          <Space>
            <Form.Item
              name="country"
              noStyle
              rules={[
                {
                  required: true,
                  message: "Country is required",
                },
              ]}
            >
              <Input
                onChange={(e) => {
                  setCountryValue(e.target.value);
                }}
                style={{
                  width: 160,
                }}
                placeholder="Please input"
              />
            </Form.Item>
          </Space>
        </Form.Item>

        <Form.Item label=" " colon={false}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddCustomer;
