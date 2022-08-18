import { ReactNode, useState } from 'react'
import clsx from 'clsx'
import Button from './Button'
import DarkModeToggle from './DarkModeToggle'
import Sidebar from './Sidebar'
import useNavbarScroll from '../hooks/useNavbarScroll'

interface NavbarProps {
  sidebarLinks: {
    title: string
    href: string
    icon: ReactNode
  }[]
}

const Navbar = ({ sidebarLinks }: NavbarProps) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const [visible, isAtTop] = useNavbarScroll()

  return (
    <>
      <nav
        className={clsx(
          'fixed top-0 left-0 z-20 h-20 w-full bg-white py-3 px-4 backdrop-blur-md transition dark:bg-primary-800/90 sm:px-8 lg:pr-20',
          visible ? 'translate-y-0' : '-translate-y-20',
          isAtTop
            ? 'bg-transparent shadow-none backdrop-blur-none dark:bg-transparent'
            : 'shadow-lg'
        )}
      >
        <div className="mx-auto flex h-full max-w-6xl items-center justify-end gap-4">
          <DarkModeToggle className="hidden lg:flex" />
          <Button className="hidden lg:block">Resume</Button>
        </div>
      </nav>
      <div className="fixed top-0 left-0 z-30 flex h-20 w-full items-center justify-end py-3 px-4 sm:px-8 lg:hidden">
        <button
          type="button"
          onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
          className={clsx(
            'burger outline-none transition dark:before:bg-white dark:after:bg-white lg:hidden',
            visible ? 'translate-y-0' : '-translate-y-20',
            sidebarIsOpen ? 'burger--active' : ''
          )}
        ></button>
      </div>
      <Sidebar
        open={sidebarIsOpen}
        close={() => setSidebarIsOpen(!sidebarIsOpen)}
        links={sidebarLinks}
      />
    </>
  )
}

export default Navbar
