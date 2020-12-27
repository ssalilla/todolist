import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Form, Input, Button, Divider } from "antd";
import axios from "../Config/axios";
import ttEdit from "../Pics/ttEdit.jpg";
import { useHistory, withRouter } from "react-router-dom";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegistrationForm = (props) => {
  const [form] = Form.useForm();
  const History = useHistory();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const body = {
      username: values.email,
      password: values.password,
    };
    axios
      .post("/user/Register", body)
      .then((res) => {
        alert("Registered!!");
        props.history.push("/login");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div class="center">
      {" "}
      <img src={ttEdit} alt="tt" width="450" height="auto" />
      <Divider />
      <Form
        {...formItemLayout}
        onFinish={onFinish}
        form={form}
        name="register"
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve(true);
                }
                return Promise.reject(
                  "The two passwords that you entered do not match!"
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button id="Regis" type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default withRouter(RegistrationForm);
