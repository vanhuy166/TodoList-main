import { Row, Tag, Checkbox } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
/////////////////////Redux Core//////////////////
// import { toggleTodoStatus } from "../../redux/actions";
/////////////////////////////////////////////////

//////////////////Redux Toolkit//////////////////
import todosSlice from "../TodoList/todosSlice";
/////////////////////////////////////////////////

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ name, priority, completed, itemIndex }) {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(completed);

  /////////////////////Redux Core//////////////////
  // const toggleCheckbox = () => {
  //   setChecked(!checked);
  //   dispatch(toggleTodoStatus(id));
  // };
  /////////////////////////////////////////////////

  //////////////////Redux Toolkit//////////////////
  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(todosSlice.actions.toggleTodoStatus(itemIndex));
  };

  const handleRemoveTodoClick = () => {
    dispatch(todosSlice.actions.removeTodo(itemIndex));
  };
  /////////////////////////////////////////////////

  return (
    <div style={{ position: "relative", marginBottom: 12 }}>
      <Row
        justify="space-between"
        style={{
          ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
        }}
      >
        <Checkbox checked={checked} onChange={toggleCheckbox}>
          {name}
        </Checkbox>
        <Tag
          color={priorityColorMapping[priority]}
          style={{ marginRight: "50px" }}
        >
          {priority}
        </Tag>
      </Row>
      <Tag
        style={{
          margin: 0,
          position: "absolute",
          right: 0,
          top: 0,
          fontWeight: "bold",
          cursor: "pointer",
          display: "block",
        }}
        onClick={handleRemoveTodoClick}
      >
        X
      </Tag>
    </div>
  );
}
