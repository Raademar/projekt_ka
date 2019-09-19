import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Switch, Route } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import theme from './style/theme'
import GlobalStyle from './style/global'
import Start from './views/Start'
import About from './views/About'
import CategoryPage from './views/CategoryPage'
import VideoView from './views/VideoView'
import SubcategoryPage from './views/SubcategroyPage'

const App = ({ history }) => {
  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Switch>
            <Route exact path="/" component={Start}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/video" component={VideoView}></Route>
            <Route
              path="/:category/:subcategory"
              component={SubcategoryPage}
            ></Route>
            <Route path="/:category" component={CategoryPage}></Route>
          </Switch>
        </>
      </ThemeProvider>
    </Router>
  )
}

export default App
