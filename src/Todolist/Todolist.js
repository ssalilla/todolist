import React, { useState,useEffect } from "react";
import { List, Row, Col, Divider, Typography } from "antd";
import _ from "lodash";
import bg from "../Pics/bg.jpg";
import Crown from "../Pics/Crown.png";
import "./Todolist.css";
import { Button, Progress } from "semantic-ui-react";
import axios from 'axios';
import Todo from "./Todo"

export default function Todolist() {
  const [todolist, setTodolist] = useState([]);
  const [inputField, setInputField] = useState("");
  const [progress, setProgress] = useState(0);
  const { Text } = Typography;

  const fetchtodolist = async () => {
        const httpResponse = await axios.get("http://localhost:8000/todolist");
        setTodolist(httpResponse.data);
  };

  useEffect(() => {
      fetchtodolist();
  }, []);

  const addTodoItem = async () => {
    await axios.post("http://localhost:8000/todolist", {task: inputField});
    fetchtodolist();
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
          style={{ width: "800px", height: "auto" }}
        />
      </div>
    );
  }

  return (
    <div>

<div id="container" style={{ background: `url(${bg})`,}}></div>

      <Row justify="center">
        <List
          style={{ width: "450px", height: "400px" }}
          header={
            <div style={{ position: "relative", left: "43%" }}>To Do Tasks</div>
          }
          footer={
            <div style={{ position: "relative", left: "30%" }}>
              Five Amazing Things A Day
            </div>
          }
          bordered
          dataSource={todolist}
          renderItem={(todo) => (
            <List.Item>
             <Row style={{ width: "100%" }}>
            
                <Todo setProgress={setProgress} progress={progress} todo={todo} fetchData={fetchtodolist}/>
                
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
                style={{ height: 40, marginTop: -30 }}
                id="Add"
                onClick={addTodoItem}>
                Add
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>

      <Divider />

      <Progress1 progress={progress} />

      <div class="wrapper">
      <button class="goal"><img src={Crown} alt="Goal" Link to="./Goal/Goal.js"/></button></div>
 
    </div>
  );
}
