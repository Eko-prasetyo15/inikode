import React from 'react'
import { NextComponentType } from 'next'
import MainLayout from './main-layout'
import WhatsAppWidget from '../home/whatsaap-widget'

interface AppLayoutProps {
  Component: NextComponentType
  pageProps: any // Adjust this to match your pageProps type if necessary
}

const AppLayout: React.FC<AppLayoutProps> = ({ Component, pageProps }) => {
  return (
    <MainLayout>
      <Component {...pageProps} />
      <div>
        <WhatsAppWidget />
      </div>
    </MainLayout>
  )
}

export default AppLayout
