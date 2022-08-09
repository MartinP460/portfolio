import { Project } from '../types/project'
import { ExternalLinkIcon } from '@heroicons/react/outline'
import { GithubIcon, DiagonalLinesPattern } from './icons'
import Image from 'next/image'
import NextLink from 'next/link'
import Link from './Link'
import clsx from 'clsx'

const Project = ({ project }: { project: Omit<Project, 'content'> }) => {
  const links = (repoUrl: string, liveUrl: string, className?: string) => (
    <ul className={clsx('flex gap-4', className)}>
      <li>
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Github repository"
        >
          <GithubIcon className="w-7 h-7 fill-primary-800 hover:fill-primary-500 transition" />
        </a>
      </li>
      <li>
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Live example"
        >
          <ExternalLinkIcon className="w-7 h-7 stroke-primary-800 hover:stroke-primary-500 transition" />
        </a>
      </li>
    </ul>
  )

  const { title, intro, tags, slug, coverImage, liveUrl, repoUrl, priority } =
    project

  return (
    <li className="flex flex-col md:flex-row">
      <div className="w-full order-1 mt-5 min-h-[14rem] flex-shrink-0 relative md:w-3/5 md:order-2 md:mt-0">
        <NextLink href={`/projects/${slug}`}>
          <a>
            <Image
              src={coverImage}
              layout="fill"
              objectFit="cover"
              className="rounded hover:scale-110 transition"
            />
          </a>
        </NextLink>
        <DiagonalLinesPattern
          className={clsx(
            'absolute top-0 rounded hidden md:block',
            priority === 2 ? 'right-0' : ''
          )}
        >
          {links(repoUrl, liveUrl, 'p-4')}
        </DiagonalLinesPattern>
      </div>
      <div
        className={clsx(
          'w-full flex flex-col md:min-h-[300px]',
          priority === 2 ? 'md:order-1 md:mr-6' : 'md:ml-10 md:order-2'
        )}
      >
        <ul className="flex gap-6">
          {tags.map((tag) => (
            <li key={tag} className="text-gray-600 dark:text-gray-400">
              {tag}
            </li>
          ))}
        </ul>
        <h4 className="font-heading font-light text-4xl mt-3 md:text-5xl dark:text-white">
          {title}
        </h4>
        <p
          className="mt-4 text-gray-600 dark:text-gray-400"
          data-testid="intro-text"
        >
          {intro}
        </p>
        <div className="h-full items-end hidden md:flex">
          <Link href={`/projects/${slug}`} data-testid="project-page-link">
            Read more
          </Link>
        </div>
      </div>
      <div className="md:hidden order-last flex justify-between items-center mt-4">
        <div className="h-full flex items-end">
          <Link href={`/projects/${slug}`}>Read more</Link>
        </div>
        {links(repoUrl, liveUrl)}
      </div>
    </li>
  )
}

export default Project
