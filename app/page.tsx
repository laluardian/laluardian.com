import XLogoIcon from '@/components/icons/x-logo-icon'
import OutboundLink from '@/components/outbound-link'
import { OutboundLinkProps } from '@/types'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

const socialMediaLinks: OutboundLinkProps[] = [
  {
    url: 'https://linkedin.com/in/laluardian',
    children: <LinkedInLogoIcon className="h-7 w-7" />,
    attrs: {
      'aria-label': 'Link to my LinkedIn account',
    },
  },
  {
    url: 'https://x.com/laluardian_',
    children: <XLogoIcon className="h-7 w-7 dark:fill-white" />,
    attrs: {
      'aria-label': 'Link to my X (Twitter) account',
    },
  },
  {
    url: 'https://github.com/laluardian',
    children: <GitHubLogoIcon className="h-7 w-7" />,
    attrs: {
      'aria-label': 'Link to my GitHub account',
    },
  },
]

export default function Home() {
  return (
    <main className="my-12 flex flex-col items-start justify-center gap-5">
      <div className="w-24 sm:w-44">
        <Image
          alt="Lalu Ahmad Ardiansyah"
          height={176}
          width={176}
          src="/assets/avatar.jpg"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-4">
        <div>
          <h1>Lalu Ahmad Ardiansyah</h1>
          <h2 className="font-medium text-gray-700 dark:text-gray-400">
            Full-stack Developer
          </h2>
        </div>
        <p>
          Proficient in crafting robust and cutting-edge web applications with
          the latest tools and technologies. Passionate about learning and eager
          to take on challenging opportunities in the dynamic realm of tech.
        </p>
        <p className="my-1 w-full border-l-4 border-gray-400 bg-gray-100 px-3 py-2 text-sm text-gray-800 dark:bg-white dark:bg-opacity-10 dark:text-gray-300">
          <b>Skills&nbsp;&nbsp;&mdash;&nbsp;&nbsp;</b>TypeScript, Golang,
          React.js, GraphQL, PostgreSQL, MySQL, MongoDB, Redis, Docker, Bash,
          etc.
        </p>
        <ul className="my-1 flex gap-4">
          {socialMediaLinks.map(item => (
            <li key={item.url}>
              <OutboundLink {...item} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
