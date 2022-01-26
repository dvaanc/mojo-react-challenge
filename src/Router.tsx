import React from 'react';
import {
  HashRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom"
import GetCharacters from './Components/Characters'
import App from './App';
import { ThemeProvider } from "@emotion/react";
import { createTheme, ThemeOptions, PaletteMode } from '@mui/material'

  const theme: ThemeOptions = createTheme({
    palette: {
      mode: 'dark' as PaletteMode,
      // primary: {
      //   main: '#19286d',
      //   light: '#7BACD4'
      // },
      // secondary: {
      //   main: '#12cec0',
      // },
      // background: {
      //   paper: '#1E1E1E',
      // },
      // text: {
      //   primary: "#fff",
      // }
    },
  });
export default function Router() {

  return (
    <HashRouter basename="/">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={ <App /> }/>
          {/* <Route path="/characters/:id" element={ <Character /> }/> */}
          {/* <Route path="/character" element={ <GetCharacters /> }/> */}
        </Routes>
      </ThemeProvider>
    </HashRouter>

  )
}
