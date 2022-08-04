import { useState } from 'react'
import clsx from 'clsx'
import Button from './Button'
import DarkModeToggle from './DarkModeToggle'
import Sidebar from './Sidebar'

const Navbar = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

  return (
    <nav className="py-3 h-20">
      <div className="flex justify-end items-center gap-4">
        <DarkModeToggle className="hidden sm:flex" />
        <Button className="hidden sm:block">Resume</Button>
        <button
          type="button"
          onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
          className={clsx(
            'burger sm:hidden z-30 outline-none dark:before:bg-white dark:after:bg-white',
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
