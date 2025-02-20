import React from 'react';
import { AiOutlineTrophy, AiOutlineCalendar } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import certificate1 from '../assets/certificate1.jpg';
import certificate2 from '../assets/certificate2.jpg';
import certificate3 from '../assets/certificate3.jpg';
import certificate4 from '../assets/certificate4.jpg';
import certificate5 from '../assets/certificate5.pdf';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "AI-Based Surveillance for Exam Integrity: Real-Time Detection of Abnormal Student Behavior",
      provider: "ICSADL (4th International Conference)",
      date: "15 Feb 2025",
      certificatePath: certificate5, 
      badgeColor: "red",
      skills: ["AI", "Python", "OpenCV", "YOLO"],
      description: "Participation in the 4th International Conference showcasing innovative approaches for maintaining exam integrity using AI-based surveillance.",
    },
    {
      id: 2,
      title: "Career Essentials in Generative AI",
      provider: "Microsoft and LinkedIn",
      date: "2 Dec 2024",
      certificatePath: certificate1, 
      badgeColor: "blue",
      skills: ["Computer Ethics", "Artificial Intelligence (AI)", "Generative AI"],
      description: "Certification covering the fundamentals of Generative AI, its applications, and ethical considerations."
    },
    {
      id: 3,
      title: "Machine Learning A-Z",
      provider: "Udemy",
      date: "26 April 2024",
      certificatePath: certificate2, 
      badgeColor: "green",
      skills: ["AI", "Python", "R"],
      description: "Comprehensive course on Machine Learning concepts, covering data preprocessing, regression, classification, and model evaluation."
    },
    {
      id: 4,
      title: "Python (Basics)",
      provider: "Hackerrank",
      date: "30 Nov 2024",
      certificatePath: certificate3, 
      badgeColor: "purple",
      skills: ["Python"],
      description: "Certification demonstrating proficiency in Python basics By solving problems on Hackerrank"
    },
    {
      id: 5,
      title: "Mobile Application Development",
      provider: "Dream Technology Company",
      date: "17 Aug 2022",
      certificatePath: certificate4, 
      badgeColor: "orange",
      skills: ["Java", "XML", "Kotlin"],
      description: "Industrial training certification in mobile app development, focusing on Android app design and implementation using Java and Kotlin."
    },
  ];
  

  const CertificationCard = ({ certification }) => (
    <div className="group bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 
      transform hover:scale-[1.02] transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500/20 
            transition-colors duration-300">
            <AiOutlineTrophy size={24} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">
              {certification.title}
            </h3>
            <p className="text-gray-400 text-sm">{certification.provider}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <AiOutlineCalendar size={16} />
          <span>{certification.date}</span>
        </div>
      </div>

      <p className="text-gray-300 text-sm mb-4">
        {certification.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {certification.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Updated Link to Show Certificate in a New Tab */}
      <a
        href={certification.certificatePath}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 
          hover:text-blue-300 transition-colors"
      >
        View Certificate <FiExternalLink size={16} />
      </a>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 p-6 lg:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional certifications and technical achievements demonstrating expertise 
            across various technologies and platforms.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((certification) => (
            <CertificationCard
              key={certification.id}
              certification={certification}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
