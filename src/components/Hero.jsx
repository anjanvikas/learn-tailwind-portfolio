import { HERO_CONTENT } from "../constants";
import React from 'react';

const Hero = () => {
    return (
        <section id="" className="flex items-start justify-center min-h-screen p-10 bg-secondary text-white">
            <div className="text-center mt-32">
                <h1 className="text-3xl font-bold">{HERO_CONTENT.title}</h1>
                <p className="mt-4 text-lg">{HERO_CONTENT.description}</p>
            </div>

        </section>
    );
};

export default Hero;