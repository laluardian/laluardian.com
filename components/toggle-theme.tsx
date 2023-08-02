'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ToggleTheme() {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
      className="rounded-md p-2 duration-150 hover:bg-gray-100 dark:hover:bg-white dark:hover:bg-opacity-10"
      aria-label="Switch theme"
    >
      {currentTheme === 'light' ? (
        <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      ) : (
        <MoonIcon className="h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      )}
    </button>
  )
}
