import { OutboundLinkProps } from '@/types'

export default function OutboundLink({
  url,
  children,
  attrs,
}: OutboundLinkProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" {...attrs}>
      {children}
    </a>
  )
}
