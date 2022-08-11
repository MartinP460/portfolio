import { useRouter } from 'next/router'
import Button from './Button'
import Highlight from './Highlight'

const Header = () => {
  const router = useRouter()

  return (
    <section className="flex flex-col justify-center min-h-[90vh]">
      <p className=" font-bold text-gray-600 mt-4 mr-5 dark:text-gray-500">
        Hey - I&apos;m
      </p>
      <div
        className="font-semibold tracking-tight flex flex-col max-w-fit bg-primary-800 mt-3 text-white pt-1 pb-3 px-2 
        rounded font-mono whitespace-nowrap text-5xl sm:flex-row sm:text-5xl lg:text-6xl dark:font-bold"
      >
        <span className="mr-5">{'<Martin'}</span>
        <span>{'Polley />'}</span>
      </div>
      <h2 className="font-heading font-bold text-gray-600 mt-4 text-5xl sm:text-5xl lg:text-6xl dark:text-gray-500">
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
