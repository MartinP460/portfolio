import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Project } from '../../types/project'
import {
  getProjectsSlugs,
  getProjectBySlug
} from '../../services/projectService'
import MarkdownIt from 'markdown-it'
import Image from 'next/image'
import Layout from '../../components/Layout'
import Highlight from '../../components/Highlight'
import InfoBox from '../../components/InfoBox'
import AlertBox from '../../components/AlertBox'
import Contact from '../../components/Contact'

interface ProjectProps {
  project: Project
}

const Project: NextPage<ProjectProps> = ({ project }) => {
  const md = new MarkdownIt()
  const content = md.render(project.content)

  const words = project.content.trim().split(/\s+/).length
  const readTime = Math.ceil(words / 225)

  return (
    <Layout>
      <div className="max-w-3xl mx-auto mb-6">
        <Highlight text="Project" className="text-lg" />
        <div className="flex flex-col sm:items-center sm:flex-row">
          <h1 className="font-semibold font-heading text-6xl mr-10 dark:text-white">
            {project.title}
          </h1>
          <div className="flex mt-4">
            <div className="bg-gray-300 h-4 w-4 rounded-full mr-6"></div>
            <p className="text-gray-600 dark:text-gray-400">
              {readTime} minute read
            </p>
          </div>
        </div>
        <p className="text-gray-600 mt-5 leading-relaxed dark:text-gray-400">
          {project.intro}
        </p>
      </div>
      <Image
        src={project.coverImage}
        width="1024"
        height="625"
        objectFit="cover"
        className="rounded"
      />
      <div className="max-w-3xl mx-auto">
        <InfoBox title='"What is this?"' className="mt-6">
          <p className="text-gray-600 text-sm dark:text-gray-400">
            What you are about to read is a description of the project, to
            hopefully answer why and how I built this project, what I learned,
            what problems I faced and how I overcame them, as well as what I
            would do differently next time, and how I would make it better.
          </p>
        </InfoBox>
        <AlertBox className="mt-4 text-sm">
          <p className="text-gray-600 text-sm dark:text-gray-400">
            Jeg har valgt at skrive beskrivelsen af dette projekt udelukkende på
            engelsk for at gøre den tilgængelig for flere personer. Tak for din
            forståelse.
          </p>
        </AlertBox>
        <article
          dangerouslySetInnerHTML={{ __html: content }}
          className="max-w-2xl mx-auto mt-6 prose dark:prose-invert"
        />
        <div className="max-w-2xl mx-auto">
          <Contact />
        </div>
      </div>
    </Layout>
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
      project: getProjectBySlug(params.slug)
    }
  }
}
