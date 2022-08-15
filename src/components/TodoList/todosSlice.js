/////////////////////Redux Core//////////////////
// const initState = [
//   {
//     id: 1,
//     name: "aaaa",
//     completed: false,
//     priority: "High",
//   },
//   {
//     id: 2,
//     name: "bbbb",
//     completed: true,
//     priority: "Medium",
//   },
//   {
//     id: 3,
//     name: "xxxxx",
//     completed: false,
//     priority: "Low",
//   },
// ];

// const todoListReducer = (state = initState, action) => {
//   // console.log(state, action);
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];

//     case "todoList/toggleTodoStatus":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );

//     default:
//       return state;
//   }
// };

// export default todoListReducer;
////////////////////////////////////////////////////

/////////////////////Redux Toolkit//////////////////
import { createSlice } from "@reduxjs/toolkit";

import storage from "../../util/storage";

const todosSlice = createSlice({
  name: "todoList",
  initialState: storage.get(),
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      storage.set(state);
    },
    toggleTodoStatus: (state, action) => {
      state[action.payload].completed = !state[action.payload].completed;
      storage.set(state);
    },
    removeTodo: (state, action) => {
      state.splice(action.payload, 1);
      storage.set(state);
    },
  },
});

export default todosSlice;
////////////////////////////////////////////////////
