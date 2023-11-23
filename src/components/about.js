import React from "react";

export default function About() {
        return (
          <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  Hi, I'm Kimberly Cordero.
                  <br className="hidden lg:inline-block" />  Android development is not just my job but my passion, and I am excited to bring my expertise to future projects.
                </h1>
                <p className="mb-8 leading-relaxed">
                I'm a dedicated Android Developer with over 5 years of experience specializing in the banking, insurance, and retail sectors.
                Proven track record of designing and delivering high-quality mobile applications, adept at creating user-friendly interfaces and implementing robust functionalities.
                Eager to embrace new challenges and continuously expand my technical prowess. 
                Committed to staying updated with the latest technologies, with a strong focus on clean code practices. 
                Highly detail-oriented, I am determined to both contribute to and learn from the developer community, fostering a collaborative and innovative environment. 
                I possess excellent communication skills, enabling seamless collaboration with cross-functional teams and providing top-tier support to clients. 
            
                </p>
                <div className="flex justify-center">
                  <a
                    href="#contact"
                    className="inline-flex text-white bg-brown border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                    Work With Me
                  </a>
                  <a
                    href="#projects"
                    className="ml-4 inline-flex text-white bg-brown border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                    View My Portfolio
                  </a>
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src="./coding.svg"
                />
              </div>
            </div>
          </section>
        );
      
}