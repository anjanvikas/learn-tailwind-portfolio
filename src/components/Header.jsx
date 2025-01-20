import React from 'react';

const Header = () => {

    return (
        <header className=' bg-primary text-white drop-shadow-xl sticky top-0 z-50'>
            <div className='header flex justify-between items-center p-4'>
                <a className='text-2xl font-bold' href='#'>Logo</a>
                <nav>
                    <ul className='flex space-x-8 mr-8'>
                        <li><a href="#" className='hover:underline'>Home</a></li>
                        <li><a href="#about" className='hover:underline'>About</a></li>
                        <li><a href="#projects" className='hover:underline'>Projects</a></li>
                        <li><a href="#experiences" className='hover:underline'>Experiences</a></li>
                        <li><a href="#contact" className='hover:underline'>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>

    );
};

export default Header;