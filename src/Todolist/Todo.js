import React, { useState } from 'react'
import {  Row, Col, Input} from "antd";
import { Button } from "semantic-ui-react";
import axios from 'axios';

export default function Todo(props) {

    const [changeInput, setChangeInput] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    
    const increment = (todo) => {
    
        const newProgress = props.progress + 20;
        todo.isComplete=true
        props.setProgress(newProgress);
      };

    const updateTodoItem = async (id) => {
        await axios.put(`http://localhost:8000/todolist${id}`, {task: changeInput});
        props.fetchData();
        setIsEdit(false);
      };
    
    const toggleEdit = () => {
        setChangeInput(props.todo.task);
        setIsEdit(!isEdit)
      }

      let contents = 

      <Row style={{width: '100%'}}>
      <Col span={14}>
           <Row justify="start">{props.todo.task}</Row>
      </Col>
    
      <Col span="4">
          <Button color="brown" size="mini" disabled={props.todo.isComplete} onClick={() => toggleEdit()}>Edit</Button>
      </Col>

      <Col span={4}>
          <Button disabled={props.todo.isComplete} onClick={()=>{increment(props.todo)}} color="green" size="Mini">
          Completed
          </Button>
          </Col>
      </Row>

      if(isEdit) { contents =
          
          <Row style={{width: '100%'}}>
          <Col span="14">
              <Input value={changeInput} onChange={(e)=> setChangeInput(e.target.value)}/>
          </Col>
          
          <Col span="4">
              <Button color="brown" size="Mini" onClick={() => toggleEdit()}>Done</Button>
          </Col>

      </Row>
      
      }

    return (
        <div style={{width: '100%'}}>

        {contents}

        </div> 



        )
}
