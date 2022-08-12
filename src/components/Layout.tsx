import { ReactNode } from 'react'
import Navbar from './Navbar'
import SideNavigation from './SideNavigation'

interface LayoutProps {
  sideNavigation?: boolean
  children: ReactNode
}

const Layout = ({ sideNavigation, children }: LayoutProps) => {
  return (
    <div className="mx-auto flex max-w-6xl">
      {sideNavigation && <SideNavigation />}
      <main className="w-full px-4 sm:px-8 lg:pr-20">
        <Navbar />
        {children}
      </main>
    </div>
  )
}

export default Layout
