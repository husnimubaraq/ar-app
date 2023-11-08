import Head from 'next/head'

import { DefaultLayout } from 'components/layouts'
import { GuideWrapper } from 'features/guide'
import { NextPageWithLayout } from 'types'

const Guide: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Guide</title>
      </Head>

      <div
        className="px-5 py-5"
        style={{
          backgroundImage: 'url(/assets/images/background.gif)',
          backgroundPosition: 'center center',
        }}
      >
        <GuideWrapper />
      </div>
      
    </>
  )
}

Guide.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Guide
