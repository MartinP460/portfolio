import { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: ReactNode
}

const Button = ({ className, children, ...rest }: ButtonProps) => {
  const styles = clsx(
    'relative z-10 w-fit overflow-hidden rounded border-2 border-primary-800 px-10 py-3 font-semibold',
    'hover:border-transparent hover:text-white dark:hover:border-transparent',
    'from-primary-800 to-primary-500 transition after:absolute after:inset-y-0 after:left-[-120%] after:right-full after:-z-10 after:block after:w-40 after:-skew-x-12 after:bg-gradient-to-r after:py-3 after:transition-all',
    'hover:after:inset-y-0 hover:after:-left-2 hover:after:right-0',
    'dark:border-white dark:text-white',
    'dark:from-primary-500 dark:to-primary-200',
    className
  )

  return (
    <button className={styles} {...rest}>
      {children}
    </button>
  )
}

export default Button
