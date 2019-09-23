import React, { useState, useEffect, useContext } from 'react'

import Header from '../components/Header'
import Layout from '../components/Layout'
import VideoViewComponent from '../components/VideoViewComponent'
import RecMedia from '../components/RecMedia'
import Footer from '../components/Footer'
import { DataContext } from '../App'

const VideoView = props => {
  const { match } = props
  const { data } = useContext(DataContext)
  const [activeView, setActiveView] = useState(null)

  const content = data.filter(item => item.id.toString() === match.params.id)

  useEffect(() => {
    setActiveView(content)
  }, [])

  return (
    <>
      <Layout history={props.history}>
        <VideoViewComponent activeView={activeView} />
        <RecMedia />
      </Layout>
    </>
  )
}

export default VideoView
