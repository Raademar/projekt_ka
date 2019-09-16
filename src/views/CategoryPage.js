import React from 'react'

import Header from '../components/Header'
import Layout from '../components/Layout'

const CategoryPage = ({ location }) => {
  console.log(location.title)
  return (
    <>
      <Header></Header>
      <Layout>
        <h3>{location.title}</h3>
      </Layout>
    </>
  )
}

export default CategoryPage
