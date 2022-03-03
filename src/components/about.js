import React from "react";
import photo from "../images/profile.jpg"
 
export default function about(props) {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi! I'm Cole.
            <br className="hidden lg:inline-block" />Thanks for visiting my portfolio
          </h1>
          <p className="mb-8 leading-relaxed">
           Currently I am finishing a full stack bootcamp at the University of Central Florida. During this time I have grown and added many skills to my resume. I love using react to make pages look amazing and would be happy to connect with other developers to grow and learn. 
          </p>
          <p className="mb-8 leading-relaxed">
          Prior to learning web development, I spent eight years at Apple as a technical support advisor across all products. My greatest accomplisment was helping launch @AppleSupport and 
          </p>
          
        </div>
         
        <div className="flex flex-wrap justify-center">
          <img src={photo} class="shadow-lg rounded-full max-w-md h-auto align-middle border-none" />
        </div>
      </div>
    </section>
  )
}
