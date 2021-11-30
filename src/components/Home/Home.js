import React from 'react';
import About from '../About';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div className="text-gray-400  body-font">
        
        <About />
        <Projects />
        <AboutMe />
        <Skills />
        <Contact />
    </div>
    );
};

export default Home;