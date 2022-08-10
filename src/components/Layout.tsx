import { ReactNode } from 'react'
import Navbar from './Navbar'
import SideNavigation from './SideNavigation'

interface LayoutProps {
  sideNavigation?: boolean
  children: ReactNode
}

const Layout = ({ sideNavigation, children }: LayoutProps) => {
  return (
    <>
      {sideNavigation && <SideNavigation />}
      <main className="max-w-5xl mx-auto px-4 lg:px-20 xl:px-12 w-full">
        <Navbar />
        {children}
      </main>
    </>
  )
}

export default Layout
