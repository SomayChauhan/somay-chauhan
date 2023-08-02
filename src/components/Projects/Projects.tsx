'use client';

import ProjectItem from './ProjectItem';
import { projects } from './constants';

export default function Projects() {
  return (
    <div className="mx-auto flex flex-col space-y-16">
      {projects.map((project, index) => (
        <ProjectItem
          key={`${project.title}-${index}`}
          title={project.title}
          description={project.description}
          live_url={project.live_url}
          github_url={project.github_url}
          techStack={project.techStack}
          live_links={project.live_links}
          image={project.image}
        />
      ))}
    </div>
  );
}
