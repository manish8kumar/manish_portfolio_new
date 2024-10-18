import React from 'react'

const ProjectCards = ({ project, setOpenModal }) => {
    return (
        <div 
            className="w-[330px] h-[490px] rounded-lg overflow-hidden p-6 flex flex-col gap-4 transition-transform duration-500 ease-in-out cursor-pointer hover:transform hover:-translate-y-2 hover:shadow-2xl hover:brightness-110 border-primary shadow-[0_4px_24px_rgba(23,92,230,0.40)] bg-card"
            onClick={() => setOpenModal({ state: true, project: project })}
        >
            <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-[160px] bg-white rounded-lg shadow-md"
            />
            <div className="w-full flex items-center flex-wrap gap-2 mt-1">
                {project.tags?.map((tag, index) => (
                    <span 
                        key={index}
                        className="text-[12px] font-normal text-primary bg-primary/15 py-1 px-2 rounded-lg"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div className="w-full flex flex-col gap-1 px-1">
                <div className="text-[20px] font-semibold text-secondary line-clamp-2">
                    {project.title}
                </div>
                <div className="text-[12px] md:text-[10px] font-normal text-secondary/80">
                    {project.date}
                </div>
                <div className="font-normal text-secondary/99 mt-2 line-clamp-3">
                    {project.description}
                </div>
            </div>
            <div className="flex items-center pl-2">
                {project.member?.map((member, index) => (
                    <img 
                        key={index} 
                        src={member.img} 
                        alt="member avatar" 
                        className="w-[38px] h-[38px] rounded-full -ml-2 bg-white shadow-sm border-4 border-card"
                    />
                ))}
            </div>
        </div>
    )
}

export default ProjectCards
