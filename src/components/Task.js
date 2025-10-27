import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";
import styles from "./Task.module.css";
import {
  FaPlusCircle,
  FaEllipsisV,
  FaCaretUp,
  FaCaretDown,
  FaCheckCircle,
} from "react-icons/fa";

const Tasks = () => {
  const [showForm, setShowForm] = useState(false);
  const [taskInput, setTaskInput] = useState("");
  const [pomodoroEstimate, setPomodoroEstimate] = useState(1);

  const { tasks } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleSaveTask = (e) => {
    e.preventDefault();
    if (!taskInput.trim()) return;

    // Kirim data ke Redux
    dispatch(addTask({ text: taskInput, pomodoros: pomodoroEstimate }));

    setTaskInput("");
    setPomodoroEstimate(1);
    setShowForm(false);
  };

  return (
    <div className={styles.tasksContainer}>
      <div className={styles.tasksHeader}>
        <h3>Tasks</h3>
        <button className={styles.menuBtn}>
          <FaEllipsisV />
        </button>
      </div>
      <hr className={styles.divider} />

      <div className={styles.taskList}>
        {tasks.map((task) => (
          <div key={task.id} className={styles.taskItem}>
            <div className={styles.taskContent}>
              <FaCheckCircle className={styles.checkIcon} />
              <span>{task.text}</span>
            </div>
            <div className={styles.taskMeta}>
              <span className={styles.pomodoroCount}>
                {task.completed}/{task.pomodoros}
              </span>
              <button className={styles.taskMenuBtn}>
                <FaEllipsisV />
              </button>
            </div>
          </div>
        ))}
      </div>

      {showForm ? (
        <form className={styles.taskForm} onSubmit={handleSaveTask}>
          <input
            type="text"
            placeholder="Tuliskan Tugas Kamu..."
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            autoFocus
          />
          <div className={styles.formActions}>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className={styles.cancelBtn}
            >
              Cancel
            </button>
            <button type="submit" className={styles.saveBtn}>
              Save
            </button>
          </div>
        </form>
      ) : (
        <button
          className={styles.addTaskButton}
          onClick={() => setShowForm(true)}
        >
          <FaPlusCircle /> Add Task
        </button>
      )}
    </div>
  );
};

export default Tasks;
