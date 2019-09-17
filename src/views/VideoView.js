import React from 'react'

import Header from '../components/Header'
import Layout from '../components/Layout'
import VideoViewComponent from '../components/VideoViewComponent'
import RecMedia from '../components/RecMedia'
import Footer from '../components/Footer'

const VideoView = () => {
  return (
    <>
      <Header></Header>
      <Layout>
        <VideoViewComponent />
        <RecMedia />
      </Layout>
      <Footer />
    </>
  )
}

export default VideoView
