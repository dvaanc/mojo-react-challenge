// import './App.css';
import { 
  ApolloClient, 
  ApolloProvider,
  InMemoryCache
} from '@apollo/client';
// import { ApolloProvider } from '@apollo/react-hooks'
import React from 'react';
import { Link } from "react-router-dom"
import { Button, Container } from '@mui/material';


const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql/',
  cache: new InMemoryCache(),
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
      </ApolloProvider>
  );
}

export default App;
