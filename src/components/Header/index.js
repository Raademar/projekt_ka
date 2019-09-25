import React from 'react'
import Nav from './Nav'
import Searchbar from './Searchbar'
import { HeaderStyle } from './style'
const Header = props => {
  const { history, active, placeholder } = props
  return (
    <HeaderStyle>
      <Nav active={active} history={history}></Nav>
      <Searchbar placeholder={placeholder}></Searchbar>
    </HeaderStyle>
  )
}

export default Header
