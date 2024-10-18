import React from 'react';
import { skills } from '../../data/constants';

const Skills = () => {
  return (
    <div id="skills" className="flex flex-col justify-center items-center relative ">
      <div className="relative flex flex-col justify-between items-center w-full max-w-[1100px] gap-12 ">
        <h1 className="text-4xl font-semibold mt-5 text-center text-text_primary dark:text-gray-100 ">Skills</h1>
        <p className="text-lg text-center max-w-[600px] text-text_secondary dark:text-gray-400 ">
          Here are some of my skills on which I have been working on for the past 2 years.
        </p>
        <div className="w-full flex flex-wrap justify-center gap-8 mt-8 ">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="w-full max-w-[500px] bg-card border border-primary shadow-[0_4px_24px_rgba(23,92,230,0.15)]
  rounded-xl p-6 md:max-w-[400px] sm:max-w-[330px] md:p-6 sm:p-4"
            >
              <h2 className="text-3xl font-semibold text-center text-text_secondary mb-6">
                {skill.title}
              </h2>
              <div className="flex justify-center flex-wrap gap-3">
                {skill.skills.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-center text-gray-700 dark:text-gray-300 text-base font-normal border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4"
                  >
                    <img src={item.image} alt={item.name} className="w-6 h-6 mr-2" />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
