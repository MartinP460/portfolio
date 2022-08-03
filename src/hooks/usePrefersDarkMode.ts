/* Source:  https://github.com/jeffjadulco/jeffjadulco.com/blob/master/src/hooks/usePrefersDarkMode.ts */
import { useEffect, useState } from 'react'

const usePrefersDarkMode = () => {
  const [value, setValue] = useState(true)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setValue(mediaQuery.matches)

    const handler = () => setValue(mediaQuery.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return value
}

export default usePrefersDarkMode
