import type { NextPage } from "next"
import Head from "next/head"

import { t } from "../modules/trpc/web"

const Home: NextPage = () => {
  const { data, isLoading } = t.hello.useQuery()

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <Head>
        <title>XD App</title>
      </Head>
      <main className="xd-card xd-card-border-l">{data}</main>
    </div>
  )
}

export default Home
