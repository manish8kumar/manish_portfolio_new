import React from 'react'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center h-20 px-6">
        {/* NavLogo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center text-white cursor-pointer">
            <DiCssdeck size="3rem" />
            <span className="font-bold text-lg ml-1">Portfolio</span>
          </a>
        </div>

        {/* Mobile Icon */}
        <div className="lg:hidden">
          <FaBars onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl cursor-pointer" />
        </div>

        {/* NavItems */}
        <ul className="hidden lg:flex gap-8 text-lg">
          <li><a href="#about" className="text-gray-800 dark:text-gray-100 hover:text-blue-600">About</a></li>
          <li><a href="#skills" className="text-gray-800 dark:text-gray-100 hover:text-blue-600">Skills</a></li>
          <li><a href="#experience" className="text-gray-800 dark:text-gray-100 hover:text-blue-600">Experience</a></li>
          <li><a href="#projects" className="text-gray-800 dark:text-gray-100 hover:text-blue-600">Projects</a></li>
          <li><a href="#education" className="text-gray-800 dark:text-gray-100 hover:text-blue-600">Education</a></li>
        </ul>

        {/* GitHubButton */}
        <div className="hidden lg:block">
          <a href={Bio.github} target="_blank" rel="noopener noreferrer" className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition duration-300">
            Github Profile
          </a>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-20 left-0 w-full bg-gray-100 dark:bg-gray-900 p-6 shadow-lg lg:hidden flex flex-col items-center space-y-4">
            <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-800 dark:text-gray-100 hover:text-blue-600">About</a>
            <a href="#skills" onClick={() => setIsOpen(false)} className="text-gray-800 dark:text-gray-100 hover:text-blue-600">Skills</a>
            <a href="#experience" onClick={() => setIsOpen(false)} className="text-gray-800 dark:text-gray-100 hover:text-blue-600">Experience</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="text-gray-800 dark:text-gray-100 hover:text-blue-600">Projects</a>
            <a href="#education" onClick={() => setIsOpen(false)} className="text-gray-800 dark:text-gray-100 hover:text-blue-600">Education</a>
            <a href={Bio.github} target="_blank" rel="noopener noreferrer" className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition duration-300">Github Profile</a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
