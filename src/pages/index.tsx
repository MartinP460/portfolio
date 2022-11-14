import { NextPage } from 'next'
import {
  AdjustmentsIcon,
  UserIcon,
  PuzzleIcon,
  MailIcon
} from '@heroicons/react/outline'
import { getAllProjectsData } from '../services/projectService'
import { Project } from '../types/project'
import useSmoothScroll from '../hooks/useSmoothScroll'
import Layout from '../components/Layout'
import SideNavigation from './../components/SideNavigation'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import About from '../components/About'
import Projects from '../components/Projects'
import Skillset from '../components/Skillset'
import Contact from './../components/Contact'

interface IndexProps {
  projects: Project[]
}

const sidebarLinks = [
  {
    title: 'about',
    href: '#about',
    icon: <UserIcon />
  },
  {
    title: 'projects',
    href: '#projects',
    icon: <PuzzleIcon />
  },
  {
    title: 'skillset',
    href: '#skillset',
    icon: <AdjustmentsIcon />
  },
  {
    title: 'contact',
    href: '#contact',
    icon: <MailIcon />
  }
]

const Index: NextPage<IndexProps> = ({ projects }) => {
  useSmoothScroll()

  return (
    <Layout
      title="Home"
      description="The personal portfolio of Martin Polley. Web developer who loves working with React and Next.js."
    >
      <div className="transition-colors dark:bg-neutral-700">
        <div className="mx-auto flex max-w-6xl">
          <SideNavigation />
          <div className="w-full px-4 sm:px-8 lg:ml-20">
            <Navbar sidebarLinks={sidebarLinks} />
            <Header />
            <About />
            <Projects projects={projects} />
            <Skillset />
            <Contact />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index

export const getStaticProps = async () => {
  return {
    props: {
      projects: getAllProjectsData()
    }
  }
}
