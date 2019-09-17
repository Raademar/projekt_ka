import React, { useEffect, useState } from 'react'

import Header from '../components/Header'
import Layout from '../components/Layout'
import CategoryFilter from '../components/CategoryFilter'

const CategoryPage = ({ location }) => {
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

        {locationExists && <CategoryFilter array={location.subcategory} />}
      </Layout>
    </>
  )
}

export default CategoryPage
