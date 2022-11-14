import { useRouter } from 'next/router'
import Button from './Button'
import Highlight from './Highlight'

const Header = () => {
  const router = useRouter()

  return (
    <section className="mt-20 flex min-h-[625px] flex-col justify-center md:min-h-[750px]">
      <p className=" mt-4 mr-5 font-bold text-gray-600 dark:text-gray-400">
        Hey - I&apos;m
      </p>
      <div
        className="mt-3 flex max-w-fit flex-col whitespace-nowrap rounded bg-primary-800 px-2 pt-1 pb-3 font-mono text-5xl
        font-semibold tracking-tight text-white shadow-lg dark:font-bold sm:flex-row sm:text-5xl lg:text-6xl"
      >
        <span className="mr-5">{'<Martin'}</span>
        <span>{'Polley />'}</span>
      </div>
      <h2 className="mt-4 font-heading text-5xl font-bold text-gray-600 dark:text-gray-300 sm:text-5xl lg:text-6xl">
        I build web projects.
      </h2>
      <p className="mt-8 max-w-2xl text-gray-600 dark:text-gray-300">
        I&apos;m a passionate web developer from{' '}
        <Highlight text="Copenhagen, Denmark" /> focusing on frontend
        development. I enjoy working in React and Next.js to build applications
        that solve real problems. I&apos;m currently looking for new
        opportunities and I&apos;m always down for a chat, so feel free to
        contact me.
      </p>
      <Button className="mt-8" onClick={() => router.push('#projects')}>
        Projects
      </Button>
    </section>
  )
}

export default Header
