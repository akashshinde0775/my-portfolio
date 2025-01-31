import React from 'react';
import akashPic from '../assets/akash.jpg';
import { FaEnvelope as Mail, FaMapMarkerAlt as MapPin, FaCalendarAlt as Calendar, FaDownload as Download, FaGithub as Github, FaLinkedin as Linkedin, FaTwitter as Twitter } from 'react-icons/fa';

const AboutSection = ({
  name = "Akash Shinde",
  title = "AI & DS Engineer",
  location = "Solapur, Maharastra",
  // experience = "8+ years",
  email = "akashshinde0775@gmail.com",
  bio = `Passionate AI & Data Science professional with expertise in machine learning, computer vision, web development, and both frontend & backend technologies. 
  Skilled in AI/ML tools, always driven to innovate and solve complex problems.`,


  socialLinks = {
    github: "https://github.com/akashshinde0775",
    linkedin: "https://www.linkedin.com/in/akashshinde0775",
    twitter: "https://twitter.com/akashshinde0775"
  }
}) => {
  // const stats = [
  //  // { label: 'Years Experience', value: '8+' },
  //   { label: 'Projects Completed', value: '50+' },
  //   { label: 'Companies Worked', value: '5' },
  //   { label: 'Open Source', value: '20+' }
  // ];

  return (
    <div className="min-h-screen bg-gray-900 p-6 lg:p-12">
      <div className="max-w-6xl mx-auto">

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Left Column - Profile */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                {/* Profile Image */}
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="w-full h-full rounded-xl overflow-hidden">
                    <img
                      src={akashPic}
                      alt="Akash Shinde"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                  </div>
                </div>

                {/* Basic Info */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">{name}</h2>
                  <p className="text-gray-400 mb-4">{title}</p>
                  <div className="flex items-center justify-center gap-4">
                    <a
                      href={socialLinks.github}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={socialLinks.linkedin}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={socialLinks.twitter}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-400">
                    <MapPin size={18} />
                    <span>{location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Mail size={18} />
                    <a href={`mailto:${email}`} className="hover:text-blue-400 transition-colors">
                      {email}
                    </a>
                  </div>
                  {/* <div className="flex items-center gap-3 text-gray-400">
                    <Calendar size={18} />
                    <span>{experience} Experience</span>
                  </div> */}
                </div>

                {/* Download CV Button */}
                <a
                  href="/resume/Akash Shinde Resume 2.pdf"
                  download="Akash_Shinde_Resume.pdf"
                  className="w-full mt-6 px-4 py-2.5 bg-blue-500 text-white rounded-lg 
                   flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors"
                >
                  <Download size={18} />
                  Download Resume
                </a>

              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2">
            {/* About Section */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">About Me</h3>
              <div className="space-y-4 text-gray-300">
                <p>{bio}</p>
              </div>
            </div>

            {/* Stats Grid
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center">
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div> */}

            {/* What I Do Section */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">What I Do</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Web Development 🌐",
                    description: "Crafting dynamic, responsive, and scalable web applications using modern frontend and backend technologies. Focused on performance, user experience, and seamless functionality."
                  },
                  {
                    title: "Machine Learning 🤖",
                    description: "Building intelligent models for data-driven solutions. Experienced in computer vision, predictive analytics, and real-time AI applications using Python, OpenCV, and deep learning frameworks."
                  }
                ].map((item, index) => (
                  <div key={index} className="p-6 bg-gray-900/50 rounded-xl">
                    <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
