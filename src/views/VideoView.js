import React, { useState, useEffect, useContext } from 'react'

import Header from '../components/Header'
import Layout from '../components/Layout'
import VideoViewComponent from '../components/VideoViewComponent'
import RecMedia from '../components/RecMedia'
import Footer from '../components/Footer'
import { DataContext } from '../App'

const clientId = '45ca7c7c9b41fdcb2501bb7dd27e168b'
const resolveUrl =
  'https://soundcloud.com/user-994747535/130-adaptionsseminarium-aniara-fran-bok-till-film-med-pella-kagerman-och-hugo-lilja'

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
        <VideoViewComponent
          activeView={activeView}
          podView
          clientId={clientId}
          resolveUrl={resolveUrl}
        />
        <RecMedia />
      </Layout>
    </>
  )
}

export default VideoView
