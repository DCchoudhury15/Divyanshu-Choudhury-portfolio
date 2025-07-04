import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="min-w-[400px]">
      <div
        className="flex flex-col items-center justify-center py-20"
        id="projects"
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          My Projects
        </h1>
        <div className="h-full w-full flex flex-row gap-10 px-10 overflow-x-auto scrollbar-hidden">
          <div className="min-w-[500px] min-h-[500px]">
            <ProjectCard
              src="/NextWebsite.png"
              title="Modern Next.js Portfolio"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
          <div className="min-w-[500px] min-h-[500px]">
            <ProjectCard
              src="/CardImage.png"
              title="Interactive Website Cards"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
          <div className="min-w-[500px] min-h-[500px]">
            <ProjectCard
              src="/SpaceWebsite.png"
              title="Space Themed Website"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
          <div className="min-w-[500px] min-h-[500px]">
            <ProjectCard
              src="/SpaceWebsite.png"
              title="Space Themed Website"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
          <div className="min-w-[500px] min-h-[500px]">
            <ProjectCard
              src="/SpaceWebsite.png"
              title="Space Themed Website"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
          <div className="min-w-[500px] min-h-[500px]">
            <ProjectCard
              src="/SpaceWebsite.png"
              title="Space Themed Website"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;