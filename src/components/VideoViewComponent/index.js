import React from 'react'
import YouTube from 'react-youtube'
import { StyledVideoView } from './style'
import Facebook from '../icons/Facebook'
import Instagram from '../icons/Instagram'
import Twitter from '../icons/Twitter'
import LinkedIn from '../icons/LinkedIn'

const VideoViewComponent = props => {
  const { videoId, date, type, text, activeView } = props
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  }

  const _onReady = event => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
  }

  return (
    <>
      {activeView && (
        <StyledVideoView>
          <YouTube videoId="Nmf2V55mlgw" opts={opts} onReady={_onReady} />
          <h3>{activeView[0].title}</h3>
          <span>Längd: {activeView[0].length}</span>
          <span>Datum: {activeView[0].date}</span>
          <span>{activeView[0].type}</span>
          <p>{activeView[0].description}</p>
          <div>
            <Facebook />
            <Instagram />
            <Twitter />
            <LinkedIn />
          </div>
        </StyledVideoView>
      )}
    </>
  )
}

export default VideoViewComponent
