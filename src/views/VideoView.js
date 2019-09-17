import React from 'react'

import Header from '../components/Header'
import Layout from '../components/Layout'
import VideoViewComponent from '../components/VideoViewComponent'
import Footer from '../components/Footer'

const VideoView = () => {
  return (
    <>
      <Header></Header>
      <Layout>
        <VideoViewComponent />
      </Layout>
      <Footer />
    </>
  )
}

export default VideoView
