import Head from 'next/head'
import Link from 'next/link'
import { ProductItem } from '../features/product'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Denike Store</title>
        <meta
          name="description"
          content="Cheaper product, convinient shopping"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="bg-blue-600 h-80 flex flex-col items-center justify-center text-white">
          <h1 className="text-center text-4xl font-bold">
            Welcome to Denike store
          </h1>
          <p className="my-5">Cheaper product, convinient shopping</p>

          <div>
            <Link legacyBehavior href={'/'}>
              <a className="bg-green-600 text-white rounded-md py-2 px-4">
                Start Shopping
              </a>
            </Link>
          </div>
        </div>

        <section className="w-4/5 mx-auto mt-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-5">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </section>
      </main>
    </div>
  )
}
