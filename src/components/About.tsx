import Image from 'next/image'
import { GridPattern } from './icons'

const About = () => {
  const myAge = () => {
    const birthday = new Date('06/16/2003')
    const ageDifMs = Date.now() - birthday.getTime()
    const ageDate = new Date(ageDifMs)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  return (
    <section
      className="py-28 flex flex-col w-full gap-x-8 md:flex-row items-center"
      id="about"
    >
      <div className="w-full">
        <div className="w-full flex items-center">
          <h3 className="font-bold uppercase whitespace-nowrap">About me</h3>
          <div className="w-full h-0.5 bg-gray-200 mx-8 rounded"></div>
        </div>
        <div className="mt-4 text-gray-600">
          <p>
            Hi, my name is Martin and I am a {myAge()}-year-old who enjoys
            building clean and maintainable frontend projects. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Repudiandae, amet doloremque
            nemo iste reiciendis ipsa placeat assumenda repellendus, sapiente
            autem architecto dolores atque doloribus, velit cupiditate nobis
            excepturi in consequatur?
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
          <div className="hover:translate-x-3 hover:translate-y-3 transition-transform">
            <Image
              src="/images/thispersondoesnotexist.jpg"
              width={500}
              height={500}
              className="rounded"
            />
          </div>
          <GridPattern className="absolute w-full h-full top-0 mt-4 ml-6 -z-10" />
        </div>
      </div>
    </section>
  )
}

export default About
