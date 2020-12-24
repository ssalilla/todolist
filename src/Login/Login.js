import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./Login.css";
import { Form, Input, Button, Divider } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import ttEdit from "../Pics/ttEdit.jpg";
import {
  BrowserRouter, Route, Router, Link, useHistory,
} from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <div class="center">
        <img src={ttEdit} alt="tt" width="450" height="auto" />
        <Divider/>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" Link="/todolist">
              Log in
            </Button>
          </Form.Item>
        </Form>
        <div class="Link">
          <a href="/Registration">register now</a>
        </div>
      </div>
    );
  }
}

export { ttEdit };
export default Login;
