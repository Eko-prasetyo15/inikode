import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
// import { Layout } from '@/components/layout'
// import { HomeFeature, HomeHero, HomePopularCourse, HomeTestimonial, HomeOurMentors, DynamicHomeNewsLetter } from '@/components/home'

const DynamicHomeHero = dynamic(() => import('../../components/home/hero'))
const DynamicHomeFeature = dynamic(() => import('../../components/home/feature'))
const DynamicHomePopularCourse = dynamic(() => import('../../components/home/popular-courses'))
const DynamicHomeTestimonial = dynamic(() => import('../../components/home/testimonial'))
const DynamicHomeOurMentors = dynamic(() => import('../../components/home/mentors'))
const DynamicHomeNewsLetter = dynamic(() => import('../../components/home/newsletter'))
const DynamicHomeAgen = dynamic(() => import('../../components/home/agenfeat'))
const DynamicHomeMokas = dynamic(() => import('../../components/home/kursus'))

const Home: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero />
      <DynamicHomeAgen />
      <DynamicHomeFeature />
      <DynamicHomeMokas />
      {/* <DynamicHomePopularCourse /> */}
      <DynamicHomeTestimonial />
      <DynamicHomeOurMentors />
      <DynamicHomeNewsLetter />
      <DynamicHomePopularCourse />
    </>
  )
}

// Home.getLayout = (page) => <Layout>{page}</Layout>
export default Home
