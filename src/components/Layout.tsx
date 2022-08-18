import { ReactNode } from 'react'
import clsx from 'clsx'
import SideNavigation from './SideNavigation'

interface LayoutProps {
  sideNavigation?: boolean
  verticalLines?: boolean
  children: ReactNode
}

const Layout = ({ sideNavigation, verticalLines, children }: LayoutProps) => {
  return (
    <div className="mx-auto flex max-w-6xl">
      {sideNavigation && <SideNavigation />}
      <main
        className={clsx(
          'w-full px-4',
          sideNavigation ? 'sm:px-8 lg:mr-20' : 'sm:px-8',
          verticalLines ? 'vertical-lines' : ''
        )}
      >
        {children}
      </main>
    </div>
  )
}

export default Layout
