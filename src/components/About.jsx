import React from 'react';
import { ABOUT_TEXT } from '../constants';

const About = () => {
    return (
        <section id="about" className='about bg-secondary min-h-screen text-white flex items-center'>
            <div className='about-div flex flex-row justify-between items-center p-8'>
                <h2 className='about-title w-1/2 text-4xl font-bold'>About me</h2>
                <div className='about-text w-1/2'>{ABOUT_TEXT}</div>
            </div>
        </section>
    );
};

export default About;