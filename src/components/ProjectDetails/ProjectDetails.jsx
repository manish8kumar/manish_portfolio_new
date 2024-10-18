import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react';

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  return (
    <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
      <div className="fixed inset-0 flex justify-center items-start bg-black bg-opacity-70 overflow-y-scroll transition-all duration-500">
        <div className="max-w-4xl w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-lg mt-12 mx-3 relative">
          <CloseRounded
            className="absolute top-2 right-4 text-gray-900 dark:text-gray-100 cursor-pointer"
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <img src={project?.image} alt={project?.title} className="w-full object-cover rounded-lg mt-4 shadow-lg" />
          <h1 className="text-2xl font-semibold mt-6">{project?.title}</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{project?.date}</p>

          <div className="flex flex-wrap gap-2 mt-3">
            {project?.tags.map((tag) => (
              <span key={tag} className="bg-blue-200 text-blue-800 px-3 py-1 rounded-md text-sm">{tag}</span>
            ))}
          </div>

          <p className="text-lg mt-4">{project?.description}</p>

          {project?.member && (
            <>
              <h2 className="text-xl font-semibold mt-6">Members</h2>
              <div className="flex flex-col gap-4 mt-4">
                {project?.member.map((member) => (
                  <div key={member.name} className="flex items-center gap-4">
                    <img src={member.img} alt={member.name} className="w-12 h-12 object-cover rounded-full shadow-lg" />
                    <div>
                      <h3 className="text-lg font-medium">{member.name}</h3>
                    </div>
                    <div className="flex gap-2">
                      <a href={member.github} target="new" className="text-gray-600 dark:text-gray-400">
                        <GitHub />
                      </a>
                      <a href={member.linkedin} target="new" className="text-blue-600 dark:text-blue-400">
                        <LinkedIn />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="flex justify-end gap-4 mt-6">
            <a href={project?.github} target="new" className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-lg text-lg font-semibold transition hover:bg-gray-300 dark:hover:bg-gray-600">
              View Code
            </a>
            <a href={project?.webapp} target="new" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-lg font-semibold transition hover:bg-blue-700">
              View Live App
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetails;
