import React, { useState, useEffect } from "react";
import { List, Row, Col, Divider, Typography } from "antd";
import bg from "../Pics/bg.jpg";
import Crown from "../Pics/Crown.png";
import "./Todolist.css";
import { Button, Progress } from "semantic-ui-react";
import axios from "../Config/axios";
import Todo from "./Todo";
import { BrowserRouter, Route, Link, useHistory } from "react-router-dom";

export default function Todolist() {
  const [todolist, setTodolist] = useState([]);
  const [inputField, setInputField] = useState("");
  const [progress, setProgress] = useState(0);
  const { Text, Title } = Typography;
  const history = useHistory();

  const fetchtodolist = async () => {
    const httpResponse = await axios.get("/todolist");
    setTodolist(httpResponse.data);
    return httpResponse.data;
  };

  useEffect(() => {
    fetchtodolist();
  }, []);

  const addTodoItem = async () => {
    setInputField("")
    const todoList = await fetchtodolist();
    if (todoList.length >= 5) {
      alert("(人◕ω◕) 5 Tasks A Day Is Enough, Rest Some Too.(◕‿◕✿) ");
    } else {
      if (inputField === "") {
        return alert("Please kindly input your task (◕‿◕✿)");
      }
      await axios.post("/todolist", { task: inputField });
      fetchtodolist();
    }
  };

  function Progress1(props) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Progress
          percent={props.progress}
          indicating
          style={{ width: "80%", height: "auto" }}
        />
      </div>
    );
  }

  function isAble(props) {
    if (progress < 100) {
      return alert("Please FulFill Your Tasks(ㆁᴗㆁ✿)");
    }
    history.push("/goal", {todolist})
  }

  return (
    <div>
      <div id="container" style={{ background: `url(${bg})` }}></div>

      <Row justify="center">
        <List
          style={{ width: "450px", height: "400px" }}
          header={
            <div style={{ position: "relative", left: "37%" }}>
              <Title level={3}>To Do Tasks</Title>
            </div>
          }
          footer={
            <div style={{ position: "relative", left: "22%" }}>
              <Title level={4}>Five Amazing Things A Day</Title>
            </div>
          }
          bordered
          dataSource={todolist}
          renderItem={(todo) => (
            <List.Item>
              <Row style={{ width: "100%" }}>
                <Todo
                  setProgress={setProgress}
                  progress={progress}
                  todo={todo}
                  fetchData={fetchtodolist}
                />
              </Row>
            </List.Item>
          )}
        />
      </Row>

      <Divider />

      <Row justify="center">
        <Col>
          <Row>
            <Text mark>Your Daily Tasks:</Text>
          </Row>
          <Row style={{ width: "100%" }} justify="center">
            <Col>
              <input
                size="50"
                value={inputField}
                onChange={(e) => setInputField(e.target.value)}
                placeholder="Do Everyday."
              />
            </Col>

            <Col>
              <Button
                color="teal"
                type="submit"
                style={{ height: 40, marginTop: -20 }}
                id="Add"
                onClick={addTodoItem}
              >
                Add
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>

      <Divider />

      <Progress1 progress={progress} />

      <div class="wrapper">
        <Button onClick={() => isAble()}>
            <img class="goal" src={Crown} alt="Goal" />
        </Button>
      </div>
    </div>
  );
}
