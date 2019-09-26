import React, { createContext, useState } from 'react'
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
import ResetScroll from './utils/ResetScroll'

export const SortContext = createContext(null)
export const DataContext = createContext(null)
export const FilterContext = createContext(null)
export const FilteredDataContext = createContext(null)
export const SearchResultContext = createContext(null)

const App = ({ history, location }) => {
  const [sort, setSort] = useState('Populärt')
  const [data, updatePageData] = useState(pageData)
  const [filteredData, updateFilteredData] = useState([])
  const [filterType, updateFilter] = useState('')
  const [searchResult, setSearchResult] = useState([])

  if (sort === 'Tidigast först') {
    data.sort((a, b) => {
      return new Date(a.date) - new Date(b.date)
    })
  } else if (sort === 'Senast först') {
    data.sort((a, b) => {
      return new Date(b.date) - new Date(a.date)
    })
  } else if (sort === 'A-Ö') {
    data.sort((a, b) => {
      return b.title - a.title
    })
  }

  return (
    <Router history={history}>
      <ResetScroll>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            <SortContext.Provider value={{ sort, setSort }}>
              <FilterContext.Provider value={{ filterType, updateFilter }}>
                <DataContext.Provider value={{ data, updatePageData }}>
                  <FilteredDataContext.Provider
                    value={{ filteredData, updateFilteredData }}
                  >
                    <SearchResultContext.Provider
                      value={{ searchResult, setSearchResult }}
                    >
                      <Switch>
                        <Route path="?q=filter" component={Start}></Route>
                        <Route exact path="/" component={Start}></Route>
                        <Route exact path="/about" component={About}></Route>
                        <Route
                          exact
                          path="/search"
                          component={SearchResult}
                        ></Route>
                        <Route
                          exact
                          path="/media/:id"
                          component={VideoView}
                        ></Route>
                        <Route
                          exact
                          path="/:category/:subcategory"
                          component={SubcategoryPage}
                        ></Route>
                        <Route
                          exact
                          path="/:category"
                          component={CategoryPage}
                        ></Route>
                      </Switch>
                    </SearchResultContext.Provider>
                  </FilteredDataContext.Provider>
                </DataContext.Provider>
              </FilterContext.Provider>
            </SortContext.Provider>
          </>
        </ThemeProvider>
      </ResetScroll>
    </Router>
  )
}

export default App
