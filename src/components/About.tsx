import { GridPattern } from './icons'
import Image from 'next/image'

const About = () => {
  const myAge = () => {
    const birthday = new Date('06/16/2003')
    const ageDifMs = Date.now() - birthday.getTime()
    const ageDate = new Date(ageDifMs)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  return (
    <section
      className="flex w-full flex-col items-center gap-x-8 pt-28 pb-36 md:flex-row md:pb-48"
      id="about"
    >
      <div className="w-full">
        <div className="flex w-full items-center">
          <h3 className="whitespace-nowrap font-heading text-lg font-bold uppercase tracking-widest dark:text-white">
            About me
          </h3>
          <div className="mx-8 h-0.5 w-full rounded bg-gray-200"></div>
        </div>
        <div className="mt-4 text-gray-600 dark:text-gray-300">
          <p>
            Hi, my name is Martin and I am a {myAge()}-year-old who enjoys
            building clean and maintainable web projects. I&apos;m currently in
            my first year of computer science at the University of Copenhagen,
            but my interest in web development started during gymnasium.
          </p>
          <br />
          <p>
            I began learning Python during my first year of gymnasium and after
            getting hooked on it I decided to expand upon my programming skills
            by taking it as a class. Determined to do something more with my
            understanding of programming, I decided to take up web development
            which I&apos;ve been doing ever since.
          </p>
          <br />
          <p>
            Outside of studying and creating projects I enjoy reading, playing
            video games and occasionally riding my mountainbike.
          </p>
        </div>
      </div>
      <div className="mt-8 max-w-xs pr-5">
        <div className="relative">
          <div className="group relative z-10 transition-transform hover:translate-x-3 hover:translate-y-3">
            <div className="relative">
              <Image
                src="/images/me.png"
                width={500}
                height={500}
                alt="A picture of me"
                className="rounded brightness-90 transition group-hover:brightness-100 group-hover:saturate-100"
              />
            </div>
            <div className="absolute top-0 h-[98%] w-full bg-primary-800/30 transition-colors group-hover:bg-transparent"></div>
          </div>
          <GridPattern className="absolute top-0 mt-4 ml-6 h-full w-full from-primary-800 dark:from-white" />
        </div>
      </div>
    </section>
  )
}

export default About
