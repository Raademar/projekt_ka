import React from 'react'
import { Wrapper } from './style'
import Header from '../Header'
import Footer from '../Footer'
const Layout = props => {
  const { active, history, children } = props
  return (
    <>
      <Header active={active} history={history}></Header>
      <Wrapper>{children}</Wrapper>
      <Footer></Footer>
    </>
  )
}

export default Layout
