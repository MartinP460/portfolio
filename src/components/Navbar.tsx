import { useState } from 'react'
import clsx from 'clsx'
import Button from './Button'
import DarkModeToggle from './DarkModeToggle'
import Sidebar from './Sidebar'

const Navbar = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

  return (
    <nav className="h-20 py-3">
      <div className="flex items-center justify-end gap-4">
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
