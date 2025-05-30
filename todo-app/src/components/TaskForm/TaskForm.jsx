import { useState } from "react";
import axios from "axios";

const TaskForm = ({ task, onSave }) => {
  const [title, setTitle] = useState(task ? task.title : "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return;
    const newTask = { title };
    if (task) {
      await axios.put(`https://todo-app-sjrg.onrender.com/tasks/${task._id}`, newTask);
    } else {
      await axios.post("https://todo-app-sjrg.onrender.com/tasks", newTask);
    }
    setTitle("");
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Task"
      />
      <button type="submit">{task ? "Update" : "Add"} Task</button>
    </form>
  );
};

export default TaskForm;
