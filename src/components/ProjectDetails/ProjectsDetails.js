import React from 'react';
import './ProjectDetails.css';

const ProjectsDetails = () => {
    return (
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
           
        <div className="lg:w-2/3 md:w-1/2 sm:w-full flex flex-col md:ml-auto w-full rounded-lg sm:mr-10 p-10 flex items-end justify-start relative">
            <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain"
                  src={process.env.PUBLIC_URL + './watch Shop.png'}
            />
            </div>
            <div className="lg:w-1/3 md:w-1/2 sm:w-full flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 description">
                  <h1 className="title-font text-3xl font-medium text-white mb-3">
                     Watch Shop
                  </h1>
                  <p className="leading-relaxed text-sm font-medium text-white mb-3">
                    <ul>
                        <li>
                        Someone can know about the diversity of watches.
                        </li>
                        <li>
                        Can order a watch.
                        </li>
                        <li>
                        Mistaken orders can be deleted by user.
                        </li>
                    </ul>
                </p>
                <p>
                <a
                    href="https://watch-shop-63fbf.web.app/"
                    className="inline-flex text-white my-3 w-32 bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                    View Site
                </a>
                </p>
            </div>  
        </div>
        
    );
};

export default ProjectsDetails;