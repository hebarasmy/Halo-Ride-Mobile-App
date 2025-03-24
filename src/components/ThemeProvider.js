"use client"

import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Check for stored theme preference
    if (typeof window !== "undefined") {
      const storedTheme = window.localStorage.getItem("theme")
      if (storedTheme) {
        return storedTheme
      }
      // Default to system preference
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }
    return "light" // Default to light if window is not available
  })

  // Apply theme class to document
  useEffect(() => {
    const root = window.document.documentElement

    // Remove both classes first
    root.classList.remove("dark", "light")

    // Add the current theme class
    root.classList.add(theme)

    // Store theme preference
    localStorage.setItem("theme", theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (newTheme) => {
      setTheme(newTheme)
    },
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

