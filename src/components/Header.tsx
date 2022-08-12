import { useRouter } from 'next/router'
import Button from './Button'
import Highlight from './Highlight'

const Header = () => {
  const router = useRouter()

  return (
    <section className="flex min-h-[90vh] flex-col justify-center">
      <p className=" mt-4 mr-5 font-bold text-gray-600 dark:text-gray-500">
        Hey - I&apos;m
      </p>
      <div
        className="mt-3 flex max-w-fit flex-col whitespace-nowrap rounded bg-primary-800 px-2 pt-1 pb-3 font-mono
        text-5xl font-semibold tracking-tight text-white dark:font-bold sm:flex-row sm:text-5xl lg:text-6xl"
      >
        <span className="mr-5">{'<Martin'}</span>
        <span>{'Polley />'}</span>
      </div>
      <h2 className="mt-4 font-heading text-5xl font-bold text-gray-600 dark:text-gray-500 sm:text-5xl lg:text-6xl">
        I build cool software.
      </h2>
      <p className="mt-8 max-w-2xl text-gray-600 dark:text-gray-400">
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
