import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import CategoryFilter from '../components/CategoryFilter'
import FeaturedClipList from '../components/FeaturedClipsList'
import ResultPageTitle from '../components/ResultPageTitle'
import { menuArray } from '../data/menuArray'

const CategoryPage = props => {
  const { location } = props
  const loactionName = location.pathname.split('/')

  const category = menuArray.filter(item => item.url === loactionName[1])

  return (
    <>
      <Layout active={location.title} history={props.history}>
        <ResultPageTitle
          title={category[0].title}
          subtitle="Nyheter"
        ></ResultPageTitle>
        <FeaturedClipList></FeaturedClipList>

        <CategoryFilter
          path={props.location.pathname}
          array={category[0].subcategory}
          title={category[0].title}
          backgroundColor="black"
        />
      </Layout>
    </>
  )
}

export default CategoryPage
