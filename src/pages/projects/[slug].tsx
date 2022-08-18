import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { BookmarkIcon } from '@heroicons/react/outline'
import { Project as ProjectType } from '../../types/project'
import {
  getProjectsSlugs,
  getProjectBySlug
} from '../../services/projectService'
import MarkdownIt from 'markdown-it'
import Image from 'next/image'
import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import Highlight from '../../components/Highlight'
import InfoBox from '../../components/InfoBox'
import Contact from '../../components/Contact'

interface ProjectProps {
  project: ProjectType
  slugs: string[]
}

const Project: NextPage<ProjectProps> = ({ project, slugs }) => {
  const md = new MarkdownIt()
  const content = md.render(project.content)

  const words = project.content.trim().split(/\s+/).length
  const readTime = Math.ceil(words / 225)

  const sidebarLinks = slugs.map((slug) => ({
    title: slug,
    href: slug === project.slug ? '#' : `/projects/${slug}`,
    icon: <BookmarkIcon />
  }))

  return (
    <Layout>
      <Navbar sidebarLinks={sidebarLinks} />
      <div className="mx-auto mb-6 mt-20 max-w-3xl">
        <Highlight text="Project" className="text-lg" />
        <div className="flex flex-col sm:flex-row sm:items-center">
          <h1 className="mr-10 font-heading text-6xl font-semibold dark:text-white">
            {project.title}
          </h1>
          <div className="mt-4 flex">
            <div className="mr-6 h-4 w-4 rounded-full bg-gray-300"></div>
            <p className="text-gray-600 dark:text-gray-400">
              {readTime} minute read
            </p>
          </div>
        </div>
        <p className="mt-5 leading-relaxed text-gray-600 dark:text-gray-400">
          {project.intro}
        </p>
      </div>
      <div className="flex w-full justify-center">
        <Image
          src={project.coverImage}
          width="1024"
          height="625"
          alt="A picture of the project"
          objectFit="cover"
          className="rounded"
        />
      </div>
      <div className="mx-auto max-w-3xl">
        <InfoBox title='"What is this?"' className="mt-6">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            What you are about to read is a description of the project, to
            hopefully answer why and how I built this project, what I learned,
            what problems I faced and how I overcame them, as well as what I
            would do differently next time, and how I would make it better.
          </p>
        </InfoBox>
        <article
          dangerouslySetInnerHTML={{ __html: content }}
          className="prose mx-auto mt-6 max-w-2xl dark:prose-invert"
        />
        <div className="mx-auto max-w-2xl">
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
      project: getProjectBySlug(params.slug),
      slugs: getProjectsSlugs()
    }
  }
}
