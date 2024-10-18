import React from 'react';

const EducationCard = ({ education }) => {
  return (
    <div className="w-[350px] md:w-[650px] flex flex-wrap justify-center mx-auto rounded-lg shadow-[rgba(23,92,230,0.15)_0px_4px_24px] p-4 flex-col gap-4 relative overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:translate-y-[-5px] border border-primary sm:w-[300px] sm:p-3 sm:py-5 sm:gap-2">
      <div className="flex gap-3">
        <img
          src={education.img}
          alt="school logo"
          className="h-[50px] bg-black rounded-lg mt-1 sm:h-[40px]"
        />
        <div className="flex flex-col w-full">
          <div className="text-[20px] font-semibold text-text_secondary sm:text-[18px]">
            {education.school}
          </div>
          <div className="text-[14px] font-medium text-text_secondary opacity-70 sm:text-[14px]">
            {education.degree}
          </div>
          <div className="text-[12px] font-medium text-text_secondary opacity-70 sm:text-[14px]">
            {education.date}
          </div>
        </div>
      </div>
      <div className="text-[14px] font-medium text-text_secondary opacity-70 sm:text-[14px]">
        <b>Grade:</b> {education.grade}
      </div>
      <div className="w-full text-[15px] font-normal text-text_secondary mb-2 sm:text-[15px]">
        <div className="overflow-hidden text-ellipsis line-clamp-4">
          {education.desc}
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
