import { ReactNode } from 'react'

type OutboundLinkProps = {
  url: string
  children: ReactNode
  attrs?: { [key: string]: any }
}

export type { OutboundLinkProps }
