import clsx from 'clsx'

interface ResumeModalProps {
  open: boolean
  setOpen: (open: boolean) => void
}

const ResumeModal = ({ open, setOpen }: ResumeModalProps) => {
  return (
    <div
      onClick={() => setOpen(false)}
      className={clsx(
        'top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black/30',
        open ? 'fixed' : 'hidden'
      )}
    >
      <div
        className="animate-pop-in rounded bg-secondary-100 px-8 py-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h5 className="mr-6 font-heading font-bold uppercase text-gray-500">
            Select language
          </h5>
          <button
            className="flex h-7 w-7 items-center justify-center rounded bg-gray-300 font-bold text-white transition-colors hover:bg-gray-400"
            onClick={() => setOpen(false)}
          >
            X
          </button>
        </div>
        <div className="mt-6 flex flex-col gap-6 sm:flex-row">
          <a
            className="rounded bg-primary-700 py-3 px-6 text-lg font-bold text-white transition-colors hover:bg-primary-600"
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title="Danish resume"
          >
            Danish 🇩🇰
          </a>
          <a
            className="rounded bg-primary-700 py-3 px-6 text-lg font-bold text-white transition-colors hover:bg-primary-600"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title="English resume"
          >
            English 🇬🇧
          </a>
        </div>
      </div>
    </div>
  )
}

export default ResumeModal
