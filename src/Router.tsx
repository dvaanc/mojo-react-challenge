import React from 'react';
import {
  HashRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom"
import { 
  ApolloClient, 
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  from
} from '@apollo/client';
import { onError } from "@apollo/client/link/error"
import App from './App';
import { ThemeProvider } from "@emotion/react";
import { createTheme, ThemeOptions, PaletteMode } from '@mui/material'
import CharacterPage from './Components/CharacterPage';
import ContentNextWeek from 'material-ui/svg-icons/content/next-week';

  const theme: ThemeOptions = createTheme({
    palette: {
      mode: 'dark' as PaletteMode,
    },
  });
//reference from https://www.apollographql.com/docs/react/api/link/apollo-link-error/
  const errorLink = onError(({ graphQLErrors, networkError}) => {
    if (graphQLErrors) {
      console.log(graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    }

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

export default function Router() {

  return (
    <HashRouter basename="/">
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={ <App /> }/>
            <Route path="/characters/:id" element={ <CharacterPage /> }/>
            {/* <Route path="/character" element={ <GetCharacters /> }/> */}
          </Routes>
        </ThemeProvider>
      </ApolloProvider>
    </HashRouter>

  )
}
