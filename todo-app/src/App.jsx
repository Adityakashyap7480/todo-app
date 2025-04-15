import { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskItem from "./components/TaskItem/TaskItem";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    const res = await axios.get("https://todo-app-sjrg.onrender.com/tasks");
    setTasks(res.data.tasks);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddOrEdit = () => {
    fetchTasks();
    setEditingTask(null);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task._id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task._id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  console.log(tasks);
  return (
    <div className="container">
      <TaskForm task={editingTask} onSave={handleAddOrEdit} />
      <div>
        {tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            onDelete={handleDelete}
            onToggleComplete={handleToggleComplete}
            onEdit={setEditingTask}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
