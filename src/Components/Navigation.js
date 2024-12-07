import React from 'react';
import { Link } from 'react-router-dom';
import { Home, BookOpen, Users } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-500" />
              <span className="ml-2 font-bold text-xl">ResearchFlow</span>
            </Link>
            
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className="inline-flex items-center px-1 pt-1 text-gray-900"
              >
                <Home className="h-4 w-4 mr-1" />
                Dashboard
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-900"
              >
                <Users className="h-4 w-4 mr-1" />
                Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;