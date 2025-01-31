import React, { useState } from 'react';
import { FiMenu, FiX, FiHome, FiUser, FiFileText, FiLayers } from 'react-icons/fi';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: <FiHome size={20} />, href: '/' },
    { name: 'Skills', icon: <FiUser size={20} />, href: '/skills' },
    { name: 'Projects', icon: <FiLayers size={20} />, href: '/projects' },
    { name: 'About', icon: <FiFileText size={20} />, href: '/about' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile Toggle Button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 rounded-md lg:hidden bg-gray-800 text-white hover:bg-gray-700"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full z-50
        ${isOpen ? 'w-64' : 'w-20'}
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        bg-gray-900 text-gray-100
        transition-all duration-300 ease-in-out
        flex flex-col
      `}>
        {/* Logo Area */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-800">
          <h1 className={`font-bold text-xl ${!isOpen && 'hidden'}`}>
            Portfolio
          </h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hidden lg:block p-2 rounded-md hover:bg-gray-800"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 pt-4 px-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`
                flex items-center px-4 py-3 mb-2
                rounded-md transition-colors duration-200
                hover:bg-blue-600 hover:text-white
                ${isOpen ? 'justify-start' : 'justify-center'}
              `}
            >
              <span className="text-blue-400">{item.icon}</span>
              {isOpen && (
                <span className="ml-4 text-sm font-medium">
                  {item.name}
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* User Profile Section */}
        <div className={`
          p-4 border-t border-gray-800
          flex items-center
          ${isOpen ? 'justify-start' : 'justify-center'}
        `}>
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
            <span className="text-sm font-medium">JD</span>
          </div>
          {isOpen && (
            <div className="ml-3">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-400">john@example.com</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
