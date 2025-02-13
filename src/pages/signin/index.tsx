import React from 'react'
import { NextPageWithLayout } from '@/interfaces/layout'
import SignIn from '@/components/login/Login'
const PageLogin: NextPageWithLayout = () => {
    return <SignIn />
}

// CarList.getLayout = (page: any) => <Layout>{page}</Layout>
export default PageLogin