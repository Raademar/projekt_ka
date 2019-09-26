import React, { createContext, useState, useContext } from 'react'
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
import SearchResult from './views/SearchResult'
import ResetScroll from './utils/ResetScroll'

import { StoreContext } from './utils/store'

const App = ({ history }) => {
  const { sort, filteredData } = useContext(StoreContext)

  if (sort === 'Tidigast först') {
    filteredData.sort((a, b) => {
      return new Date(a.date) - new Date(b.date)
    })
  } else if (sort === 'Senast först') {
    filteredData.sort((a, b) => {
      return new Date(b.date) - new Date(a.date)
    })
  } else if (sort === 'A-Ö') {
    filteredData.sort((a, b) => {
      return b.title - a.title
    })
  }

  return (
    <Router history={history}>
      <ResetScroll>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            <Switch>
              <Route path="?q=filter" component={Start}></Route>
              <Route exact path="/" component={Start}></Route>
              <Route exact path="/about" component={About}></Route>
              <Route exact path="/search" component={SearchResult}></Route>
              <Route exact path="/media/:id" component={VideoView}></Route>
              <Route
                exact
                path="/:category/:subcategory"
                component={SubcategoryPage}
              ></Route>
              <Route exact path="/:category" component={CategoryPage}></Route>
            </Switch>
          </>
        </ThemeProvider>
      </ResetScroll>
    </Router>
  )
}

export default App
