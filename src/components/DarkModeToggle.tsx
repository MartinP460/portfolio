import { SunIcon, MoonIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import useDarkMode from '../hooks/useDarkMode'

const DarkModeToggle = ({ className }: { className?: string }) => {
  const [isDark, setIsDark] = useDarkMode()

  const label = isDark ? 'Toggle light mode' : 'Toggle dark mode'

  return (
    <button
      className={clsx(
        'relative h-12 w-12 items-center justify-center text-primary-800 transition-colors dark:text-white',
        className
      )}
      aria-label={label}
      title={label}
      onClick={() => setIsDark(!isDark)}
    >
      <SunIcon
        className={clsx(
          'absolute w-8 transition-colors hover:text-yellow-500',
          isDark ? '' : 'invisible'
        )}
      />
      <MoonIcon
        className={clsx(
          'absolute w-8 transition-colors hover:text-blue-200',
          isDark ? 'invisible' : ''
        )}
      />
    </button>
  )
}

export default DarkModeToggle
