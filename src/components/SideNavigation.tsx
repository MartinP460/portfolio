import {
  AdjustmentsIcon,
  UserIcon,
  PuzzleIcon,
  MailIcon
} from '@heroicons/react/outline'

const SideNavigation = () => {
  const sharedIconStyles = 'w-6 text-primary-800 hover:text-primary-700'
  // this calculates the width of the sidebar from what the margin and padding is in index.tsx
  const sidebarWidth =
    'w-[calc((100vw_-_(1024px_-_40px))_/_2)] lg:w-[calc((100vw_-_(1024px_-_96px))_/_2)]'

  return (
    <div
      className={`fixed h-screen hidden lg:flex flex-col gap-10 justify-center items-center ${sidebarWidth}`}
    >
      <a href="#about">
        <UserIcon className={sharedIconStyles} />
      </a>
      <a href="#projects">
        <AdjustmentsIcon className={sharedIconStyles} />
      </a>
      <a href="#skillset">
        <PuzzleIcon className={sharedIconStyles} />
      </a>
      <a href="#contact">
        <MailIcon className={sharedIconStyles} />
      </a>
    </div>
  )
}

export default SideNavigation
