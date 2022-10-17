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
    'bg-gradient-to-br from-accent-800 to-accent-500 bg-clip-text font-semibold uppercase text-transparent transition-colors dark:from-accent-500 dark:to-accent-200',
    'hover:bg-gradient-to-br hover:from-accent-800 hover:to-accent-200 hover:bg-clip-text dark:hover:from-accent-200 dark:hover:to-accent-200',
    'after:ml-1.5 after:transition-all after:content-["->"]',
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
