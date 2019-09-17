import React from 'react'
import { StyledFooter } from './style'

import Facebook from '../icons/Facebook'
import Instagram from '../icons/Instagram'
import Itunes from '../icons/Itunes'
import KPlayLogo from '../icons/KPlayLogo'
import LinkedIn from '../icons/LinkedIn'
import Soundcloud from '../icons/Soundcloud'
import Spotify from '../icons/Spotify'
import Twitter from '../icons/Twitter'
import Youtube from '../icons/Youtube'

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <KPlayLogo />
      </div>
      <div>
        <Facebook />
        <Instagram />
        <Itunes />
        <LinkedIn />
        <Soundcloud />
        <Spotify />
        <Twitter />
        <Youtube />
      </div>
    </StyledFooter>
  )
}

export default Footer
