import Footer from '@/components/sections/footer'
import Navbar from '@/components/sections/navbar'
import { ThemeProvider } from '@/components/theme-provider'
import '@/styles/globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lalu Ahmad Ardiansyah',
  description:
    'Full-stack developer, proficient in crafting robust and cutting-edge web applications.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} mx-auto flex min-h-screen max-w-screen-md flex-col px-6 py-4 dark:bg-gray-900 md:px-12`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
