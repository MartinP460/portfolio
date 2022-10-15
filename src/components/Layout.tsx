import { ReactNode } from 'react'
import clsx from 'clsx'
import Head from 'next/head'
import SideNavigation from './SideNavigation'

interface LayoutProps {
  title?: string
  description: string
  sideNavigation?: boolean
  children: ReactNode
}

const Layout = ({
  title,
  description,
  sideNavigation,
  children
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>
          {title ? `${title} | Martin Polley` : 'Martin Polley - Portfolio'}
        </title>
        <meta name="description" content={description} />
      </Head>
      <div className="mx-auto flex max-w-6xl">
        {sideNavigation && <SideNavigation />}
        <main
          className={clsx(
            'w-full px-4',
            sideNavigation ? 'sm:px-8 lg:mr-20' : 'sm:px-8'
          )}
        >
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
