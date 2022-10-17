import { ReactNode } from 'react'
import clsx from 'clsx'

interface InfoBoxProps {
  children: ReactNode
  className?: string
}

const InfoBox = ({ children, className }: InfoBoxProps) => {
  return (
    <div
      className={clsx(
        'mx-auto flex max-w-3xl items-center gap-5 rounded bg-accent-500 py-3 px-6 sm:pr-16 sm:pl-8 xl:max-w-2xl',
        className
      )}
    >
      <p className="hidden w-16 justify-center text-8xl font-bold text-white sm:flex">
        ?
      </p>
      <div>{children}</div>
    </div>
  )
}

export default InfoBox
