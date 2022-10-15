import { Thumbnail } from '../types/project'
import Project from './Project'

const Projects = ({ projects }: { projects: Thumbnail[] }) => {
  return (
    <section className="py-36 md:py-48" id="projects">
      <div className="flex w-full items-center">
        <h3 className="whitespace-nowrap font-heading text-lg font-bold uppercase tracking-widest dark:text-white">
          Projects
        </h3>
        <div className="mx-8 h-0.5 w-full max-w-md rounded bg-gray-200"></div>
      </div>
      <ul className="mt-16 flex flex-col gap-16">
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </ul>
    </section>
  )
}

export default Projects
