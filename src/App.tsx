import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery } from '@apollo/client'
import { PEOPLE_QUERY } from './components/Queries'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import People from './components/People'
import Details from './components/Details'
import Header from './components/Header'
import Page from './components/Page'
import Search from './components/Search'

const client = new ApolloClient({
  uri: 'https://fsgm7.sse.codesandbox.io/',
  cache: new InMemoryCache()
})

export const App: React.FC = () => {
  const usePeople = () => {
    const { loading, error, data } = useQuery(PEOPLE_QUERY)
    return { loading, error, data }
  }

  return (
    <div className="text-gray-100 work-sans leading-normal text-base tracking-normal bg-cover">
      <ApolloProvider client={client}>
        <Router>
          <div>
            <section>
              <Header />
            </section>
            <Route exact path="/" render={() => <People data={usePeople} currentPage={1} />} />
            <Route exact path="/person/:name/:index" component={Details} />
            <Route exact path="/page/:number" component={Page} />
            <Route exact path="/search/:name" component={Search} />
          </div>
        </Router>
      </ApolloProvider>
    </div>
  )
}

export default App
