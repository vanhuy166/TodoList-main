import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Todo from "../Todo";

/////////////////////Redux Core//////////////////
// import { addTodo } from "../../redux/actions";
/////////////////////////////////////////////////

//////////////////Redux Toolkit//////////////////
import todosSlice from "./todosSlice";
/////////////////////////////////////////////////

import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { todoRemainingSelector } from "../../redux/selectors";

function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const dispatch = useDispatch();
  const todoList = useSelector(todoRemainingSelector);

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };

  const handleSelectChange = (value) => {
    setPriority(value);
  };

  //////////////////Redux Toolkit//////////////////
  // const handleAddButtonClick = () => {
  //   dispatch(
  //    addTodo({
  //       id: uuidv4(),
  //       name: todoName,
  //       priority: priority,
  //       completed: false,
  //     })
  //   );
  //   setTodoName("");
  //   setPriority("Medium");
  // };
  /////////////////////////////////////////////////

  //////////////////Redux Toolkit//////////////////
  const handleAddButtonClick = () => {
    dispatch(
      todosSlice.actions.addTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );
    setTodoName("");
    setPriority("Medium");
  };
  /////////////////////////////////////////////////

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              name={todo.name}
              priority={todo.priority}
              completed={todo.completed}
            />
          );
        })}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handleSelectChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}

export default TodoList;
