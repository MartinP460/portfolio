const Skillset = () => {
  const skills = [
    {
      title: 'languages',
      items: ['HTML', 'CSS', 'javascript (ES6)', 'typescript', 'python']
    },
    { title: 'frontend technologies', items: ['react', 'next.js'] },
    { title: 'libraries', items: ['tailwindcss', 'graphql', 'redux (+ RTK)'] },
    { title: 'testing', items: ['cypress', 'jest', 'react testing library'] },
    { title: 'version control', items: ['git', 'github'] },
    { title: 'creative', items: ['figma', 'affinity designer / photo'] }
  ]

  return (
    <section className="py-36 md:py-48" id="skillset">
      <div className="flex w-full items-center">
        <h3 className="whitespace-nowrap font-heading text-lg font-bold uppercase tracking-widest dark:text-white">
          Skillset
        </h3>
        <div className="mx-8 h-0.5 w-full max-w-md rounded bg-gray-200"></div>
      </div>
      <div className="mt-12 grid w-full grid-cols-2 grid-rows-3 gap-y-8 gap-x-6 md:grid-cols-3 md:grid-rows-2 md:gap-x-20">
        {skills.map((skill) => (
          <div key={skill.title}>
            <p className="font-semibold capitalize dark:text-white">
              {skill.title}
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {skill.items.map((item) => (
                <li
                  key={item}
                  data-icon="&bull;"
                  className="before:absolute before:block before:text-sm before:text-primary-800 before:content-[attr(data-icon)] dark:before:text-gray-400"
                >
                  <p className="pl-6 capitalize dark:text-gray-300">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skillset
