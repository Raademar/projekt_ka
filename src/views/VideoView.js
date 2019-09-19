import React from 'react'

import Header from '../components/Header'
import Layout from '../components/Layout'
import VideoViewComponent from '../components/VideoViewComponent'
import RecMedia from '../components/RecMedia'
import Footer from '../components/Footer'

const clientId = '45ca7c7c9b41fdcb2501bb7dd27e168b'
const resolveUrl =
  'https://soundcloud.com/user-994747535/130-adaptionsseminarium-aniara-fran-bok-till-film-med-pella-kagerman-och-hugo-lilja'

const VideoView = () => {
  return (
    <>
      <Header></Header>
      <Layout>
        <VideoViewComponent
          podView
          clientId={clientId}
          resolveUrl={resolveUrl}
        />
        <RecMedia />
      </Layout>
      <Footer />
    </>
  )
}

export default VideoView
