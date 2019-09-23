import React from 'react'
import YouTube from 'react-youtube'
import { StyledVideoView } from './style'
import Facebook from '../icons/Facebook'
import Instagram from '../icons/Instagram'
import Twitter from '../icons/Twitter'
import LinkedIn from '../icons/LinkedIn'

import { PlayButton, Timer, VolumeControl } from 'react-soundplayer/components'
import { withSoundCloudAudio } from 'react-soundplayer/addons'

const VideoViewComponent = props => {
  const { track, videoView, podView } = props
  const kulturAkademinBG = './images/categories/teaather.jpg'

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
      {videoView && (
        <div>
          <YouTube videoId="Nmf2V55mlgw" opts={opts} onReady={_onReady} />
          <h3>
            Masterclass med Pia Olby - vad är sånggestaltning? (del 1 av 4)
          </h3>
          <span>Längd: 1:40</span>
          <span>Datum: 2019-05-29</span>
          <span>Video</span>
          <p>
            Kulturakademin och Teateralliansens kurs i sånggestaltning erbjuder
            professionella skådespelare möjlighet att arbeta med och utveckla
            sin egen vokala och musikaliska potential – och att utmana sig
            själva sångmässigt. Här förklarar kursledare Pia Olby begreppet
            sånggestaltning.
          </p>
        </div>
      )}
      {podView && (
        <div className="p1 mb3 mt1 flex flex-center bg-darken-1 red rounded">
          <img src="./images/recommended_videos/soundcloud_player.png" alt="" />
          <div>
            <p className="nowrap caps flex-auto m0">
              {track ? track.title : 'Loading...'}
            </p>
          </div>
          <div className="play-volume-holder">
            <div>
              <PlayButton
                className="flex-none h4 button button-transparent button-grow rounded"
                {...props}
              />
              <VolumeControl
                className="flex flex-center mr2"
                buttonClassName="flex-none h4 button button-transparent button-grow rounded"
                {...props}
              />
            </div>
            <Timer
              className="h6 mr1"
              duration={track ? track.duration / 1000 : 0}
              {...props}
            />
          </div>
        </div>
      )}
      {/* <div className="share-btns">
        <Facebook />
        <Instagram />
        <Twitter />
        <LinkedIn />
      </div> */}
    </StyledVideoView>
  )
}

export default withSoundCloudAudio(VideoViewComponent)
