import {
  AdjustmentsIcon,
  UserIcon,
  PuzzleIcon,
  MailIcon
} from '@heroicons/react/outline'

const SideNavigation = () => {
  // this calculates the width of the sidebar from what the margin and padding is in index.tsx
  const sidebarWidth =
    'w-[calc((100vw_-_(1024px_-_40px))_/_2)] lg:w-[calc((100vw_-_(1024px_-_96px))_/_2)]'

  const iconStyles =
    'w-6 hover:text-primary-700 dark:hover:text-primary-200 transition'

  return (
    <nav
      className={`fixed h-screen hidden lg:flex flex-col gap-10 justify-center items-center text-primary-800 dark:text-white ${sidebarWidth}`}
    >
      <a href="#about">
        <UserIcon className={iconStyles} />
      </a>
      <a href="#projects">
        <AdjustmentsIcon className={iconStyles} />
      </a>
      <a href="#skillset">
        <PuzzleIcon className={iconStyles} />
      </a>
      <a href="#contact">
        <MailIcon className={iconStyles} />
      </a>
    </nav>
  )
}

export default SideNavigation
