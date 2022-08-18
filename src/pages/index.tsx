import { NextPage } from 'next'
import {
  AdjustmentsIcon,
  UserIcon,
  PuzzleIcon,
  MailIcon
} from '@heroicons/react/outline'
import { getAllProjectsData } from '../services/projectService'
import { Project } from '../types/project'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import About from '../components/About'
import Projects from '../components/Projects'
import Skillset from '../components/Skillset'
import Contact from './../components/Contact'

interface IndexProps {
  projects: Project[]
}

const Index: NextPage<IndexProps> = ({ projects }) => {
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

  return (
    <Layout
      description="The personal portfolio of Martin Polley. Web developer who loves working with React and Next.js."
      sideNavigation
      verticalLines
    >
      <Navbar sidebarLinks={sidebarLinks} />
      <Header />
      <About />
      <Projects projects={projects} />
      <Skillset />
      <Contact />
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
