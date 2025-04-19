import React from "react";
import { CodeIcon } from "@heroicons/react/solid";
import Slider from "react-slick";
import { projects } from "../data";

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    <section id="projects" className="text-gray-400 bg-brown body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-10">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Collaborated On
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            These are the projects I've collaborated on, contributing to both the development of features from scratch and the maintenance/bug fixing processes.
          </p>
        </div>

        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.image} className="p-4">
              <div className="relative rounded-lg overflow-hidden border-4 border-secondary bg-brown shadow-lg pt-4">
                <img
                  alt="project"
                  className="w-full h-80 object-contain object-center"

                  src={project.image}
                />
                <div className="p-6 text-left">
                <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <h2 className="tracking-widest text-sm title-font font-medium text-primary mb-1">
                    {project.subtitle}
                  </h2>
                  <p className="leading-relaxed text-sm text-gray-300">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-primary hover:underline"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
