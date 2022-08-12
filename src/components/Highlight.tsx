import clsx from 'clsx'

const Highlight = ({
  text,
  className
}: {
  text: string
  className?: string
}) => (
  <span
    className={clsx(
      'bg-gradient-to-br from-primary-800 to-primary-500 bg-clip-text font-semibold text-transparent dark:from-primary-500 dark:to-primary-200',
      className
    )}
  >
    {text}
  </span>
)

export default Highlight
