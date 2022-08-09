import usePrefersDarkMode from './usePrefersDarkMode'
import useSafeLocalStorage from './useSafeLocalStorage'
import { useState, useEffect } from 'react'

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState()
  const prefersDarkMode = usePrefersDarkMode()
  const [isDarkMode, setIsDarkMode] = useSafeLocalStorage(
    'dark-mode',
    undefined
  )

  useEffect(() => {
    if (!window) return

    setDarkMode(isDarkMode === undefined ? prefersDarkMode : isDarkMode)
  }, [isDarkMode, prefersDarkMode])

  useEffect(() => {
    if (!window) return

    const root = window.document.documentElement

    root.classList.remove(darkMode ? 'light' : 'dark')
    root.classList.add(darkMode ? 'dark' : 'light')
  }, [darkMode])

  return [darkMode, setIsDarkMode]
}

export default useDarkMode
