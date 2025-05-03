import React, { useState } from 'react';
import TaskCard from './taskcard';

const ProjectCard = ({ project, setProjects }) => {
  const [tasks, setTasks] = useState(project.tasks);

  const addTask = () => {
    const title = prompt('Task title:');
    const description = prompt('Task description:');
    if (title && description) {
      const newTask = {
        id: Date.now(),
        title,
        description,
        status: 'Pending',
        createdAt: new Date().toLocaleDateString()
      };
      setTasks([...tasks, newTask]);
    }
  };

  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <button onClick={addTask}>+ Add Task</button>
      <div className="task-list">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
