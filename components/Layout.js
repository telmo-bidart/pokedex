import Head from 'next/head'
import React, { Children } from 'react'

export default function Layout({ title, children }) {
    return (
        <div className='bg-red-800'>
            <Head>
                <title>{title}</title>
            </Head>

            <main className='container mx-auto max-w-xl pt-8 min-h-screen'>
            {children}
            </main>
        </div>
    )
}
