import { SunIcon, MoonIcon } from './icons'
import clsx from 'clsx'
import useDarkMode from '../hooks/useDarkMode'

const DarkModeToggle = ({ className }: { className?: string }) => {
  const [isDark, setIsDark] = useDarkMode()

  const label = isDark ? 'Toggle light mode' : 'Toggle dark mode'

  return (
    <button
      className={clsx(
        'text-primary-800 transition-colors dark:text-white',
        className
      )}
      aria-label={label}
      title={label}
      onClick={() => setIsDark(!isDark)}
    >
      <SunIcon
        className={clsx(
          'w-8 transition-colors hover:text-yellow-500',
          isDark ? '' : 'hidden'
        )}
      />
      <MoonIcon
        className={clsx(
          'w-8 transition-colors hover:text-primary-200',
          isDark ? 'hidden' : ''
        )}
      />
    </button>
  )
}

export default DarkModeToggle
