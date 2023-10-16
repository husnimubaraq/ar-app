import Head from 'next/head'

import { DefaultLayout } from 'components/layouts'
import { ModeGamePlay } from 'features/mode-game'
import { NextPageWithLayout } from 'types'

const ModePlay: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Mode Game - Play</title>
      </Head>

      <ModeGamePlay />
    </>
  )
}

ModePlay.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default ModePlay
