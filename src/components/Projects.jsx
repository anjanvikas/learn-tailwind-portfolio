import React from 'react';
import { PROJECTS } from '../constants';

const Projects = () => {
    return (
        <section id="projects" className='projects min-h-screen p-10 bg-secondary text-white scroll-mt-12'>
            <div className='projects-div flex flex-col gap-16'>
                <h1 className='projects-title text-4xl font-bold mx-auto mt-8'>Projects</h1>
                <div className='projects-cards space-y-4 '>
                    {PROJECTS.map((project,index) => (
                        <div key={index} className='project-card flex flex-row justify-between items-center'>
                            <img className="project-title w-1/2 max-w-[250px] object-cover" src={project.image} alt={project.title}/>
                            <div className='project-info flex flex-col gap-y-4 p-4 w-1/2'>
                                <h3 className='project-title text-xl font-bold'>{project.title}</h3>
                                <p className='project-description'>{project.description}</p>
                                <div className='tech-item-list flex flex-wrap gap-2'>
                                {project.technologies.map((techItem,index) => (
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

export default Projects;