import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from './style/theme'
import GlobalStyle from './style/global'
import Start from './views/Start'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Start />
      </>
    </ThemeProvider>
  )
}

export default App
