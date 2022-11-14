import {
  AdjustmentsIcon,
  UserIcon,
  PuzzleIcon,
  MailIcon
} from '@heroicons/react/outline'
import useActiveSection from '../hooks/useActiveSection'

const SideNavigation = () => {
  const active = useActiveSection()

  const iconStyles =
    'w-6 hover:text-primary-700 dark:hover:text-primary-500 transition'

  return (
    <nav className="hidden h-screen w-20 lg:block">
      <ul className="fixed flex h-screen flex-col items-center justify-center gap-10 text-primary-800 dark:text-white lg:w-20 xl:w-0">
        <li>
          <a
            href="#about"
            title="about"
            className={active === 'about' ? 'text-primary-200' : ''}
          >
            <UserIcon className={iconStyles} />
          </a>
        </li>
        <li>
          <a
            href="#projects"
            title="projects"
            className={active === 'projects' ? 'text-primary-200' : ''}
          >
            <AdjustmentsIcon className={iconStyles} />
          </a>
        </li>
        <li>
          <a
            href="#skillset"
            title="skillset"
            className={active === 'skillset' ? 'text-primary-200' : ''}
          >
            <PuzzleIcon className={iconStyles} />
          </a>
        </li>
        <li>
          <a
            href="#contact"
            title="contact"
            className={active === 'contact' ? 'text-primary-200' : ''}
          >
            <MailIcon className={iconStyles} />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default SideNavigation
