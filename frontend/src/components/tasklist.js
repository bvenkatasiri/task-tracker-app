import React, { useState } from 'react';
import './TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    status: 'Pending',
  });

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    const createdTask = {
      ...newTask,
      id: Date.now(),
      createdAt: new Date().toLocaleString(),
      completedAt: '',
    };
    setTasks([...tasks, createdTask]);
    setNewTask({ title: '', description: '', status: 'Pending' });
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleStatusChange = (id) => {
    setTasks(tasks.map(task =>
      task.id === id
        ? { ...task, status: 'Completed', completedAt: new Date().toLocaleString() }
        : task
    ));
  };

  return (
    <div className="task-container">
      <h3>My Tasks</h3>

      <div className="task-form">
        <input type="text" name="title" value={newTask.title} placeholder="Task title" onChange={handleChange} />
        <input type="text" name="description" value={newTask.description} placeholder="Description" onChange={handleChange} />
        <button onClick={handleAdd}>Add Task</button>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <div>
              <strong>{task.title}</strong> - {task.description}
              <div>Status: {task.status}</div>
              <div>Created: {task.createdAt}</div>
              {task.completedAt && <div>Completed: {task.completedAt}</div>}
            </div>
            <div>
              {task.status === 'Pending' && (
                <button onClick={() => handleStatusChange(task.id)}>Mark Completed</button>
              )}
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
