import { ReactNode, useEffect } from 'react'
import { HomeIcon } from './icons'
import clsx from 'clsx'
import Link from 'next/link'
import DarkModeToggle from './DarkModeToggle'
import ResumeButton from './ResumeButton'

interface SidebarProps {
  open: boolean
  close(): void
  links: {
    title: string
    href: string
    icon: ReactNode
  }[]
}

const Sidebar = ({ open, close, links }: SidebarProps) => {
  useEffect(() => {
    if (!document) return

    if (open) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  }, [open])

  const linkStyle =
    'uppercase font-semibold text-white text-lg flex gap-8 items-center justify-between z-50'

  return (
    <>
      <div
        onClick={() => close()}
        className={clsx(
          'fixed top-0 left-0 z-30 hidden h-screen w-1/2 bg-gray-600/50',
          '-translate-y-full transition-transform',
          'md:block lg:hidden',
          open ? '-translate-y-0' : ''
        )}
      ></div>
      <div
        className={clsx(
          'fixed top-0 right-0 z-30 h-screen w-screen bg-primary-800/70',
          'translate-x-full backdrop-blur-md transition-transform',
          'flex flex-col justify-center gap-8 p-16 pb-32',
          'md:w-1/2 lg:hidden',
          open ? 'translate-x-0' : ''
        )}
      >
        <div className="mb-8 flex items-center justify-between">
          <Link href="/">
            <a onClick={() => close()}>
              <HomeIcon className="w-8 text-white" />
            </a>
          </Link>
          <DarkModeToggle className="text-white" />
        </div>
        {links.map(({ title, href, icon }) => (
          <Link href={href} key={title}>
            <a className={linkStyle} onClick={() => close()}>
              {title}
              <span className="w-6 text-white/50">{icon}</span>
            </a>
          </Link>
        ))}{' '}
        <ResumeButton className="mt-8 self-center border-white text-white" />
      </div>
    </>
  )
}

export default Sidebar
