import Head from 'next/head'
import React from 'react'

const Layout = ({title}) => {
    return (
        <div className='bg-red-800'>
            <Head>
                <title>
                  {title}
                </title>
            </Head>
            <main className='container mx-auto max-w-xl pt-8 min-h-screen'>

            </main>
        </div>
    )
}
export default Layout
