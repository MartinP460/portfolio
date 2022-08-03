import { SunIcon, MoonIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import useDarkMode from '../hooks/useDarkMode'

const DarkModeToggle = ({ className }: { className?: string }) => {
  const [isDark, setIsDark] = useDarkMode()

  const label = isDark ? 'Toggle light mode' : 'Toggle dark mode'

  return (
    <button
      className={clsx(
        'relative w-12 h-12 items-center justify-center text-primary-800 transition-colors',
        className
      )}
      aria-label={label}
      title={label}
      onClick={() => setIsDark(!isDark)}
    >
      <SunIcon
        className={clsx(
          'w-8 absolute hover:text-yellow-500 transition-colors',
          isDark ? '' : 'invisible'
        )}
      />
      <MoonIcon
        className={clsx(
          'w-8 absolute hover:text-blue-200 transition-colors',
          isDark ? 'invisible' : ''
        )}
      />
    </button>
  )
}

export default DarkModeToggle
