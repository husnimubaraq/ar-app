import Head from 'next/head'

import { DefaultLayout } from 'components/layouts'
import { GuideDetail as GuideDetailWrapper } from 'features/guide'
import { NextPageWithLayout } from 'types'

const GuideDetail: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Guide</title>
      </Head>

      <div
        className="px-5 py-5"
        style={{
          backgroundImage: 'url(/assets/images/background.jpg)',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "100vh",
        }}
      >
        <GuideDetailWrapper />
      </div>
      
    </>
  )
}

GuideDetail.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default GuideDetail
