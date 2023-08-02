import OutboundLink from '@/components/outbound-link'
import { OutboundLinkProps } from '@/types'

const FooterLinks: {
  [key: string]: OutboundLinkProps
} = {
  nextjs: {
    url: 'https://nextjs.org',
    children: 'Next.js',
  },
  vercel: {
    url: 'https://vercel.com',
    children: 'Vercel',
  },
  github: {
    url: 'https://github.com/laluardian/laluardian.com',
    children: 'GitHub',
  },
}

export default function Footer() {
  const { nextjs, vercel, github } = FooterLinks
  return (
    <footer className="mt-auto">
      <p className="py-2 text-[13px] text-gray-700 dark:text-gray-400">
        This website is built with <OutboundLink {...nextjs} /> and hosted on{' '}
        <OutboundLink {...vercel} />. The source code is hosted on{' '}
        <OutboundLink {...github} />.
      </p>
    </footer>
  )
}
