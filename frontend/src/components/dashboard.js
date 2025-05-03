import React, { useState } from 'react';
import ProjectCard from './projectcard';
import './dashboard.css';
import TaskList from './tasklist';

const Dashboard = () => {
    
  const [projects, setProjects] = useState([]);

  const handleCreateProject = () => {
    const title = prompt('Enter project title:');
    if (title && projects.length < 4) {
      const newProject = {
        id: Date.now(),
        title,
        tasks: []
      };
      setProjects([...projects, newProject]);
    }
  };

  return (
    <div className="dashboard"> <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Welcome to Your Dashboard</h2>
        <p>Track your projects and tasks with ease</p>
        </div>
        <div className="dashboard-section">
        <TaskList />
        </div>
        </div>
      <h2>My Projects</h2>
      <button onClick={handleCreateProject}>+ New Project</button>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} setProjects={setProjects} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
