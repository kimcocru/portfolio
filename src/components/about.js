import React from "react";

export default function About() {
        return (
          <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, I'm Kimberly Cordero.
              </h1>
              <p className="mb-8 leading-relaxed">
                I'm a dedicated and experienced Android developer with over 6 years of expertise in building high-quality, scalable mobile applications. I've contributed to the success of major projects, including Bluebird, Rogers Bank and A&W; conducting improvements in app stability, feature development, and performance optimization.
                <br />
                I'm proficient in Kotlin, Jetpack Compose, Coroutines, Hilt, Retrofit and Firebase Analytics and Crashlytics, I focus on writing clean, secure, and maintainable code while delivering seamless user experiences. I'm passionate about mentoring fellow developers, conducting code reviews, and collaborating with cross-functional teams to deliver high quality solutions.
                <br />
                I'm eager to embrace new challenges, I’m committed to continuously learn and stay up to date with the latest technologies. Highly detail-oriented, I take pride in contributing to the developer community and fostering an environment of collaboration and innovation.
                <br className="hidden lg:inline-block" /> Android development is not just my job but my passion, and I am excited to bring my expertise to future projects.
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
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center">
              <img
                className="object-cover object-center rounded-full w-48 h-48 md:w-64 md:h-64"
                alt="hero"
                src="./coding.png"
              />
            </div>
          </div>
        </section>
        
        );
      
}