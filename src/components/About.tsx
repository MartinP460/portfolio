import { GridPattern } from './icons'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import Image from 'next/image'

const About = () => {
  const myAge = () => {
    const birthday = new Date('06/16/2003')
    const ageDifMs = Date.now() - birthday.getTime()
    const ageDate = new Date(ageDifMs)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
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
          <div className="mt-4 text-gray-600 dark:text-gray-400">
            <p>
              Hi, my name is Martin and I am a {myAge()}-year-old who enjoys
              building clean and maintainable frontend projects. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Repudiandae, amet
              doloremque nemo iste reiciendis ipsa placeat assumenda
              repellendus, sapiente autem architecto dolores atque doloribus,
              velit cupiditate nobis excepturi in consequatur?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              praesentium consequuntur magni pariatur ipsa optio itaque minima.
            </p>
            <br />
            <p>
              Outside of development I enjoy reading, playing video games and
              occasionally riding my mountainbike.
            </p>
          </div>
        </div>
        <div className="mt-8 max-w-xs pr-5">
          <div className="relative">
            <div className="relative z-10 transition-transform hover:translate-x-3 hover:translate-y-3">
              <Image
                src="/images/thispersondoesnotexist.jpg"
                width={500}
                height={500}
                alt="A picture of me"
                className="rounded"
              />
            </div>
            <GridPattern className="absolute top-0 mt-4 ml-6 h-full w-full from-primary-800 dark:from-white" />
          </div>
        </div>
      </section>
    </AnimationOnScroll>
  )
}

export default About
