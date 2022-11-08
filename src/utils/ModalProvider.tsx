import { useState, createContext, ReactNode } from 'react'
import ResumeModal from '../components/ResumeModal'

export const ModalContext = createContext<any>(false)

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false)

  return (
    <ModalContext.Provider value={setOpen}>
      <ResumeModal open={open} setOpen={setOpen} />
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
