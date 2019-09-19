import React from 'react'
import YouTube from 'react-youtube'
import { StyledVideoView } from './style'
import Facebook from '../icons/Facebook'
import Instagram from '../icons/Instagram'
import Twitter from '../icons/Twitter'
import LinkedIn from '../icons/LinkedIn'

const VideoViewComponent = ({ videoId, title, length, date, type, text }) => {
  const opts = {
    height: '191',
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
    <StyledVideoView>
      <YouTube videoId="Nmf2V55mlgw" opts={opts} onReady={_onReady} />
      <h3>Masterclass med Pia Olby - vad är sånggestaltning? (del 1 av 4)</h3>
      <span>Längd: 1:40</span>
      <span>Datum: 2019-05-29</span>
      <span>Video</span>
      <p>
        Kulturakademin och Teateralliansens kurs i sånggestaltning erbjuder
        professionella skådespelare möjlighet att arbeta med och utveckla sin
        egen vokala och musikaliska potential – och att utmana sig själva
        sångmässigt. Här förklarar kursledare Pia Olby begreppet
        sånggestaltning.
      </p>
      <div>
        <Facebook />
        <Instagram />
        <Twitter />
        <LinkedIn />
      </div>
    </StyledVideoView>
  )
}

export default VideoViewComponent
