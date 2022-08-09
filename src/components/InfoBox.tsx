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
        'flex items-center border-2 border-black gap-5 rounded py-3 px-6 sm:pr-16 sm:pl-8 dark:border-white',
        className
      )}
    >
      <p className="font-bold text-8xl text-gray-400 w-16 justify-center hidden sm:flex">
        ?
      </p>
      <div>
        <p className="text-gray-500 mb-1">{title}</p>
        {children}
      </div>
    </div>
  )
}

export default InfoBox
