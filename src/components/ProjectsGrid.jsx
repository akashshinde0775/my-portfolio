import React, { useState } from 'react';
import { FaGithub, FaEye } from 'react-icons/fa'; 
import { AiOutlineLink } from 'react-icons/ai'; 

// Import images
import esharkImage from "../assets/eshark.png";
import faceDetectionImage from "../assets/face detection.webp";
import studentAbnormalImage from "../assets/student abnormal.jpg";

const ProjectsGrid = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Shark Platform",
      description: "A full-stack e-commerce platform designed with real-time inventory management and payment processing features, built using modern technologies for a seamless shopping experience.",
      image: esharkImage,
      category: "web",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP"
      ],
      liveUrl: "https://github.com/akashshinde0775/e-shark-platform.git",
      githubUrl: "https://github.com/akashshinde0775/e-shark-platform.git",
    },
    {
      id: 2,
      title: "AI-Based Surveillance for Exam Integrity: Real-Time Detection of Abnormal Student Behavior",
      description: "A machine learning-based system for detecting abnormal student behavior during exams, including unauthorized device usage and suspicious actions in real-time.",
      image: studentAbnormalImage,
      category: "ai",
      technologies: [
        "Python",
        "YOLO",
        "React"
      ],
      liveUrl: "https://github.com/akashshinde0775/Student-Abnormal-Behavior-Detection.git",
      githubUrl: "https://github.com/akashshinde0775/Student-Abnormal-Behavior-Detection.git",
    },
    {
      id: 3,
      title: "Face Detection",
      description: "A face detection application that uses computer vision algorithms to detect and track human faces in real-time from video streams.",
      image: faceDetectionImage,
      category: "ai",
      technologies: [
        "OpenCV",
        "Python",
        "Haarcascade"
      ],
      liveUrl: "https://github.com/akashshinde0775/Face-Detection-project.git",
      githubUrl: "https://github.com/akashshinde0775/Face-Detection-project.git",
    }, 
  ];
  

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'web', name: 'Web Projects' },
    { id: 'android', name: 'Android Projects' },
  ];

  const ProjectCard = ({ project }) => (
    <div className="group bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-colors"
          >
            <FaEye size={20} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition-colors"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
        >
          View Project <AiOutlineLink size={16} />
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 p-6 lg:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of my recent work across various domains and technologies.
            Each project represents a unique challenge and solution.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                ${activeFilter === category.id 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects
            .filter(project => activeFilter === 'all' || project.category === activeFilter)
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gray-800 text-white rounded-lg font-medium 
            transform transition-all duration-200 hover:bg-gray-700
            focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900">
            Load More Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsGrid;
