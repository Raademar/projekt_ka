import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from './style/theme'
import GlobalStyle from './style/global'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <h1>hejsan</h1>
      </div>
    </ThemeProvider>
  )
}

export default App
