import Head from 'next/head'

import { DefaultLayout } from 'components/layouts'
import { AboutWrapper } from 'features/about'
import { NextPageWithLayout } from 'types'

const About: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <div
        className="px-5 py-5"
        style={{
          backgroundImage: 'url(/assets/images/background.gif)',
          backgroundPosition: 'center center',
        }}
      >
        <AboutWrapper />
      </div>
      
    </>
  )
}

About.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default About
