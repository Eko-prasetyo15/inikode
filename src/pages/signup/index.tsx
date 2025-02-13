// import { Layout } from '@/components/layout'
import ListCar from '@/container/PageListCar'
import SignUp from '@/components/signup'
import React from 'react'
import { NextPageWithLayout } from '@/interfaces/layout'
const PageSignUp: NextPageWithLayout = () => {
    return <SignUp />
}

// CarList.getLayout = (page: any) => <Layout>{page}</Layout>
export default PageSignUp