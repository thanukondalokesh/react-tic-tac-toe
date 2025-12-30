import React, { useState, useEffect } from "react";
import "../App.css";

function TaskManager() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleAddOrUpdateTask() {
  if (task.trim() === "") return;

  if (editIndex !== null) {
    // UPDATE TASK
    const updatedTasks = [...tasks];
    updatedTasks[editIndex] = task;
    setTasks(updatedTasks);
    setEditIndex(null);

    alert("Task updated successfully"); // ✅ popup
  } else {
    // ADD TASK
    setTasks([...tasks, task]);

    alert("New task added successfully"); // ✅ popup
  }

  setTask("");
}


  function handleEditTask(index) {
    setTask(tasks[index]);
    setEditIndex(index);
  }

  function handleDeleteTask(index) {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this task?"
  );

  if (!confirmDelete) return;

  const updatedTasks = tasks.filter((_, i) => i !== index);
  setTasks(updatedTasks);

  alert("Task deleted successfully");
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

        {/* Add / Update Button */}
        <button className="btn-add" onClick={handleAddOrUpdateTask}>
          {editIndex !== null ? "Update Task" : "Add Task"}
        </button>
      </div>

      {tasks.length === 0 ? (
        <p className="no-task">No tasks added yet.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((item, index) => (
            <li key={index}>
              {/* 👇 IMPORTANT FIX */}
              <span className="task-text">{item}</span>

              <div className="task-actions">
                <button
                  className="btn-edit"
                  onClick={() => handleEditTask(index)}
                >
                  Edit
                </button>

                <button
                  className="btn-delete"
                  onClick={() => handleDeleteTask(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskManager;
