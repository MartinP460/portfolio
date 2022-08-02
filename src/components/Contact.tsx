import { useRouter } from 'next/router'
import { GithubIcon, StackoverflowIcon } from './icons'
import Button from './Button'

const Contact = () => {
  const router = useRouter()

  return (
    <section className="py-48" id="contact">
      <div className="w-full flex items-center">
        <h3 className="font-bold uppercase whitespace-nowrap">Contact</h3>
        <div className="w-full h-0.5 bg-gray-200 mx-8 rounded max-w-md"></div>
      </div>
      <div className="mt-12">
        <p className="max-w-lg text-gray-600">
          I&apos;m looking for new opportunities and people to connect with so
          you&apos;re more than welcome to contact me! I&apos;m also active on a
          few different social media platforms, and you can find links to those
          profiles below.
        </p>
        <div className="flex items-center gap-10 mt-10">
          <Button
            className="after:-left-[150%]"
            onClick={() => router.push('mailto:martin.polley460@gmail.com')}
          >
            Mail
          </Button>
          <ul className="flex gap-4">
            <li>
              <a
                href="https://github.com/MartinP460"
                target="_blank"
                rel="noopener noreferrer"
                title="Stackoverflow profile"
              >
                <GithubIcon className="w-8 h-8" />
              </a>
            </li>
            <li>
              <a
                href="https://stackoverflow.com/users/19493125/mart"
                target="_blank"
                rel="noopener noreferrer"
                title="Stackoverflow profile"
              >
                <StackoverflowIcon className="w-8 h-8" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact
