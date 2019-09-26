import React, { useState } from 'react'
import { NavLink, Router } from 'react-router-dom'

import ArrowBack from '../../icons/ArrowBack'
import Logo from '../../icons/Logo'
import Hamburger from '../../icons/Hamburger'
import { NavWrapper, MenuButton } from './style'

import Menu from './Menu'
const Nav = props => {
  const [menuOpen, setMenuOpen] = useState(false)

  const { searchResults } = props

  // add so if ther is a back the arrow will show, else nothing
  return (
    <>
      <NavWrapper>
        <button onClick={() => props.history.goBack()}>
          <ArrowBack />
        </button>
        <NavLink to="/">
          <Logo />
        </NavLink>
        <MenuButton onClick={() => setMenuOpen(true)}>
          <Hamburger />
        </MenuButton>
      </NavWrapper>
      <Menu
        close={() => setMenuOpen(false)}
        active={props.active}
        menuOpen={menuOpen}
        searchResults={searchResults}
      ></Menu>
    </>
  )
}

export default Nav
