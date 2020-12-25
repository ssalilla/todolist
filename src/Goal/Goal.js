import React from "react";
import Success from "../Pics/Success.jpg";
import "./Goal.css";
import { List, Row, Col, Typography, Text } from "antd";
import { Button } from "semantic-ui-react";
import { useLocation } from "react-router-dom";

export default function Goal() {
  const { Title, Text } = Typography;
  const location = useLocation();

  return (
    <div class="center">
      <img src={Success} alt="ss" width="350" height="auto" />
      <List
        style={{ width: "450px", height: "50px" }}
        header={
          <div style={{ position: "absolute", left: "-8%" }}>
            <Title level={4}>
              <Text mark>(人◕ω◕) Things You've Achieved Today (◕‿◕✿)</Text>
            </Title>
          </div>
        }
      />
      {location.state &&
        location.state.todolist.map((todo) => (
          <List.Item>
            <div justifyItems="center">
              <Col>{todo.task}</Col>
            </div>
          </List.Item>
        ))}

      <Button color="teal" htmlType="submit" className="logout">
        <a href="/">Log Out</a>
      </Button>
    </div>
  );
}
