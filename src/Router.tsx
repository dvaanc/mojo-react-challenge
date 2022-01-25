import React from 'react';
import {
  HashRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom"
import GetCharacters from './Components/Characters'
import App from './App';
export default function Router() {
  return (
    <HashRouter basename="/">
    <Routes>
    <Route path="/" element={ <App /> }/>

    {/* <Route path="/characters/:id" element={ <Character /> }/> */}
    {/* <Route path="/character" element={ <GetCharacters /> }/> */}

  </Routes>
</HashRouter>
  )
}
