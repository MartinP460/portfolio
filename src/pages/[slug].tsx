import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Project } from '../types/project'
import { getProjectsSlugs, getProjectBySlug } from '../services/projectService'
import MarkdownIt from 'markdown-it'

interface ProjectProps {
  project: Project
}

const Project: NextPage<ProjectProps> = ({ project }) => {
  const md = new MarkdownIt()
  const content = md.render(project.content)

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.intro}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default Project

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getProjectsSlugs().map((slug) => ({ params: { slug } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      // @ts-ignore
      project: await getProjectBySlug(params.slug)
    }
  }
}
