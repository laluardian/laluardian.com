'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export default function ToggleTheme() {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = (theme === 'system' ? systemTheme : theme) as Theme

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleThemeIcon = {
    light: <SunIcon className="h-5 w-5" />,
    dark: <MoonIcon className="h-5 w-5" />,
  }[currentTheme]

  return (
    <button
      onClick={() => setTheme(currentTheme === 'light' ? 'dark' : 'light')}
      className="rounded-md p-2 transition-all hover:bg-gray-100 dark:hover:bg-white dark:hover:bg-opacity-10"
      aria-label="Switch theme"
    >
      {toggleThemeIcon}
    </button>
  )
}
