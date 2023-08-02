'use client'

import ToggleTheme from '@/components/toggle-theme'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { path: '/', name: 'Home' },
  { path: '/blog', name: 'Blog' },
  { path: '/contact', name: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  return (
    <nav className="flex items-center justify-between">
      <ul className="ml-[-0.75rem] flex">
        {navItems.map(({ path, name }) => {
          return (
            <li key={path}>
              <Link
                href={path}
                className={clsx(
                  'inline-block rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-white dark:hover:bg-opacity-10',
                  {
                    'font-bold': path === pathname,
                  },
                )}
              >
                {name}
              </Link>
            </li>
          )
        })}
      </ul>
      <ToggleTheme />
    </nav>
  )
}
