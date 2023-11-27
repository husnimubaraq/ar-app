import Head from 'next/head'

import { DefaultLayout } from 'components/layouts'
import { ModeArCategory as PModeArCategory } from 'features/mode-ar'
import { NextPageWithLayout } from 'types'

const ModeArCategory: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Mode AR - Category</title>
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
        <PModeArCategory />
      </div>
    </>
  )
}

ModeArCategory.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default ModeArCategory
