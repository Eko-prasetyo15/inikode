// import { Layout } from '@/components/layout'
import ListCar from '@/container/PageListCar'
import React from 'react'
import { NextPageWithLayout } from '@/interfaces/layout'
const CarList: NextPageWithLayout = () => {
    return <ListCar />
}

// CarList.getLayout = (page: any) => <Layout>{page}</Layout>
export default CarList