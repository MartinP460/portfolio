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
    <nav className="h-screen hidden lg:block w-20">
      <ul className="fixed h-screen lg:w-20 xl:w-0 flex flex-col gap-10 justify-center items-center text-primary-800 dark:text-white">
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
