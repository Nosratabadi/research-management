import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  ChevronLeft,
  Users,
  Link,
  Edit,
  Archive,
  FilePlus
} from 'lucide-react';

const ProjectProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Sample project data - in a real app, this would come from a database
  const [project] = useState({
    id: 1,
    title: "Data Privacy in IoT Networks",
    description: "Investigating privacy preservation techniques in Internet of Things networks, focusing on data protection mechanisms and user privacy concerns.",
    stage: "Data Collection",
    progress: 35,
    startDate: "2023-09-15",
    expectedEndDate: "2024-12-20",
    lastUpdated: "2024-12-01",
    status: "active",
    priority: "high",
    team: [
      { name: "Dr. Sarah Chen", role: "Advisor" },
      { name: "John Smith", role: "Co-researcher" },
      { name: "Maria Garcia", role: "Statistical Consultant" }
    ],
    tasks: [
      { id: 1, name: "Literature Review", status: "completed", date: "2023-11-01" },
      { id: 2, name: "Methodology Design", status: "completed", date: "2024-01-15" },
      { id: 3, name: "Data Collection", status: "in-progress", date: "2024-12-01" },
      { id: 4, name: "Initial Analysis", status: "pending", date: null },
      { id: 5, name: "Paper Draft", status: "pending", date: null }
    ],
    resources: [
      { type: "paper", name: "Privacy in IoT: A Systematic Review", link: "#" },
      { type: "dataset", name: "IoT Network Logs", link: "#" },
      { type: "code", name: "Analysis Scripts", link: "#" }
    ],
    notes: [
      { date: "2024-12-01", text: "Started processing preliminary data from IoT sensors" },
      { date: "2024-11-28", text: "Meeting with Dr. Chen - discussed methodology refinements" }
    ]
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-500';
      case 'in-progress': return 'text-blue-500';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Dashboard
        </button>
        
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
            <p className="text-gray-600 max-w-2xl">{project.description}</p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-1 px-3 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">
              <Edit className="w-4 h-4" />
              Edit Project
            </button>
            <button className="flex items-center gap-1 px-3 py-2 rounded border border-gray-300 hover:bg-gray-50">
              <Archive className="w-4 h-4" />
              Archive
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Main Content - 2 columns */}
        <div className="col-span-2 space-y-6">
          {/* Progress Overview */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Progress Overview</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Overall Progress</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <p className="text-sm text-gray-600 mt-1">{project.progress}% Complete</p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="p-3 bg-gray-50 rounded">
                  <p className="text-sm text-gray-600">Current Stage</p>
                  <p className="font-medium">{project.stage}</p>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <p className="text-sm text-gray-600">Start Date</p>
                  <p className="font-medium">{project.startDate}</p>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <p className="text-sm text-gray-600">Expected Completion</p>
                  <p className="font-medium">{project.expectedEndDate}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tasks */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Tasks</h2>
              <button className="flex items-center gap-1 text-sm text-blue-500 hover:text-blue-600">
                <FilePlus className="w-4 h-4" />
                Add Task
              </button>
            </div>
            <div className="space-y-3">
              {project.tasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div className="flex items-center gap-3">
                    <CheckCircle className={getStatusColor(task.status)} />
                    <span className="font-medium">{task.name}</span>
                  </div>
                  <span className="text-sm text-gray-600">{task.date || 'Not started'}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Notes & Updates */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Notes & Updates</h2>
              <button className="flex items-center gap-1 text-sm text-blue-500 hover:text-blue-600">
                <FilePlus className="w-4 h-4" />
                Add Note
              </button>
            </div>
            <div className="space-y-4">
              {project.notes.map((note, index) => (
                <div key={index} className="border-l-2 border-blue-500 pl-4">
                  <p className="text-sm text-gray-600">{note.date}</p>
                  <p className="mt-1">{note.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar - 1 column */}
        <div className="space-y-6">
          {/* Team Members */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Research Team</h2>
            <div className="space-y-3">
              {project.team.map((member, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Resources</h2>
            <div className="space-y-3">
              {project.resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.link}
                  className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded"
                >
                  {resource.type === 'paper' ? (
                    <FileText className="w-4 h-4 text-blue-500" />
                  ) : resource.type === 'code' ? (
                    <FileText className="w-4 h-4 text-green-500" />
                  ) : (
                    <Link className="w-4 h-4 text-purple-500" />
                  )}
                  <span className="text-sm">{resource.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectProfile;