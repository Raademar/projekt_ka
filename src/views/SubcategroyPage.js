import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import ThumbnailMedia from '../components/ThumbnailMedia'
import ResultPageTitle from '../components/ResultPageTitle'

const SubcategoryPage = props => {
  const title = props.match.params.category
  const subcategory = props.location.title
  return (
    <>
      <Header />
      <Layout>
        <ResultPageTitle title={title} subtitle={subcategory} />
        <ThumbnailMedia></ThumbnailMedia>
      </Layout>
    </>
  )
}

export default SubcategoryPage
