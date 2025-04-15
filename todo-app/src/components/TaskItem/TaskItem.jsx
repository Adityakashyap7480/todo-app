import axios from 'axios';

const TaskItem = ({ task, onDelete, onToggleComplete, onEdit }) => {
  const handleDelete = () => {
    axios.delete(`https://todo-app-sjrg.onrender.com/tasks/${task._id}`);
    onDelete(task._id);
  };

  const handleToggleComplete = () => {
    axios.put(`https://todo-app-sjrg.onrender.com/tasks/${task._id}`, { ...task, completed: !task.completed });
    onToggleComplete(task._id);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span>{task.title}</span>
      <div>
        <button onClick={handleToggleComplete} className="complete">
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => onEdit(task)} className="edit">Edit</button>
        <button onClick={handleDelete} className="delete">Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
