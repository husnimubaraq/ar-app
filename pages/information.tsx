import Head from 'next/head'

import { DefaultLayout } from 'components/layouts'
import { InformationWrapper } from 'features/information'
import { NextPageWithLayout } from 'types'

const Information: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Information</title>
      </Head>

      <div
        className="px-5 py-5"
        style={{
          backgroundImage: 'url(/assets/images/background.jpg)',
          backgroundPosition: 'center center',
        }}
      >
        <InformationWrapper />
      </div>
      
    </>
  )
}

Information.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Information
