const Skillset = () => {
  const skills = [
    { title: 'languages', items: ['HTML', 'CSS', 'javascript (ES6)'] },
    { title: 'frontend technologies', items: ['react', 'next.js'] },
    { title: 'libraries', items: ['tailwindcss', 'graphql', 'redux (+ RTK)'] },
    { title: 'testing', items: ['cypress', 'jest', 'react testing library'] },
    { title: 'version control', items: ['git', 'github'] },
    { title: 'creative', items: ['figma', 'affinity desiger / photo'] }
  ]

  return (
    <section className="py-36 md:py-48" id="skillset">
      <div className="w-full flex items-center">
        <h3 className="font-bold uppercase whitespace-nowrap">Skillset</h3>
        <div className="w-full h-0.5 bg-gray-200 mx-8 rounded max-w-md"></div>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 gap-y-8 gap-x-6 mt-12 w-full md:grid-cols-3 md:grid-rows-2 md:gap-x-20">
        {skills.map((skill) => (
          <div key={skill.title}>
            <p className="font-bold capitalize">{skill.title}</p>
            <ul className="mt-4 flex flex-col gap-2">
              {skill.items.map((item) => (
                <li
                  key={item}
                  data-icon="&#9660;"
                  className="before:content-[attr(data-icon)] before:block before:-rotate-90 before:absolute before:text-sm before:text-primary-800"
                >
                  <p className="pl-6 capitalize">{item}</p>
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
