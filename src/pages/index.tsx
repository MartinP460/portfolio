import { NextPage } from 'next'
import { getAllProjectsData } from '../services/projectService'
import { Project } from '../types/project'
import SideNavigation from './../components/SideNavigation'

interface IndexProps {
  projects: Project[]
}

const Index: NextPage<IndexProps> = ({ projects }) => {
  return (
    <>
      <SideNavigation />
      <div className="max-w-5xl mx-auto px-5 lg:px-12">
        <main className="w-full h-screen">Hello world!</main>
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
