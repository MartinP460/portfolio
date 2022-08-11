export type Project = {
  title: string
  intro: string
  tags: string[]
  slug: string
  coverImage: string
  liveUrl: string
  repoUrl: string
  priority: 1 | 2 | 3
  content: string
}

export type Thumbnail = Omit<Project, 'content'>
