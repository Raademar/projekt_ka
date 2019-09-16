import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Switch, Route } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'

import theme from './style/theme'
import GlobalStyle from './style/global'
import Start from './views/Start'
import About from './views/About'

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Switch>
            <Route exact path="/" component={Start}></Route>
            <Route path="/about" component={About}></Route>
          </Switch>
        </>
      </ThemeProvider>
    </Router>
  )
}

export default App
