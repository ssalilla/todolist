import React from "react";
import "antd/dist/antd.css";
import "./Login.css";
import { Form, Input, Divider } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import ttEdit from "../Pics/ttEdit.jpg";
import { Button } from "semantic-ui-react";
import axios from "../Config/axios";
import LocalStorageServices from "../services/LocalStorageServices";
import { withRouter } from "react-router-dom";

function Login(props) {
  const onFinish = (values) => {
    const body = {
      username: values.username,
      password: values.password,
    };
    axios
      .post("/user/login", body)
      .then((result) => {
        LocalStorageServices.setToken(result.data.token);
        props.setRole("user");
        props.history.push("/todolist");
      })
      .catch((err) => {
        alert("Login Failed");
      });
  };

  return (
    <div class="center">
      <img src={ttEdit} alt="tt" width="450" height="auto" />
      <Divider />
      <Form
        onFinish={onFinish}
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
          <Button color="teal" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
      <div class="Link">
        <a href="/Register">register now</a>
      </div>
    </div>
  );
}

export { ttEdit };
export default withRouter(Login);
