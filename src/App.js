import React, { createContext, useState, useEffect } from 'react'
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
import pageData from './data/data.json'

export const SortContext = createContext(null)
export const DataContext = createContext(null)

const App = ({ history, location }) => {
  const [sort, setSort] = useState('Populärt')
  const [data] = useState(pageData)

  console.log(pageData)

  return (
    <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <SortContext.Provider value={{ sort, setSort }}>
            <DataContext.Provider value={{ data }}>
              <Switch>
                <Route path="?q=filter" component={Start}></Route>
                <Route exact path="/" component={Start}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/search" component={SearchResult}></Route>
                <Route exact path="/video" component={VideoView}></Route>
                <Route
                  exact
                  path="/:category/:subcategory"
                  component={SubcategoryPage}
                ></Route>
                <Route exact path="/:category" component={CategoryPage}></Route>
              </Switch>
            </DataContext.Provider>
          </SortContext.Provider>
        </>
      </ThemeProvider>
    </Router>
  )
}

export default App
