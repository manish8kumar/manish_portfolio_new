import React from 'react';

const ExperienceCard = ({ experience }) => {
    return (
        <div className="w-[350px] md:w-[650px] p-3 flex flex-col gap-3 relative rounded-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 border border-solid border-[#306EE8] shadow-[0_4px_24px_rgba(23,92,230,0.15)] bg-card">
            <div className="flex gap-3 w-full" >
                <img src={experience.img} className="h-[50px] md:h-[40px] bg-black rounded-lg mt-1" />
                <div className="flex flex-col w-full">
                    <div className="text-[18px] font-semibold text-opacity-99 md:text-[18px] text-text_primary opacity-90">
                        {experience.role}
                    </div>
                    <div className="text-[15px] font-medium text-opacity-99 text-gray-500 md:text-[14px]">
                        {experience.company}
                    </div>
                    <div className="text-[12px] font-normal text-opacity-80 text-gray-400 md:text-[13px]">
                        {experience.date}
                    </div>
                </div>
            </div>
            <div className="text-[15px] font-normal opacity-95 text-text_secondary md:text-[15px] mb-2">
                {experience?.desc &&
                    <span className="overflow-hidden block max-w-full line-clamp-4 text-ellipsis">
                        {experience.desc}
                    </span>
                }
                {experience?.skills && (
                    <>
                        <br />
                        <div className="flex gap-3 -mt-2 w-full">
                            <b>Skills:</b>
                            <div className="flex flex-wrap gap-2">
                                {experience.skills.map((skill, index) => (
                                    <div key={index} className="text-[15px] font-normal text-opacity-99 text-text_secondary md:text-[14px]">
                                        • {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
            {experience.doc && (
                <a href={experience.doc} target="new">
                    <img
                        src={experience.doc}
                        className="hidden h-[70px] cursor-pointer rounded-lg bg-black hover:opacity-80"
                    />
                </a>
            )}
        </div>
    );
};

export default ExperienceCard;
