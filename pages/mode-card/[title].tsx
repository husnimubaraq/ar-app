import Head from 'next/head'

import { DefaultLayout } from 'components/layouts'
import { ModeCardDetail as CModeCardDetail } from 'features/mode-card'
import { NextPageWithLayout } from 'types'

const ModeCardDetail: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Detail Kartu</title>
      </Head>

      <div
        className="px-5 py-5"
        style={{
          backgroundImage: 'url(/assets/images/background.jpg)',
          backgroundPosition: 'center center',
        }}
      >
        <CModeCardDetail />
      </div>
    </>
  )
}

ModeCardDetail.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default ModeCardDetail
