import React, { useState } from "react";
import "../App.css"; // make sure this is imported
function TaskManager() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleAddTask() {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  }

  function handleDeleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <div className="task-container">
      <h2>Intern Task Manager</h2>

      <div className="task-input">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      {tasks.length === 0 ? (
        <p className="no-task">No tasks added yet.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => handleDeleteTask(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskManager;
