// import './App.css';
import { 
  ApolloClient, 
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  from
} from '@apollo/client';
import { onError } from "@apollo/client/link/error"
// import { ApolloProvider } from '@apollo/react-hooks'
import React from 'react';
import { Link } from "react-router-dom"
import { Button, Container } from '@mui/material';
import GetCharacters from './Components/GetCharacters';

//reference from https://www.apollographql.com/docs/react/api/link/apollo-link-error/
const errorLink = onError(({ graphQLErrors, networkError}) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
})

const link = from([
  errorLink,
  new HttpLink({ uri: "https://rickandmortyapi.com/graphql/" }),
])

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql/',
  cache: new InMemoryCache(),
  link: link,
})

function App() {
  return (
      <ApolloProvider client={client}>
        <Container maxWidth="lg"  style={{ minHeight: '100vh'}}>
          <header className="App-header">
            <p>
              test
            </p>
            <Link to="/character">
            To char page
            </Link>
            <Button variant="contained" color="primary">
              Test
            </Button>
          </header>
        </Container>
        <GetCharacters />
      </ApolloProvider>
  );
}

export default App;
