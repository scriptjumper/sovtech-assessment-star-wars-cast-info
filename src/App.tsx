import React from 'react'
import backGround from './bg-stars.jpeg'
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery } from '@apollo/client'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'

const client = new ApolloClient({
  uri: 'https://fsgm7.sse.codesandbox.io/',
  cache: new InMemoryCache()
})

export const App: React.FC = () => {
  return (
    <div className="text-gray-100 work-sans leading-normal text-base tracking-normal bg-cover " style={{ background: `url(${backGround}) repeat-y` }}>
      <ApolloProvider client={client}>
        <Router>
          <div>
            <section>
              <Header />
            </section>
          </div>
        </Router>
      </ApolloProvider>
    </div>
  )
}

export default App
