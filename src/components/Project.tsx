import { Thumbnail } from '../types/project'
import { ExternalLinkIcon } from '@heroicons/react/outline'
import { GithubIcon } from './icons'
import Image from 'next/image'
import NextLink from 'next/link'
import clsx from 'clsx'
import Link from './Link'

const Project = ({ project }: { project: Thumbnail }) => {
  const links = (repoUrl: string, liveUrl: string, className?: string) => (
    <ul className={clsx('flex gap-4', className)}>
      <li>
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Github repository"
        >
          <GithubIcon className="h-7 w-7 fill-primary-800 transition hover:fill-primary-500" />
        </a>
      </li>
      <li>
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Live example"
        >
          <ExternalLinkIcon className="h-7 w-7 stroke-primary-800 transition hover:stroke-primary-500" />
        </a>
      </li>
    </ul>
  )

  const { title, intro, tags, slug, coverImage, liveUrl, repoUrl, priority } =
    project

  return (
    <li className="flex flex-col md:flex-row">
      <div className="group relative order-1 mt-5 min-h-[14rem] w-full shrink-0 md:order-2 md:mt-0 md:w-3/5">
        <div
          className={clsx(
            'absolute top-3 z-20 hidden rounded-full bg-secondary-300 md:block',
            priority === 2 ? 'right-3' : 'left-3'
          )}
        >
          {links(repoUrl, liveUrl, 'py-2 px-3')}
        </div>
        <NextLink href={`/projects/${slug}`}>
          <a>
            <Image
              src={coverImage}
              layout="fill"
              objectFit="cover"
              alt="A picture of the project"
              className="rounded brightness-90 saturate-50 transition group-hover:scale-110 group-hover:saturate-100"
            />
          </a>
        </NextLink>
      </div>
      <div
        className={clsx(
          'flex w-full flex-col md:min-h-[300px]',
          priority === 2 ? 'md:order-1 md:mr-6' : 'md:order-2 md:ml-10'
        )}
      >
        <ul className="flex gap-6">
          {tags.map((tag) => (
            <li key={tag} className="text-gray-600 dark:text-gray-300">
              {tag}
            </li>
          ))}
        </ul>
        <h4 className="mt-3 font-heading text-4xl font-light dark:text-white md:text-5xl">
          {title}
        </h4>
        <p
          className="mt-4 text-gray-600 dark:text-gray-300"
          data-testid="intro-text"
        >
          {intro}
        </p>
        <div className="hidden h-full items-end md:flex">
          <Link href={`/projects/${slug}`} data-testid="project-page-link">
            Read more
          </Link>
        </div>
      </div>
      <div className="order-last mt-4 flex items-center justify-between md:hidden">
        <div className="flex h-full items-end">
          <Link href={`/projects/${slug}`}>Read more</Link>
        </div>
        {links(repoUrl, liveUrl)}
      </div>
    </li>
  )
}

export default Project
