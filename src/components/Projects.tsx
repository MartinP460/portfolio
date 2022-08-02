import { Project as ProjectType } from '../types/project'
import Project from './Project'

const Projects = ({
  projects
}: {
  projects: Omit<ProjectType, 'content'>[]
}) => {
  return (
    <section className="py-72" id="projects">
      <div className="w-full flex items-center">
        <h3 className="font-bold uppercase whitespace-nowrap">Projects</h3>
        <div className="w-full h-0.5 bg-gray-200 mx-8 rounded max-w-md"></div>
      </div>
      <ul className="flex flex-col gap-16 mt-16">
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </ul>
    </section>
  )
}

export default Projects