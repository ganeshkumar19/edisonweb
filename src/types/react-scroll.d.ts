declare module 'react-scroll' {
  import * as React from 'react'

  export interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    to: string
    spy?: boolean
    smooth?: boolean | string
    duration?: number
    offset?: number
    activeClass?: string
    onClick?: React.MouseEventHandler<Element>
    containerId?: string
    isDynamic?: boolean
    hashSpy?: boolean
    ignoreCancelEvents?: boolean
    delay?: number
    spyThrottle?: number
  }

  export const Link: React.FC<LinkProps>
  export { Link as ScrollLink }
} 