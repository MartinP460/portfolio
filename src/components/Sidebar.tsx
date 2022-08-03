import { MouseEvent } from 'react'
import {
  AdjustmentsIcon,
  UserIcon,
  PuzzleIcon,
  MailIcon
} from '@heroicons/react/outline'
import clsx from 'clsx'
import DarkModeToggle from './DarkModeToggle'
import Button from './Button'

interface SidebarProps {
  open: boolean
  close(): void
}

const Sidebar = ({ open, close }: SidebarProps) => {
  const linkStyle =
    'uppercase font-semibold text-white text-lg flex gap-8 items-center justify-between'

  return (
    <div
      className={clsx(
        'fixed h-screen w-screen bg-primary-800/70 top-0 right-0 z-20',
        'translate-x-full transition-transform backdrop-blur-md backdrop-brightness-90',
        'flex flex-col p-16 pb-32 gap-8 justify-center',
        open ? 'translate-x-0' : ''
      )}
    >
      <DarkModeToggle className="text-white flex self-center mb-8" />
      <a href="#about" className={linkStyle} onClick={() => close()}>
        About me
        <UserIcon className="w-6 text-white/50" />
      </a>
      <a href="#projects" className={linkStyle} onClick={() => close()}>
        Projects
        <AdjustmentsIcon
          className="w-6 text-white/50"
          onClick={() => close()}
        />
      </a>
      <a href="#skillset" className={linkStyle} onClick={() => close()}>
        Skillset
        <PuzzleIcon className="w-6 text-white/50" />
      </a>
      <a href="#contact" className={linkStyle} onClick={() => close()}>
        Contact
        <MailIcon className="w-6 text-white/50" />
      </a>
      <Button className="border-white text-white self-center mt-8">
        Resume
      </Button>
    </div>
  )
}

export default Sidebar
