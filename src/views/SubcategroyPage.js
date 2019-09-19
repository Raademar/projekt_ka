import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import ThumbnailMedia from '../components/ThumbnailMedia'

const SubcategoryPage = props => {
  const title = props.location.title

  const subcategory = props.location.subcategory
  return (
    <>
      <Header />
      <h3>{title}</h3>
      <h3>{subcategory}</h3>
      <ThumbnailMedia></ThumbnailMedia>
    </>
  )
}

export default SubcategoryPage
