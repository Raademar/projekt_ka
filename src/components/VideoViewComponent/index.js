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
  const { track, videoView, podView, activeView } = props
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
  // ;<>
  //   {activeView && (
  //     <StyledVideoView>
  //       <YouTube videoId="Nmf2V55mlgw" opts={opts} onReady={_onReady} />
  //       <h3>{activeView[0].title}</h3>
  //       <span>Längd: {activeView[0].length}</span>
  //       <span>Datum: {activeView[0].date}</span>
  //       <span>{activeView[0].type}</span>
  //       <p>{activeView[0].description}</p>
  //       <div>
  //         <Facebook />
  //         <Instagram />
  //         <Twitter />
  //         <LinkedIn />
  //       </div>
  //     </StyledVideoView>
  //   )}
  // </>

  return (
    <StyledVideoView>
      {videoView && (
        <div>
          <YouTube videoId="Nmf2V55mlgw" opts={opts} onReady={_onReady} />
          <h3>{activeView[0].title}</h3>
          <span>Längd: {activeView[0].length}</span>
          <span>Datum: {activeView[0].date}</span>
          <span>Video</span>
          <p>{activeView[0].description}</p>
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
