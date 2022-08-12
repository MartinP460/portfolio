import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const projectsDirectory = join(process.cwd(), '/projects')

const getProject = (slug: string, fields: string[] = []) => {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(projectsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: { [key: string]: string | number } = {}

  for (const field of fields) {
    if (data[field] !== undefined) {
      items[field] = data[field]
    }

    if (field === 'slug') {
      items[field] = realSlug
    }

    if (field === 'content') {
      items[field] = content
    }
  }

  return items
}

export const getProjectsSlugs = () => {
  return fs
    .readdirSync(projectsDirectory)
    .map((slug) => slug.replace(/\.md$/, ''))
}

export const getAllProjectsData = () => {
  const slugs = getProjectsSlugs()
  const projects = slugs
    .map((slug) =>
      getProject(slug, [
        'title',
        'intro',
        'tags',
        'slug',
        'coverImage',
        'liveUrl',
        'repoUrl',
        'priority'
      ])
    )
    .sort((a, b) => Number(a.priority) - Number(b.priority))

  return projects
}

export const getProjectBySlug = (slug: string) => {
  return getProject(slug, [
    'title',
    'intro',
    'tags',
    'slug',
    'coverImage',
    'liveUrl',
    'repoUrl',
    'content'
  ])
}
