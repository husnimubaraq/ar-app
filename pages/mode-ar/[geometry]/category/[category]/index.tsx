import Head from 'next/head'

import { DefaultLayout } from 'components/layouts'
import { ModeArList as PModeArList } from 'features/mode-ar'
import { NextPageWithLayout } from 'types'

const ModeArList: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Mode AR - List</title>
      </Head>

      <div
        className="px-5 py-5 overflow-y-auto"
        style={{
            backgroundImage: 'url(/assets/images/background.jpg)',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "100vh",
          }}
      >
        <PModeArList />
      </div>
    </>
  )
}

ModeArList.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default ModeArList
