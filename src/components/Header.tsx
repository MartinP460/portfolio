import Button from './Button'

const Header = () => {
  return (
    <section className="flex flex-col justify-center min-h-screen">
      <p className="font-semibold bg-clip-text text-transparent bg-gradient-to-br from-primary-800 to-primary-200">
        Hey - I&apos;m
      </p>
      <h1 className="font-bold text-5xl md:text-7xl mt-3">Martin Polley.</h1>
      <h2 className="font-bold text-5xl md:text-7xl text-gray-600 mt-4">
        I build cool software.
      </h2>
      <p className="text-gray-600 mt-8 max-w-2xl">
        I&apos;m a passionate front-end developer from{' '}
        <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-br from-primary-800 to-primary-500">
          Copenhagen, Denmark
        </span>
        . I love working in React and Next.js to build applications that solve
        real problems. I&apos;m looking for new gigs, so if you&apos;re
        interested in working with me, please get in touch.
      </p>
      <Button className="mt-8">Projects</Button>
    </section>
  )
}

export default Header
