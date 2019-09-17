import React from 'react'
import Nav from './Nav'
import Searchbar from './Searchbar'
import { HeaderStyle } from './style'
const Header = ({ active }) => {
  return (
    <HeaderStyle>
      <Nav active={active}></Nav>
      <Searchbar></Searchbar>
    </HeaderStyle>
  )
}

export default Header
