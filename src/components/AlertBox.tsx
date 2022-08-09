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
        'border-2 border-red-800 flex items-center gap-5 rounded py-3 px-6 sm:pr-16 sm:pl-8',
        className
      )}
    >
      <p className="font-bold text-7xl text-red-800 w-16 justify-center hidden sm:flex">
        !
      </p>
      {children}
    </div>
  )
}

export default InfoBox
