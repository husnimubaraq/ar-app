import Head from 'next/head'

import { DefaultLayout } from 'components/layouts'
import { ModeCardWrapper } from 'features/mode-card'
import { NextPageWithLayout } from 'types'

const ModeCard: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Unduh Kartu</title>
      </Head>

      <div
        className="px-5 py-5"
        style={{
          backgroundImage: 'url(/assets/images/background.gif)',
          backgroundPosition: 'center center',
        }}
      >
        <ModeCardWrapper />
      </div>

      
    </>
  )
}

ModeCard.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default ModeCard
