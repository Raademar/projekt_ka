import React from 'react'

import Header from '../components/Header'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

const CategoryPage = ({ location }) => {
  //   console.log(location.title)
  return (
    <>
      <Header active={location.title}></Header>
      <Layout>
        <h3>{location.title}</h3>
      </Layout>
      <Footer />
    </>
  )
}

export default CategoryPage
