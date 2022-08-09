import { useState, useEffect } from 'react'

const useActiveSection = () => {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')

      // if the user is at the bottom of the page, add active color to the last anchor
      if (
        // - 1 to fix that it will sometimes be less than 1 pixel off, when it's truly at the bottom
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight - 1
      ) {
        return setActive(sections[sections.length - 1].getAttribute('id'))
      }

      /*
       Find the active section by:
       1. Finding how far the element is from the top of the viewport.
       2. Finding the element that has the smallest absolute value to the top of the viewport.
      */
      let activeSection: Element = sections[0]
      for (let i = 1; i < sections.length; i++) {
        const elementFromTop = sections[i].getBoundingClientRect().top
        activeSection =
          Math.abs(elementFromTop) <
          Math.abs(activeSection.getBoundingClientRect().top)
            ? sections[i]
            : activeSection
      }

      setActive(activeSection.getAttribute('id'))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return active
}

export default useActiveSection
