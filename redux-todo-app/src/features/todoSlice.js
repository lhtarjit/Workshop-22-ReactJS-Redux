import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};
// const[todoList, setTodoList] = useState([])
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
  },
});

export const {} = todoSlice.actions;

export default todoSlice.reducer;
