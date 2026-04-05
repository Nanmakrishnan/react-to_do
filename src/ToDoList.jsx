import React, { useState } from 'react';
import { db } from './firebase';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(null);
  const [editValue, setEditValue] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
  }

  function handleEdit(index) {
    if (isEditing === index) {
      const updatedTasks = [...tasks];
      updatedTasks[index] = editValue;
      setTasks(updatedTasks);
      setIsEditing(null);
    } else {
      setIsEditing(index);
      setEditValue(tasks[index]);
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    if (isEditing === index) setIsEditing(null);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className='to-do-list'>
      <h1>To-Do-List</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className='add-button' onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <div className="text-container">
              {isEditing === index ? (
                <input
                  className="edit-input"
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  autoFocus
                />
              ) : (
                <span className='text'>{task}</span>
              )}
            </div>

            <div className="button-group">
              <button className='edit-toggle-btn' onClick={() => handleEdit(index)}>
                {isEditing === index ? "✔️" : "✏️"}
              </button>
              
              <button className='delete-button' onClick={() => deleteTask(index)}>
                🗑️
              </button>
              
              <button className='move-button' onClick={() => moveTaskUp(index)}>⬆️</button>
              <button className='move-button' onClick={() => moveTaskDown(index)}>⬇️</button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;