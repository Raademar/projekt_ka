import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from './style/theme'
import GlobalStyle from './style/global'
import Start from './views/Start'
import CategoryFilter from './components/CategoryFilter'
import FeaturedClipsList from './components/FeaturedClipsList'
import About from './views/About'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {/* <Start />
        <CategoryFilter />
        <FeaturedClipsList /> */}
        <About></About>
      </>
    </ThemeProvider>
  )
}

export default App
