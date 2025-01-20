import React from 'react';
import { EXPERIENCES } from '../constants';

const Experiences = () => {

    return (
        <section id="experiences" className='experiences-section min-h-screen bg-secondary text-white scroll-mt-20'>
                <div className='experiences flex flex-col gap-16'>
                    <h2 className='experiences-title text-3xl mx-auto font-bold'>Experiences</h2>
                    <div className='experiences-cards flex flex-col items-center justify-between gap-8'>
                        {EXPERIENCES.map((exp,index) => (
                            <div key={index} className='experience-card flex flex-row items-center justify-between gap-8 p-12'>
                                <h2 className='experience-year w-1/2'>{exp.year}</h2>
                                <div className='experience-info w-1/2 flex flex-col gap-2'>
                                    <h2 className='experience-company text-2xl'>{exp.company}</h2>
                                    <h2 className='experience-role text-slate-200'>{exp.role}</h2>
                                    <p className='experience-description'>{exp.description}</p>
                                    <div className='tech-item-list flex flex-wrap gap-2'>
                                        {exp.technologies.map((techItem,index) => (
                                            <div key={index} className='tech-item border-2 rounded-md bg-primary px-4 py-2 text-sm
                                                                        transition-transform transform hover: scale-105 hover:bg-secondary hover:text-white'>{techItem}</div>
                                        ))}  
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
        </section>
    );
};

export default Experiences;