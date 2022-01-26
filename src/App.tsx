import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { Button, Container, Pagination, Box, TextField, Typography } from '@mui/material'
import { GetCharacters } from './GraphQL/Queries'
import Characters from './Components/Characters'
import { styled } from '@mui/system'

export default function App() {
  const [characterQuery, setCharacterQuery] = useState('' as string)
  const [isSearchbarEmpty, setIsSearchbarEmpty] = useState(true as boolean)
  const [pageNumber, setPageNumber] = useState(1 as number)
  const [characters, setCharacters] = useState(null as null | Array<any>)
  const [numberOfPages, setNumberOfPages] = useState(42 as number)
  const [disablePagination, setDisablePagination] = useState(false as boolean)

  const data: any = GetCharacters(pageNumber, characterQuery)

  useEffect(() => {
    if(data) {
      console.log(data.characters.info.pages)
      setNumberOfPages(data.characters.info.pages)
      setCharacters(data.characters.results)
    }
  }, [data])

  const handleCharacterSearch = (e: React.ChangeEvent): void => {
    const target = e.target as HTMLInputElement
    setCharacterQuery(target.value)
    console.log(characterQuery)
  }
  const handlePaginationClick = (e: React.MouseEvent): void => {
    e.preventDefault()
    e.stopPropagation()
    const target = e.target as HTMLElement
    const number: number = Number(target.textContent)
    const nav = target.dataset.testid
    if(target.dataset.disabled) return
    if(nav === 'NavigateNextIcon') {
      if(pageNumber === 42) return
      togglePaginationHelper()
      const newNumber = pageNumber + 1
      setPageNumber(newNumber)
      return
    }
    if(nav === 'NavigateBeforeIcon') {
      if(pageNumber === 1) return
      togglePaginationHelper()
      setPageNumber(pageNumber - 1)
      return
    }
    if(number === pageNumber) return;
    setPageNumber(number)

    togglePaginationHelper()

    return
  }
  const togglePaginationHelper = (): void => {
    setDisablePagination(true)
    setTimeout(() => { setDisablePagination(false) }, 1250)
    return
  }

  return (
      <Box style={{ backgroundColor: '#0A1929'}} sx={{ width: 1, padding: 5, minHeight: '100vh' }}>
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" color='text.primary' sx={{ mb: 1,}}>
          React Mojo Challenge
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
          <TextField 
          onChange={ handleCharacterSearch } 
          value={ characterQuery } 
          id="searchCharacter" 
          label="Character Search" 
          variant="filled" 
          />
          <Pagination 
          onClick={ handlePaginationClick } 
          count={ numberOfPages }
          color="primary" 
          shape="rounded" 
          sx={{ mb: 2, mt: 2 }}
          disabled={ disablePagination }
          data-disabled={ disablePagination }
          /> 
        </Box>
        <Characters charactersArrayProp={characters}/>
      </Container>
      </Box>
  );
}


