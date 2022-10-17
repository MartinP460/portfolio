import { ReactNode, useState } from 'react'
import { ArrowLeftIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import Link from 'next/link'
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
  projectPage?: boolean
}

const Navbar = ({ sidebarLinks, projectPage }: NavbarProps) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const [visible, isAtTop] = useNavbarScroll()

  return (
    <>
      <nav
        className={clsx(
          'fixed top-0 left-0 z-30 h-20 w-full bg-white py-3 backdrop-blur-md transition dark:bg-primary-800/90',
          visible ? 'translate-y-0' : '-translate-y-20',
          isAtTop
            ? 'bg-transparent shadow-none backdrop-blur-none dark:bg-transparent'
            : 'shadow-lg',
          projectPage ? 'px-0 2xl:px-12' : 'px-4 md:px-8 lg:px-12'
        )}
      >
        <div
          className={clsx(
            'mx-auto flex h-full items-center',
            projectPage
              ? 'max-w-screen-2xl justify-between px-8'
              : 'max-w-6xl justify-end'
          )}
        >
          {projectPage && (
            <Link href="/">
              <a className="hidden lg:block">
                <ArrowLeftIcon className="w-10 text-primary-800 transition hover:-translate-x-1 hover:text-primary-200 dark:text-white dark:hover:text-primary-200" />
              </a>
            </Link>
          )}
          <div
            className={clsx(
              'flex items-center gap-8',
              projectPage && isAtTop ? 'invisible' : 'visible'
            )}
          >
            <DarkModeToggle className="hidden lg:flex" />
            <Button className="hidden lg:block">Resume</Button>
          </div>
        </div>
      </nav>
      <div className="fixed top-0 left-0 z-30 flex h-20 w-full items-center justify-end py-3 px-4 sm:px-8 lg:hidden">
        <button
          type="button"
          onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
          className={clsx(
            'burger outline-none transition dark:before:bg-white dark:after:bg-white lg:hidden',
            visible ? 'translate-y-0' : '-translate-y-20',
            sidebarIsOpen ? 'burger--active' : '',
            projectPage && isAtTop ? 'before:bg-white after:bg-white' : ''
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
