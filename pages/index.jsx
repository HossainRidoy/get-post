import Head from 'next/head'
import UseData from '../hook/useData'


export default function Home() {

  const { data:categories } = UseData("/categories")
  const { data:color } = UseData("/colors")

  return (
    <>
      <Head>
        <title>Api to get post</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {categories && categories.length > 0 && categories.map((item, index) => 
        <h1 key={index}>Category: {item.name}</h1>
        )}

        {color && color.length > 0 && color.map((item, index) => 
        <h1 key={index}>Category: {item.name}</h1>
        )} 
      </main>
    </>
  )
}
