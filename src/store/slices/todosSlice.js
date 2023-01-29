import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    list: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions; // برای اینکه addtodo داشته باشم باید action اش رو برگردونم

export default todoSlice.reducer;
