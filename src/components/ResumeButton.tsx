import { useContext } from 'react'
import { ModalContext } from '../utils/ModalProvider'
import Button from './Button'

interface ResumeButtonProps {
  className?: string
}

const ResumeButton = ({ className }: ResumeButtonProps) => {
  const setOpen = useContext(ModalContext)

  return (
    <Button className={className} onClick={() => setOpen(true)}>
      Resume
    </Button>
  )
}

export default ResumeButton
