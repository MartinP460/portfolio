import { AnchorHTMLAttributes, ReactNode } from 'react'
import NextLink from 'next/link'
import clsx from 'clsx'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: ReactNode
  className?: string
}

const Link = ({ href, children, className, ...props }: LinkProps) => {
  const styles = clsx(
    'font-semibold uppercase bg-clip-text text-transparent bg-gradient-to-br from-primary-800 to-primary-500',
    'hover:bg-clip-text hover:bg-gradient-to-br hover:from-primary-800 hover:to-primary-200',
    'after:content-["->"] after:ml-1.5 after:transition-all',
    'hover:after:ml-3',
    className
  )

  return (
    <NextLink href={href} {...props}>
      <a className={styles}>{children}</a>
    </NextLink>
  )
}

export default Link
