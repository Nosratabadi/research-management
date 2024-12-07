import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Clock, Target, AlertCircle, CheckCircle } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [projects] = useState([
    {
      id: 1,
      title: "Data Privacy in IoT Networks",
      stage: "Data Collection",
      progress: 35,
      lastUpdated: "2024-12-01",
      status: "active",
      tasks: ["Literature Review ✓", "Methodology Design ✓", "Data Collection (In Progress)"],
      priority: "high"
    },
    {
      id: 2,
      title: "AI Ethics in Business",
      stage: "Analysis",
      progress: 65,
      lastUpdated: "2024-12-04",
      status: "active",
      tasks: ["Literature Review ✓", "Survey Design ✓", "Data Collection ✓"],
      priority: "medium"
    }
  ]);

  const getStatusColor = (progress) => {
    if (progress < 30) return 'bg-red-500';
    if (progress < 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high':
        return <AlertCircle className="text-red-500" />;
      case 'medium':
        return <Clock className="text-yellow-500" />;
      default:
        return <Target className="text-blue-500" />;
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Research Projects</h1>
        <p className="text-gray-600">Track and manage your ongoing research</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
            onClick={() => navigate(`/project/${project.id}`)}
          >
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                {getPriorityIcon(project.priority)}
              </div>
              
              <p className="text-sm text-gray-600 mb-4">Stage: {project.stage}</p>
              
              <div className="mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`${getStatusColor(project.progress)} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <p className="text-sm text-gray-600 mt-1">{project.progress}% Complete</p>
              </div>

              <div className="space-y-2">
                {project.tasks.slice(-3).map((task, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    {task.includes('✓') ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <Clock className="w-4 h-4 text-blue-500" />
                    )}
                    {task}
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t flex justify-between items-center text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <FileText className="w-4 h-4" />
                  Last updated: {project.lastUpdated}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;