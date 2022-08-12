import { render, screen } from '@testing-library/react'
import { Thumbnail } from '../types/project'
import Project from '../components/Project'
import '@testing-library/jest-dom'

describe('Project component', () => {
  const mockProject: Thumbnail = {
    title: 'Onsplash',
    intro:
      'Test Onsplash is a clone/recreation of the image-sharing platform Unsplash. In addition to replicating Unsplash’s iconic gallery design, Onsplash enables users to perform CRUD operations on their own and other’s images.',
    tags: ['Next.js', 'GraphQL', 'Typescript'],
    slug: 'onsplash',
    coverImage: '/images/onsplash.jpg',
    liveUrl: 'https://onsplash.vercel.app/',
    repoUrl: 'https://github.com/MartinP460/portfolio/tree/main',
    priority: 1
  }

  beforeEach(() => {
    render(<Project project={mockProject} />)
  })

  it('renders titles', () => {
    expect(screen.getByText('Onsplash', { selector: 'h4' })).toBeInTheDocument()
  })

  it('renders intro', () => {
    expect(screen.getByTestId('intro-text')).toHaveTextContent(
      mockProject.intro
    )
  })

  it('renders all tags', () => {
    mockProject.tags.forEach((tag) => {
      expect(screen.getByText(tag, { selector: 'li' })).toBeInTheDocument()
    })
  })

  it('renders a link that links to the project page', () => {
    const anchor = screen.getAllByText('Read more', { selector: 'a' })[0]

    expect(anchor).toHaveAttribute('href', '/projects/onsplash')
  })
})
