import { NextPage } from 'next'
import { getAllProjectsData } from '../services/projectService'
import { Project } from '../types/project'
import SideNavigation from './../components/SideNavigation'
import Header from '../components/Header'
import About from '../components/About'
import Projects from '../components/Projects'

interface IndexProps {
  projects: Project[]
}

const Index: NextPage<IndexProps> = ({ projects }) => {
  return (
    <>
      <SideNavigation />
      <div className="max-w-5xl mx-auto px-5 lg:px-12">
        <main className="w-full h-screen">
          <Header />
          <About />
          <Projects projects={projects} />
        </main>
      </div>
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
