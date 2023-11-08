import Head from 'next/head'

import { DefaultLayout } from 'components/layouts'
import { NextPageWithLayout } from 'types'
import dynamic from 'next/dynamic'

{/* @ts-expect-error Server Component */}
const ModeGameWrapper = dynamic(() => import('features/mode-game').then((model) => model.ModeGameWrapper), {ssr: false})


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
