import React from 'react';

const JustFly = () =>  {
    return (
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
           
        <div className="lg:w-2/3 md:w-1/2 sm:w-full flex flex-col md:ml-auto w-full rounded-lg sm:mr-10 p-10 flex items-end justify-start relative">
            <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain"
                  src={process.env.PUBLIC_URL + './Just Fly .png'}
            />
            </div>
            <div className="lg:w-1/3 md:w-1/2 sm:w-full flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 description">
                  <h1 className="title-font text-3xl font-medium text-white mb-3">
                     Just Fly
                  </h1>
                  <p className="leading-relaxed text-sm font-medium text-white mb-3">
                  <ul>
                        <li>
                        A travel site where several places in Bangladesh can be visited.
                        </li>
                        <li>
                        Users can book their desired package.
                        </li>
                        <li>
                        A user can see various kind of offers
                        </li>
                        <li>
                        There is two roles. One for All Users and another for ADMIN 
                        </li>
                  </ul>
                </p>
                <p>
                <a
                    href="https://just-fly-9b8d3.web.app/"
                    className="inline-flex text-white my-3 w-32 bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                    View Site
                </a>
                </p>
            </div>  
        </div>
        
    );
};

export default JustFly;