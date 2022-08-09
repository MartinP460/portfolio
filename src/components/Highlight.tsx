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
      'font-semibold bg-clip-text text-transparent bg-gradient-to-br from-primary-800 to-primary-500 dark:from-primary-500 dark:to-primary-200',
      className
    )}
  >
    {text}
  </span>
)

export default Highlight
