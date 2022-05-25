import { createContext, useEffect, useState } from "react"

const ThemeContext = createContext()

export function ThemeProvider({children}){

  const [theme, setTheme] = useState('')

  const getCurrentTheme = () => {
    let currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : currentTheme
    return currentTheme;
  }

  const toggleTheme = (newTheme) => {
    localStorage.setItem("theme", newTheme)
    setTheme(newTheme)
    loadTheme(newTheme)
  }

  const loadTheme = (colorScheme) => {
    const root = document.querySelector(':root')
    root.setAttribute('color-scheme', colorScheme)
  }

  useEffect(() => {
    let currentTheme = getCurrentTheme()
    setTheme(currentTheme)
    loadTheme(currentTheme)
  }, []);

  const value = {
    toggleTheme,
    theme
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext