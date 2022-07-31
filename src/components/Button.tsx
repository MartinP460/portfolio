import { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: ReactNode
}

const Button = ({ className, children, ...rest }: ButtonProps) => {
  const styles = clsx(
    'relative rounded w-fit px-10 py-3 font-semibold overflow-hidden z-10 border-2 border-primary-800',
    'hover:text-white hover:border-transparent',
    'after:absolute after:-z-10 after:w-40 after:py-3 after:block after:transition-all after:top-0 after:bottom-0 after:-left-[120%] after:right-full transition after:-skew-x-12 after:bg-gradient-to-r from-primary-800 to-primary-500',
    'hover:after:-left-2 hover:after:right-0 hover:after:top-0 hover:after:bottom-0',
    className
  )

  return (
    <button className={styles} {...rest}>
      {children}
    </button>
  )
}

export default Button
