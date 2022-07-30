import { NextPage } from 'next'
import { getAllProjectsData } from '../services/projectService'
import { Project } from '../types/project'

interface IndexProps {
  projects: Project[]
}

const Index: NextPage<IndexProps> = ({ projects }) => {
  return (
    <div>
      {projects.map((project) => (
        <h1 key={project.title}>{project.title}</h1>
      ))}
    </div>
  )
}

export default Index

export const getStaticProps = async () => {
  return {
    props: {
      projects: getAllProjectsData()
    }
  }
}
