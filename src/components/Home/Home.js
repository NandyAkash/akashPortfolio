import React from 'react';
import About from '../About';
import Contact from '../Contact';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div className="text-gray-400  body-font">
        
        <About />
        <Projects />
        <Skills />
        <Contact />
    </div>
    );
};

export default Home;