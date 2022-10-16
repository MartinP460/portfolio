import { ReactNode } from 'react'
import Head from 'next/head'

interface LayoutProps {
  title: string
  description: string
  children: ReactNode
}

const Layout = ({ title, description, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{`${title} | Martin Polley`}</title>
        <meta name="description" content={description} />
      </Head>
      <main>{children}</main>
    </>
  )
}

export default Layout
