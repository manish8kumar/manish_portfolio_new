import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education } from '../../data/constants'; // Adjusted to use only education
import EducationCard from '../Cards/EducationCard';

const EducationSection = () => {
    return (
        <div id="education" className="flex flex-col justify-center items-center relative px-4 pb-16 md:px-0 "> {/*bg-gradient-to-b from-bg-bg to-bg-green-300*/}
            <div className="relative flex flex-col justify-center items-center w-full max-w-[1350px] pt-10 gap-3">
                <div className="text-4xl text-center font-semibold mt-5 text-text_primary md:text-4xl md:mt-3">
                    Education
                </div>
                <div className="text-xl text-center max-w-[600px] text-theme-text_secondary md:text-xl md:mt-3">
                    My education has been a journey of self-discovery and growth. My educational details are as follows.
                </div>
                <div className="w-full max-w-[1000px] mt-2 flex flex-col items-center justify-center gap-3 md:items-end">
                    <Timeline>
                        {education.map((edu, index) => (
                            <TimelineItem key={index}>
                                <TimelineContent sx={{ py: '13px', px: 20}} >
                                    <EducationCard education={edu} />
                                </TimelineContent>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== education.length - 1 && (
                                        <TimelineConnector style={{ background: '#854CE6' }} />
                                    )}
                                </TimelineSeparator>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </div>
            </div>
        </div>
    );
};

export default EducationSection;
