import React, { useEffect, useState, useContext } from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import CategoryFilter from '../components/CategoryFilter'
import FeaturedClipList from '../components/FeaturedClipsList'
import ResultPageTitle from '../components/ResultPageTitle'
import { menuArray } from '../data/menuArray'
import { DataContext } from '../App'

const CategoryPage = props => {
  const { location } = props
  const { data } = useContext(DataContext)
  const loactionName = location.pathname.split('/')

  const category = menuArray.filter(item => item.url === loactionName[1])
  console.log(category[0].title)
  const news = data.filter(item => {
    console.log(item.tags)
    if (item.tags.includes(category[0].title)) {
      return item
    }
    return item
  })

  return (
    <>
      <Layout active={location.title} history={props.history}>
        <ResultPageTitle
          title={category[0].title}
          subtitle="Nyheter"
        ></ResultPageTitle>
        {news && <FeaturedClipList news={news} />}

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
