import Head from 'next/head'

import { DefaultLayout } from 'components/layouts'
import { ModeGameWrapper } from 'features/mode-game'
import { NextPageWithLayout } from 'types'

const ModeGame: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Mode Game</title>
      </Head>

      <div
        className="px-5 py-5"
        style={{
          backgroundImage: 'url(/assets/images/background.gif)',
          backgroundPosition: 'center center',
        }}
      >
        <ModeGameWrapper />
      </div>
      
    </>
  )
}

ModeGame.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default ModeGame
