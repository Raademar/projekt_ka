import React from 'react'
import { Wrapper } from './style'
import Header from '../Header'
import Footer from '../Footer'
const Layout = props => {
  const { active, history, children, noMargin } = props
  return (
    <>
      <Header active={active} history={history}></Header>
      <Wrapper noMargin={noMargin}>{children}</Wrapper>
      <Footer></Footer>
    </>
  )
}

export default Layout
