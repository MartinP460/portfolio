import {
  AdjustmentsIcon,
  UserIcon,
  PuzzleIcon,
  MailIcon
} from '@heroicons/react/outline'
import useActiveSection from '../hooks/useActiveSection'

const SideNavigation = () => {
  const active = useActiveSection()

  // this calculates the width of the sidebar from what the margin and padding is in index.tsx
  const sidebarWidth =
    'w-[calc((100vw_-_(1024px_-_40px))_/_2)] lg:w-[calc((100vw_-_(1024px_-_96px))_/_2)]'

  const iconStyles =
    'w-6 hover:text-primary-700 dark:hover:text-primary-500 transition'

  return (
    <nav
      className={`fixed h-screen hidden lg:flex flex-col gap-10 justify-center items-center text-primary-800 dark:text-white ${sidebarWidth}`}
    >
      <a
        href="#about"
        title="about"
        className={active === 'about' ? 'text-primary-200' : ''}
      >
        <UserIcon className={iconStyles} />
      </a>
      <a
        href="#projects"
        title="projects"
        className={active === 'projects' ? 'text-primary-200' : ''}
      >
        <AdjustmentsIcon className={iconStyles} />
      </a>
      <a
        href="#skillset"
        title="skillset"
        className={active === 'skillset' ? 'text-primary-200' : ''}
      >
        <PuzzleIcon className={iconStyles} />
      </a>
      <a
        href="#contact"
        title="contact"
        className={active === 'contact' ? 'text-primary-200' : ''}
      >
        <MailIcon className={iconStyles} />
      </a>
    </nav>
  )
}

export default SideNavigation
