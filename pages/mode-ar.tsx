import Head from 'next/head'

import { DefaultLayout } from 'components/layouts'
import { ModeArWrapper } from 'features/mode-ar'
import { NextPageWithLayout } from 'types'

const ModeAr: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Mode AR</title>
      </Head>

      <ModeArWrapper />
    </>
  )
}

ModeAr.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default ModeAr
