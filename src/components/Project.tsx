import { ReactNode } from 'react'
import { Project } from '../types/project'
import { ExternalLinkIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import NextLink from 'next/link'
import Link from './Link'
import clsx from 'clsx'

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={className}
    viewBox="0 0 16 16"
  >
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
  </svg>
)

const DiagonalLinesPattern = ({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) => (
  <div
    className={className}
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233868c0' fill-opacity='0.3' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`
    }}
  >
    {children}
  </div>
)

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
    <li key={title} className="flex flex-col md:flex-row">
      <div className="w-full order-1 mt-5 min-h-[14rem] flex-shrink-0 relative md:w-3/5 md:order-2">
        <NextLink href={slug}>
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
            <li key={tag} className="text-gray-600">
              {tag}
            </li>
          ))}
        </ul>
        <h4 className="font-light text-4xl mt-3 md:text-5xl">{title}</h4>
        <p className="mt-4" data-testid="intro-text">
          {intro}
        </p>
        <div className="h-full items-end hidden md:flex">
          <Link href={slug} data-testid="project-page-link">
            Read more
          </Link>
        </div>
      </div>
      <div className="md:hidden order-last flex justify-between items-center mt-4">
        <div className="h-full flex items-end">
          <Link href={slug}>Read more</Link>
        </div>
        {links(repoUrl, liveUrl)}
      </div>
    </li>
  )
}

export default Project
