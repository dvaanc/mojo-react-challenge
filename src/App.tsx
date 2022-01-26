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
import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { Button, Container, Pagination, Box, TextField, Typography } from '@mui/material';
import Characters from './Components/Characters';

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

export default function App() {
  const [pageNumber, setPageNumber] = useState(1 as number)

  const handlePaginationClick = (e: React.MouseEvent): boolean | null => {
    const target = e.target as HTMLButtonElement
    const number: number = Number(target.textContent)
    if(number === pageNumber) return false;
    setPageNumber(number)
    return null
  }
  return (
    <ApolloProvider client={client}>
      <Box style={{ backgroundColor: '#0A1929'}} sx={{ width: 1, padding: 5, minHeight: '100vh' }}>
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" color='text.primary' sx={{ mb: 1,}}>
          React Mojo Challenge
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
          <TextField id="searchCharacter" label="Character Search" variant="filled" />
          <Pagination 
          onClick={handlePaginationClick} 
          count={42}
          
          color="primary" 
          shape="rounded" 
          sx={{ mb: 2, mt: 2 }}
          /> 
        </Box>

        <Characters pageNumberProp={pageNumber} />
      </Container>
      </Box>
    </ApolloProvider>
  );
}


