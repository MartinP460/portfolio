import { Project as ProjectType } from '../types/project'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import Project from './Project'

const Projects = ({
  projects
}: {
  projects: Omit<ProjectType, 'content'>[]
}) => {
  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
      <section className="py-36 md:py-48" id="projects">
        <div className="w-full flex items-center">
          <h3 className="font-heading text-lg tracking-widest font-bold uppercase whitespace-nowrap dark:text-white">
            Projects
          </h3>
          <div className="w-full h-0.5 bg-gray-200 mx-8 rounded max-w-md"></div>
        </div>
        <ul className="flex flex-col gap-16 mt-16">
          {projects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </ul>
      </section>
    </AnimationOnScroll>
  )
}

export default Projects
