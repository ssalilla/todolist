import React, { useState } from "react";
import { Row, Col, Input } from "antd";
import { Button } from "semantic-ui-react";
import axios from "../Config/axios";

export default function Todo(props) {
  const [changeInput, setChangeInput] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const increment = (todo) => {
    props.setProgress((preProg) => preProg + 20);
  };

  const updateTodoItem = async (id) => {
    await axios.put(`/todolist${id}`, { task: changeInput });
    props.fetchData();
    setIsEdit(false);
  };

  const toggleEdit = () => {
    setChangeInput(props.todo.task);
    setIsEdit(!isEdit);
  };

  let contents = (
    <Row style={{ width: "100%" }}>
      <Col span={14}>
        <Row justify="start">{props.todo.task}</Row>
      </Col>

      <Col span="4">
        <Button
          color="brown"
          size="mini"
          disabled={props.todo.isComplete}
          onClick={() => toggleEdit()}
          style={{ height: 40, marginTop: -20 }}
        >
          Edit
        </Button>
      </Col>

      <Col span={4}>
        <Button
          disabled={isComplete}
          onClick={() => {
            increment(props.todo);
            setIsComplete(true);
          }}
          color="green"
          size="Mini"
          style={{ height: 40, marginTop: -20 }}
        >
          Completed
        </Button>
      </Col>
    </Row>
  );

  if (isEdit) {
    contents = (
      <Row style={{ width: "100%" }}>
        <Col span="14">
          <Input
            value={changeInput}
            onChange={(e) => setChangeInput(e.target.value)}
          />
        </Col>

        <Col span="4">
          <Button
            color="brown"
            size="Mini"
            onClick={() => toggleEdit()}
            style={{ height: 40, marginTop: -20 }}
          >
            Done
          </Button>
        </Col>
      </Row>
    );
  }

  return <div style={{ width: "100%" }}>{contents}</div>;
}
