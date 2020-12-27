import React, { useState } from "react";
import { Row, Col, Input } from "antd";
import { Button } from "semantic-ui-react";
import axios from "../Config/axios";

export default function Todo(props) {
  const [changeInput, setChangeInput] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const increment = async (todo) => {
    await axios.put(`/todolist/${todo.id}`, {
      task: todo.task,
      isComplete: true,
    });
    props.fetchData();
  };

  const updateTodoItem = async (todo) => {
    await axios.put(
      `/todolist/${todo.id}`,
      { task: changeInput },
      { isComplete: todo.isComplete }
    );
    props.fetchData();
    setIsEdit(false);
    toggleEdit();
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
          disabled={props.todo.isComplete}
          onClick={() => {
            increment(props.todo);
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
            onClick={() => updateTodoItem(props.todo)}
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
