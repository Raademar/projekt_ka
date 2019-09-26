import React, { useContext, useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import ThumbnailMedia from '../components/ThumbnailMedia'
import ResultPageTitle from '../components/ResultPageTitle'
import { menuArray } from '../data/menuArray'
import { StoreContext } from '../utils/store'

const SubcategoryPage = props => {
  const { data } = useContext(StoreContext)
  const [activeData, setActiveData] = useState(null)

  const category = menuArray.filter(
    item => item.url === props.match.params.category
  )

  const subcategory = category[0].subcategory.filter(
    item => item.url === props.match.params.subcategory
  )

  const content = data.filter(item => {
    if (
      item.tags.includes(category[0].title) &&
      item.subcategory.includes(subcategory[0].title)
    ) {
      return item
    }
  })

  useEffect(() => {
    setActiveData(content)
  }, [])

  return (
    <>
      <Layout history={props.history}>
        <ResultPageTitle
          title={category[0].title}
          subtitle={subcategory[0].title}
        />
        <ThumbnailMedia content={activeData}></ThumbnailMedia>
      </Layout>
    </>
  )
}

export default SubcategoryPage
