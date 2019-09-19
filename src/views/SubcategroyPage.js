import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import ThumbnailMedia from '../components/ThumbnailMedia'

const SubcategoryPage = props => {
  const title = props.match.params.category
  const subcategory = props.location.title
  // console.log(props.match.params.subcategory)
  return (
    <>
      <Header />
      <Layout>
        <h3>{title}</h3>
        <h3>{subcategory}</h3>
        <ThumbnailMedia></ThumbnailMedia>
      </Layout>
    </>
  )
}

export default SubcategoryPage
