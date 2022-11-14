import { ReactNode, useState } from 'react'
import { ArrowLeftIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import Link from 'next/link'
import ResumeButton from './ResumeButton'
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

  // the conditional logic required is what has made the component a bit messy.
  return (
    <>
      <nav
        className={clsx(
          'top-0 left-0 z-30 h-20 w-full bg-white/90 backdrop-blur-md transition dark:bg-neutral-700/90',
          sidebarIsOpen ? 'hidden' : 'fixed',
          visible ? 'lg:translate-y-0' : 'lg:-translate-y-20',
          isAtTop
            ? ' bg-transparent shadow-none lg:backdrop-blur-none lg:dark:bg-transparent'
            : 'shadow-lg',
          projectPage ? 'px-0 2xl:px-12' : 'px-4 md:px-8 lg:px-12',
          projectPage && isAtTop ? '!bg-transparent !backdrop-blur-none' : ''
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
            <ResumeButton className="hidden lg:block" />
          </div>
        </div>
      </nav>
      <div className="fixed top-0 left-0 z-40 flex h-20 w-full items-center justify-end px-4 sm:px-8 lg:hidden">
        <button
          type="button"
          onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
          className={clsx(
            'burger outline-none transition dark:before:bg-white dark:after:bg-white lg:hidden',
            visible ? 'lg:translate-y-0' : 'lg:-translate-y-20',
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
