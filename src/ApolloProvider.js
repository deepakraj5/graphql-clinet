import React from 'react'
import App from './App'
import { createHttpLink, ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const httpLink = createHttpLink({
    uri: 'http://localhost:3001'
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

export default (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
)