import React, { FC, ReactElement, ReactNode } from 'react'
import Head from 'next/head'
import type AppProps from 'next/app'
import type { NextPage } from 'next'
import { CssBaseline } from '@mui/material'
import { EmotionCache } from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { createEmotionCache } from '@/utils'
import { MUIProvider } from '@/providers'
import 'slick-carousel/slick/slick.css'
import '@/styles/globals.css'
import '@/styles/react-slick.css'
// import { NextPageWithLayout } from '@/interfaces/layout'
import AppLayout from '@/components/layout/AppLayout'
// import 'slick-carousel/slick/slick-theme.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

// type AppPropsWithLayout = AppProps & {
//   emotionCache: EmotionCache
//   Component: NextPageWithLayout
// }
export type NextPageWithLayout<P = any, IP = P> = NextPage<P, IP> & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
  emotionCache: EmotionCache
  pageProps: any
}

const App = ({ Component, pageProps, emotionCache = clientSideEmotionCache }: AppPropsWithLayout) => {
  // const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: any) => page)

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>IniKode</title>
      </Head>
      <MUIProvider>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <AppLayout Component={Component} pageProps={pageProps} />
        {/* {getLayout(<Component {...pageProps} />)} */}
      </MUIProvider>
    </CacheProvider>
  )
}

export default App
