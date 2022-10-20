import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { BookmarkIcon, ExternalLinkIcon } from '@heroicons/react/outline'
import { GithubIcon } from '../../components/icons'
import { Project as ProjectType } from '../../types/project'
import {
  getProjectsSlugs,
  getProjectBySlug
} from '../../services/projectService'
import highlightjs from 'markdown-it-highlightjs'
import MarkdownIt from 'markdown-it'
import Image from 'next/image'
import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import Highlight from '../../components/Highlight'
import InfoBox from '../../components/InfoBox'
import Contact from '../../components/Contact'
import 'highlight.js/styles/atom-one-dark.css'

interface ProjectProps {
  project: ProjectType
  slugs: string[]
}

const Project: NextPage<ProjectProps> = ({ project, slugs }) => {
  const md = new MarkdownIt().use(highlightjs)
  const content = md.render(project.content)

  const words = project.content.trim().split(/\s+/).length
  const readTime = Math.ceil(words / 225)

  const sidebarLinks = slugs.map((slug) => ({
    title: slug,
    href: slug === project.slug ? '#' : `/projects/${slug}`,
    icon: <BookmarkIcon />
  }))

  const links = (
    <ul className="mt-6 flex gap-4">
      <li>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Github repository"
          className="group flex items-center rounded-lg bg-secondary-300 px-4 py-2"
        >
          <GithubIcon className="h-6 w-6 fill-primary-800 transition-colors group-hover:fill-primary-600" />
          <p className="ml-2 text-sm font-semibold text-primary-800 transition-colors group-hover:text-primary-600">
            Repository
          </p>
        </a>
      </li>
      <li>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Live example"
          className="group flex items-center rounded-lg bg-secondary-300 px-4 py-2"
        >
          <ExternalLinkIcon className="h-6 w-6 stroke-primary-800 transition-colors group-hover:stroke-primary-600" />
          <p className="ml-2 text-sm font-semibold text-primary-800 transition-colors group-hover:text-primary-600">
            Live demo
          </p>
        </a>
      </li>
    </ul>
  )

  return (
    <Layout title={project.title} description={project.intro}>
      <Navbar sidebarLinks={sidebarLinks} projectPage />
      <div className="transition-colors xl:dark:bg-primary-800">
        <div className="inner-shadow relative mx-auto flex h-[60vh] max-w-screen-2xl flex-col justify-end xl:grid xl:grid-cols-2">
          <div className="mb-8 px-4 sm:px-8 xl:flex xl:flex-col xl:justify-center">
            <Highlight
              text="Project"
              className="from-primary-500 to-primary-200 text-lg"
            />
            <div className="xl:flex">
              <h1 className="mr-10 font-heading text-5xl font-bold text-white xl:text-black xl:dark:text-white">
                {project.title}
              </h1>
              <div className="mt-4 flex items-center">
                <div className="mr-6 h-3 w-3 rounded-full bg-gray-400"></div>
                <p className="text-gray-400">{readTime} minute read</p>
              </div>
            </div>
            <p className="mt-4 hidden leading-relaxed text-gray-600 dark:text-gray-400 xl:block">
              {project.intro}
            </p>
            <div className="hidden xl:block">{links}</div>
          </div>
          <div className="fixed top-0 left-0 -z-50 h-[60vh] w-full xl:relative xl:z-0 xl:w-auto">
            <div className="absolute z-10 h-full w-full bg-primary-500/10 dark:bg-accent-200/10"></div>
            <Image
              src={project.coverImage}
              priority
              layout="fill"
              width="1024"
              height="625"
              alt="A picture of the project"
              objectFit="cover"
              className="brightness-90"
            />
          </div>
        </div>
      </div>
      <div className="bg-white transition-colors dark:bg-primary-800">
        <div className="z-50 mx-auto max-w-3xl bg-white px-4 pt-4 transition-colors dark:bg-primary-800">
          <InfoBox className="mt-2">
            <p className="text-sm leading-relaxed">
              What you are about to read is a description of the project, to
              hopefully answer why and how I built this project, what I learned,
              what problems I faced and how I overcame them, as well as what I
              would do differently next time, and how I would make it better.
            </p>
          </InfoBox>
          <div className="xl:hidden">{links}</div>
          <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400 xl:hidden">
            {project.intro}
          </p>
          <article
            dangerouslySetInnerHTML={{ __html: content }}
            className="prose mx-auto mt-6 max-w-2xl prose-a:text-accent-500 prose-pre:bg-[#282c34] prose-img:mx-auto dark:prose-invert dark:prose-a:text-accent-200 prose-img:sm:max-h-[50vh]"
          />
          <div className="mx-auto max-w-2xl">
            <Contact />
          </div>
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
