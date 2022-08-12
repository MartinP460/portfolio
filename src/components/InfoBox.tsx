import { ReactNode } from 'react'
import clsx from 'clsx'

interface InfoBoxProps {
  title: string
  children: ReactNode
  className?: string
}

const InfoBox = ({ title, children, className }: InfoBoxProps) => {
  return (
    <div
      className={clsx(
        'flex items-center gap-5 rounded border-2 border-black py-3 px-6 dark:border-white sm:pr-16 sm:pl-8',
        className
      )}
    >
      <p className="hidden w-16 justify-center text-8xl font-bold text-gray-400 sm:flex">
        ?
      </p>
      <div>
        <p className="mb-1 text-gray-500">{title}</p>
        {children}
      </div>
    </div>
  )
}

export default InfoBox
