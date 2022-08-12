import { useState } from 'react'
import clsx from 'clsx'
import Button from './Button'
import DarkModeToggle from './DarkModeToggle'
import Sidebar from './Sidebar'
import useNavbarScroll from '../hooks/useNavbarScroll'

const Navbar = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const [visible, isAtTop] = useNavbarScroll()

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 z-20 h-20 w-full bg-white py-3 px-4 backdrop-blur-md transition dark:bg-primary-800/90 sm:px-8 lg:pr-20',
        visible ? 'translate-y-0' : '-translate-y-20',
        isAtTop ? 'shadow-none dark:bg-primary-800/100' : 'shadow-lg'
      )}
    >
      <div className="flex h-full items-center justify-end gap-4">
        <DarkModeToggle className="hidden lg:flex" />
        <Button className="hidden lg:block">Resume</Button>
        <button
          type="button"
          onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
          className={clsx(
            'burger z-30 outline-none dark:before:bg-white dark:after:bg-white lg:hidden',
            sidebarIsOpen ? 'burger--active fixed mt-8' : ''
          )}
        ></button>
        <Sidebar
          open={sidebarIsOpen}
          close={() => setSidebarIsOpen(!sidebarIsOpen)}
        />
      </div>
    </nav>
  )
}

export default Navbar
