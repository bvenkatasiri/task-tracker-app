import React from 'react';

const TaskCard = ({ task }) => {
  return (
    <div className="task-card">
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Created: {task.createdAt}</p>
    </div>
  );
};

export default TaskCard;
