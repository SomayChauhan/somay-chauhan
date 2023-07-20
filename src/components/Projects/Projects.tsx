'use client';

import ProjectItem from './ProjectItem';
import { projects } from './constants';

export default function Projects() {
  return (
    <div className="mx-auto flex flex-col space-y-16">
      {projects.map((project, index) => (
        <ProjectItem
          key={project.title}
          index={index}
          title={project.title}
          url={project.url}
          role={project.role}
        />
      ))}
    </div>
  );
}
