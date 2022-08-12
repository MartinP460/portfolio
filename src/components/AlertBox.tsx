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
        'flex items-center gap-5 rounded border-2 border-red-800 py-3 px-6 sm:pr-16 sm:pl-8',
        className
      )}
    >
      <p className="hidden w-16 justify-center text-7xl font-bold text-red-800 sm:flex">
        !
      </p>
      {children}
    </div>
  )
}

export default InfoBox
