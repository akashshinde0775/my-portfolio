import React, { useState } from "react";
import { FaCode, FaLayerGroup, FaTools } from "react-icons/fa";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillCategories = [
    {
      id: "languages",
      name: "Programming Languages",
      icon: <FaCode size={24} />,
      skills: ["Java", "Python", "R", "SQL"]
    },
    {
      id: "development",
      name: "Development",
      icon: <FaLayerGroup size={24} />,
      skills: ["AI Model Development", "Web Development", "Android App Development"]
    },
    {
      id: "technical",
      name: "Technical Skills",
      icon: <FaTools size={24} />,
      skills: ["Data Structures & Algorithms (DSA)", "SQL & NoSQL Databases", "Git & GitHub", "Operating Systems"]
    },
    {
      id: "frameworks",
      name: "Frameworks & Libraries",
      icon: <FaLayerGroup size={24} />,
      skills: ["YOLO", "OpenCV", "NumPy & Pandas", "Scikit-Learn", "Bootstrap", "Tailwind", "ReactJS"]
    }
  ];

  const SkillCard = ({ skill }) => (
    <div className="px-5 py-3 bg-gray-800 text-blue-300 rounded-lg text-sm font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1">
      {skill}
    </div>
  );

  const CategoryCard = ({ category }) => (
    <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
      <div className="flex items-center gap-4 mb-5">
        <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">{category.icon}</div>
        <h3 className="text-xl font-semibold text-white">{category.name}</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {category.skills.map((skill) => (
          <SkillCard key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 p-8 lg:p-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Professional Skills
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            A comprehensive overview of my technical expertise and proficiency
            across various technologies and tools.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-6 py-3 rounded-full text-md font-medium transition-all
              ${activeCategory === "all"
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
              className={`px-6 py-3 rounded-full text-md font-medium transition-all
                ${activeCategory === category.id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
