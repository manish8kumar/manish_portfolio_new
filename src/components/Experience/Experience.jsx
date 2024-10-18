import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';

const Experience = () => {
    return (
        <div id="experience" className="flex flex-col justify-center items-center relative py-40 md:py-0">
            <div className="relative flex flex-col items-center justify-between max-w-6xl w-full px-4">
                <h2 className="text-4xl text-center font-semibold mt-10 text-text_primary md:text-3xl">
                    Experience
                </h2>
                <p className="text-lg text-center max-w-[600px] text-text_secondary mt-5 md:text-base">
                    My work experience as a software engineer and working on different companies and projects.
                </p>
                <div className="w-full max-w-2xl mt-2 flex flex-col items-center justify-center gap-3 ">
                    <Timeline>
                        {experiences.map((experience, index) => (
                            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== experiences.length - 1 && (
                                        <TimelineConnector style={{ background: '#854CE6' }} />
                                    )}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 5 }}>
                                    <ExperienceCard experience={experience} />
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </div>
            </div>
        </div>
    );
};

export default Experience;
