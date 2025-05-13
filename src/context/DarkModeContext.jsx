import { createContext } from 'react'
import { useLocalStorageState } from '../hooks/useLocalStorageState'
import { useContext } from 'react'
import { useEffect } from 'react'
const DarkModeContext = createContext()
function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, 'isDarkMode')
  function toggleDarkMode() {
    setIsDarkMode(isDark => !isDark)
  }
  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add('dark-mode')
        document.documentElement.classList.remove('light-mode')
      } else {
        document.documentElement.classList.add('light-mode')
        document.documentElement.classList.remove('dark-mode')
      }
    },
    [isDarkMode]
  )
  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export { DarkModeProvider, useDarkMode }

function useDarkMode() {
  const context = useContext(DarkModeContext)
  if (context === undefined) {
    throw new Error('DarkMode used outside context scope')
  }
  return context
}
