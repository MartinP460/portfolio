import { NextPage } from 'next'
import { getAllProjectsData } from '../services/projectService'
import { Project } from '../types/project'
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

const Index: NextPage<IndexProps> = ({ projects }) => {
  return (
    <>
      <SideNavigation />
      <main className="max-w-5xl mx-auto px-5 lg:px-12 w-full">
        <Navbar />
        <Header />
        <About />
        <Projects projects={projects} />
        <Skillset />
        <Contact />
      </main>
    </>
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
