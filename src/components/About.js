import React from 'react';
import './About.css'
const About = () => {
    return (
        <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Akash Nandy.
            {/* <br className="hidden lg:inline-block" />I love to build amazing
            websites. */}
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a full stack developer with MERN stack.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contact me
            </a>
            <a
              href="https://drive.google.com/file/d/1o9a6iTP6SRhUz33NQ4W8_xK3hzBTKF-n/view"
              target="_blank"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Download Resume
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 image">
          <img
            className="object-cover object-center rounded-b-3xl"
            alt="hero"
            style={{borderRadius : "50%"}}
            src={process.env.PUBLIC_URL + '/bcc.png'}
          />
        </div>
      </div>
    </section>
    );
};

export default About;