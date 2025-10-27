// File: redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./timerSlice";
import taskReducer from "./taskSlice"; // <-- PASTIKAN SEPERTI INI

export const store = configureStore({
  reducer: {
    timer: timerReducer,
    tasks: taskReducer,
  },
});
