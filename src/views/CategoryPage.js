import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'
import CategoryFilter from '../components/CategoryFilter'
import FeaturedClipList from '../components/FeaturedClipsList'

const CategoryPage = props => {
  const { location } = props

  const [locationExists, setLocationExists] = useState(false)

  useEffect(() => {
    if (typeof location.subcategory !== 'undefined') {
      setLocationExists(true)
    }
  })

  return (
    <>
      <Header active={location.title}></Header>
      <Layout>
        <h3>{location.title}</h3>
        <h4>Nyheter</h4>
        <FeaturedClipList></FeaturedClipList>

        {locationExists && (
          <CategoryFilter
            path={props.location.pathname}
            array={location.subcategory}
            backgroundColor="black"
          />
        )}
      </Layout>
    </>
  )
}

export default CategoryPage
