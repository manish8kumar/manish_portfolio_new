import React, { useState } from 'react';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');
  return (
    <div id="projects" className="flex flex-col items-center relative">
      <div className="w-full max-w-6xl py-10 px-4 flex flex-col items-center gap-3 relative">
        <h1 className="text-4xl font-semibold mt-5 text-center text-gray-900 dark:text-gray-100">Projects</h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-400 max-w-lg">
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </p>

        <div className="flex border-2 border-purple-500 text-purple-500 rounded-xl font-medium mt-6">
          <button
            className={`px-5 py-2 rounded-md ${toggle === 'all' && 'bg-purple-100'}`}
            onClick={() => setToggle('all')}
          >
            All
          </button>
          <div className="w-px bg-purple-500"></div>
          <button
            className={`px-5 py-2 rounded-md ${toggle === 'web app' && 'bg-purple-100'}`}
            onClick={() => setToggle('web app')}
          >
            WEB APP'S
          </button>
          <div className="w-px bg-purple-500"></div>
          <button
            className={`px-5 py-2 rounded-md ${toggle === 'machine learning' && 'bg-purple-100'}`}
            onClick={() => setToggle('machine learning')}
          >
            MACHINE LEARNING
          </button>
        </div>

        <div className="flex justify-center items-center gap-7 flex-wrap mt-8">
          {toggle === 'all' &&
            projects.map((project) => (
              <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}

          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
