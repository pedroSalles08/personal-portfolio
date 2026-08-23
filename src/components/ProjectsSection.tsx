import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ProjectItem } from '../types/content';

export const ProjectsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div id="projects" className="scroll-mt-12 pt-20">
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-10 text-center text-4xl md:text-5xl font-bold tracking-tight text-white">
          {t.projects.sectionTitle}
        </h2>

        <div className="flex h-fit flex-col items-center w-full [perspective:1000px]">
          <div className="w-full max-w-[1440px]">
            {t.projects.items.map((project, idx) => {
              const isEven = idx % 2 === 1; // Project 2, 4 (Right Image)
              const positionClass = isEven ? 'right' : 'left';

              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isEven={isEven}
                  positionClass={positionClass}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

interface ProjectCardProps {
  project: ProjectItem;
  isEven: boolean;
  positionClass: 'left' | 'right';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isEven, positionClass }) => {
  const isLeft = positionClass === 'left';

  return (
    <div
      className={`mb-16 flex h-fit w-full flex-col justify-center px-6 md:px-10 lg:px-20 ${
        isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
      }`}
    >
      {/* 3D Perspective Image Container */}
      <div
        className="image-container group relative mb-6 flex aspect-video w-full [perspective:200px] lg:mr-5 lg:mb-0 lg:ml-auto lg:w-1/2 cursor-pointer"
      >
        {/* Layer 1: Background Mockup Image (Opacity 0.4 with tilt) */}
        <img
          src={project.imageSrc}
          alt={project.imageAlt}
          loading="lazy"
          className={`background-img absolute top-1/2 left-1/2 aspect-video max-w-full rounded-xl border-2 border-solid border-gray-800 opacity-40 transition-transform duration-500 ease-in-out object-cover object-top ${
            isLeft
              ? '[transform:translate(calc(25px-50%),calc(5px-50%))_translateZ(-50px)_rotateY(5deg)] group-hover:[transform:rotateY(0)_rotateX(0)_translateZ(0)_translate(-50%,-50%)]'
              : '[transform:translate(-50%,calc(5px-50%))_translateZ(-50px)_rotateY(-3deg)] group-hover:[transform:rotateY(0)_rotateX(0)_translateZ(0)_translate(-50%,-50%)]'
          }`}
        />

        {/* Layer 2: Frontfacing Main Image (Opacity 1.0 with tilt) */}
        <img
          src={project.imageSrc}
          alt={project.imageAlt}
          loading="lazy"
          className={`frontfacing-img absolute top-1/2 left-1/2 aspect-video max-w-full rounded-xl border-2 border-solid border-gray-800 opacity-100 transition-transform duration-500 ease-in-out object-cover object-top shadow-xl ${
            isLeft
              ? '[transform:translate(calc(35px-50%),-50%)_translateZ(-50px)_rotateY(5deg)] group-hover:[transform:rotateY(0)_rotateX(0)_translateZ(0)_translate(-50%,-50%)]'
              : '[transform:translate(calc(-50%-10px),-50%)_translateZ(-50px)_rotateY(-3deg)] group-hover:[transform:rotateY(0)_rotateX(0)_translateZ(0)_translate(-50%,-50%)]'
          }`}
        />

        {/* Layer 3: Darkening Overlay & Centered CTA on Desktop Hover */}
        {project.hasLiveCta && project.ctaUrl && (
          <div className="visit-div absolute top-1/2 left-1/2 aspect-video w-[700px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-xl border-2 border-solid border-gray-600 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center pointer-events-none group-hover:pointer-events-auto">
            <a
              href={project.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent border-accent hover:bg-accent hover:text-black hidden rounded-xl border-2 bg-black px-6 py-3 font-bold opacity-100 transition-colors duration-300 lg:block shadow-lg"
            >
              {project.ctaText || 'Ver projeto'}
            </a>
          </div>
        )}
      </div>

      {/* Mobile CTA Button (Displayed beneath image on mobile if project has link) */}
      {project.hasLiveCta && project.ctaUrl && (
        <div className="mb-6 flex items-center justify-center lg:hidden">
          <a
            href={project.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blue-600 px-6 py-3 font-bold text-white transition-colors duration-300 hover:bg-white hover:text-black shadow-md text-sm"
          >
            {project.ctaText || 'Ver projeto'}
          </a>
        </div>
      )}

      {/* Project Description and Tags */}
      <div
        className={`flex h-fit w-full flex-col items-center justify-center lg:h-[340px] lg:w-1/2 lg:px-10 ${
          isEven ? 'lg:items-end' : 'lg:items-start'
        }`}
      >
        <h3
          className={`mb-4 text-center text-3xl font-bold tracking-tight text-white ${
            isEven ? 'lg:text-right' : 'lg:text-left'
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`max-w-lg text-center text-lg leading-relaxed text-gray-300 text-balance lg:max-w-none ${
            isEven ? 'lg:text-right' : 'lg:text-left'
          }`}
        >
          {project.description}
        </p>

        {/* Technology Badges (Cyan Pills) */}
        <div
          className={`mt-5 flex w-full flex-row flex-wrap justify-center gap-2 ${
            isEven ? 'lg:justify-end' : 'lg:justify-start'
          }`}
        >
          {project.tags.map((tag) => (
            <div
              key={tag}
              className="bg-accent my-1 w-fit rounded-full px-3.5 py-1 text-xs md:text-sm font-semibold text-black transition-colors duration-300 select-none shadow-sm"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
