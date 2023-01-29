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
    deleteTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, { payload }) => {
      state.list = state.list.map((todo) => {
        if (todo.id === payload.id) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
      });
    },
    editTodo: (state, { payload }) => {
      state.list = state.list.map((todo) => {
        if (todo.id === payload.id) {
          return {
            ...todo,
            text: payload.text,
          };
        }
      });
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, editTodo } = todoSlice.actions; // برای اینکه addtodo داشته باشم باید action اش رو برگردونم

export default todoSlice.reducer;
