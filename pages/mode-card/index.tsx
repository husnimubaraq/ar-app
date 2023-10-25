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

      <ModeCardWrapper />
    </>
  )
}

ModeCard.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default ModeCard
