import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  // Menyimpan task mana yang sedang aktif dikerjakan
  selectedTaskId: null,
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        text: action.payload.text,
        pomodoros: action.payload.pomodoros,
        completed: 0,
        done: false,
      };
      state.tasks.push(newTask);
    },
    // Tambahkan reducer lain jika perlu, misal: deleteTask, selectTask, etc.
  },
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
