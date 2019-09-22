import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import ThumbnailMedia from '../components/ThumbnailMedia'
import ResultPageTitle from '../components/ResultPageTitle'
import { menuArray } from '../data/menuArray'

const SubcategoryPage = props => {
  const category = menuArray.filter(
    item => item.url === props.match.params.category
  )

  const subcategory = category[0].subcategory.filter(
    item => item.url === props.match.params.subcategory
  )

  return (
    <>
      <Layout history={props.history}>
        <ResultPageTitle
          title={category[0].title}
          subtitle={subcategory[0].title}
        />
        <ThumbnailMedia></ThumbnailMedia>
      </Layout>
    </>
  )
}

export default SubcategoryPage
