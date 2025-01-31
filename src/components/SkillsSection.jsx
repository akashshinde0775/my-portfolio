import React, { useState } from "react";
import { FaCode, FaDatabase, FaLayerGroup, FaTools } from "react-icons/fa";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillCategories = [
    {
      id: "languages",
      name: "Programming Languages",
      icon: <FaCode size={24} />,
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 80 },
        { name: "R", level: 65 }
      ]
    },
    {
      id: "development",
      name: "Development",
      icon: <FaLayerGroup size={24} />, // Change from FaDatabase
      skills: [
        { name: "Web Development", level: 85 },
        { name: "Android App Development", level: 65 },
        { name: "Machine Learning Model Development", level: 80 }
      ]
    },
    {
      id: "technical",
      name: "Technical",
      icon: <FaTools size={24} />, // Use FaTools instead of FaDatabase
      skills: [
        { name: "Data Structures & Algorithms (DSA)", level: 75 },
        { name: "SQL & NoSQL Databases", level: 85 },
        { name: "Git & GitHub", level: 80 },
        { name: "Operating Systems", level: 90 }
      ]
    },
    {
      id: "frameworks",
      name: "Frameworks & Libraries",
      icon: <FaLayerGroup size={24} />,
      skills: [
        { name: "Bootstrap", level: 95 },
        { name: "Tailwind", level: 80 },
        { name: "ReactJS", level: 85 },
        { name: "YOLO", level: 95 },
        { name: "OpenCV", level: 85 },
        { name: "NumPy & Pandas", level: 80 },
        { name: "Scikit-Learn", level: 75 }
      ]
    }
  ];
  
  const SkillCard = ({ skill }) => (
    <div className="relative w-full bg-gray-800 rounded-lg p-2">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-gray-200">{skill.name}</span>
        <span className="text-xs text-blue-400">{skill.level}%</span>
      </div>
      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );

  const CategoryCard = ({ category }) => (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
          {category.icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{category.name}</h3>
      </div>
      <div className="space-y-4">
        {category.skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 p-6 lg:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Professional Skills
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency 
            across various technologies and tools.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all
              ${
                activeCategory === "all"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
          >
            All
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all
                ${
                  activeCategory === category.id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories
            .filter(
              (category) => activeCategory === "all" || category.id === activeCategory
            )
            .map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
