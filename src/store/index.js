import { configureStore } from "@reduxjs/toolkit";
import todosReduser from "./slices/todosSlice";

export const store = configureStore({
  reducer: {
    todos: todosReduser,
  },
});
