import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import ArrowBack from '../../icons/ArrowBack'
import Logo from '../../icons/Logo'
import Hamburger from '../../icons/Hamburger'
import { NavWrapper, MenuButton } from './style'

import Menu from './Menu'
const Nav = props => {
  const [menuOpen, setMenuOpen] = useState(false)
  console.log(props)
  // add so if ther is a back the arrow will show, else nothing
  return (
    <>
      <NavWrapper>
        <ArrowBack />
        <Link to="/">
          <Logo />
        </Link>
        <MenuButton onClick={() => setMenuOpen(true)}>
          <Hamburger />
        </MenuButton>
      </NavWrapper>
      {menuOpen && (
        <Menu close={() => setMenuOpen(false)} active={props.active}></Menu>
      )}
    </>
  )
}

export default Nav
