import { useRouter } from 'next/router'
import Button from './Button'
import Highlight from './Highlight'

const Header = () => {
  const router = useRouter()

  return (
    <section className="flex flex-col justify-center min-h-[90vh]">
      <p className="font-semibold bg-clip-text text-transparent bg-gradient-to-br from-primary-800 to-primary-200 dark:from-primary-200">
        Hey - I&apos;m
      </p>
      <h1 className="font-heading tracking-wide font-bold text-5xl md:text-7xl mt-3 dark:text-white">
        Martin Polley.
      </h1>
      <h2 className="font-heading font-bold text-5xl md:text-7xl text-gray-600 mt-4 dark:text-gray-500">
        I build cool software.
      </h2>
      <p className="text-gray-600 mt-8 max-w-2xl dark:text-gray-400">
        I&apos;m a passionate front-end developer from{' '}
        <Highlight text="Copenhagen, Denmark" />. I love working in React and
        Next.js to build applications that solve real problems. I&apos;m looking
        for new gigs, so if you&apos;re interested in working with me, please
        get in touch.
      </p>
      <Button className="mt-8" onClick={() => router.push('#projects')}>
        Projects
      </Button>
    </section>
  )
}

export default Header
