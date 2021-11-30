import React from 'react';

const AboutMe = () => {
    return (
        <section id="aboutme" className="my-6">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-20">
            
            <h1 className="sm:text-2xl text-2xl font-medium title-font text-white mb-4">
              About Me
            </h1>
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              Hi, I am Akash Nandy
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              I am a web developer working on web developement with latest technologies. I am currently working on projects that includes the latest technology. My engineering background in Computer Science and Engineering and a well knowledge in data structure, algorithm help me a lot to realize the web well and I also can utilize my knowledge to do better websites.
            </p>
          </div>
          {/* <div className="flex flex-wrap lg:w-full sm:mx-auto sm:mb-2 -mx-2">
          <img
            className="object-cover object-center rounded-b-3xl"
            alt="hero"
            style={{borderRadius : "50%"}}
            src={process.env.PUBLIC_URL + '/bcc.png'}
          />
          </div> */}
        </div>
      </section>
    );
};

export default AboutMe;