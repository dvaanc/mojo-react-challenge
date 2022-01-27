import React, { useEffect, useState } from 'react'
import { 
  Button, 
  Container, 
  Grid, 
  Pagination, 
  Box, 
  TextField, 
  Typography, 
  Select, 
  SelectChangeEvent, 
  MenuItem, 
  FormControl, 
  InputLabel 
} from '@mui/material'
import { GetCharacters } from './GraphQL/Queries'
import CharacterCard from './Components/CharacterCard'
import { v4 as uuidv4 } from 'uuid'



export default function App() {
  const [characters, setCharacters] = useState(null as null | Array<any>)
  const [numberOfPages, setNumberOfPages] = useState(42 as number)
  const [query, setQuery] = useState({
    pageNumber: 1 as number,
    character: '' as string,
    gender: '' as string,
    species: '' as string,
    status: '' as string,
    type: '' as string
  })

  const [disablePagination, setDisablePagination] = useState(false as boolean)
  const [isSearchbarEmpty, setIsSearchbarEmpty] = useState(true as boolean)
  const data: any = GetCharacters(query.pageNumber, query.character, query.gender, query.species, query.status, query.type)
  useEffect(() => {
    if(data) {
      setNumberOfPages(data.characters.info.pages)
      setCharacters(data.characters.results)
    }
  }, [data])
  const resetFields = (e: React.MouseEvent): void => {
    setQuery({
      pageNumber: 1,   
      character: '',
      gender: '',
      species: '',
      status: '',
      type: '',
  })
  }
  const handleCharacterSearch = (e: React.ChangeEvent): void => setQuery({...query, character: (e.target as HTMLInputElement).value})
  const handleGender = (e: SelectChangeEvent): void => setQuery({...query, gender: (e.target as HTMLInputElement).value})
  const handleStatus = (e: SelectChangeEvent): void => setQuery({...query, status: (e.target as HTMLInputElement).value})
  const handleSpecies = (e: React.ChangeEvent): void => setQuery({...query, species: (e.target as HTMLInputElement).value})
  const handleType = (e: React.ChangeEvent): void => setQuery({...query, type: (e.target as HTMLInputElement).value})

  const handlePaginationClick = (e: React.MouseEvent): void => {
    e.preventDefault()
    e.stopPropagation()
    const target = e.target as HTMLElement
    const number: number = Number(target.textContent)
    const nav = target.dataset.testid
    if(target.dataset.disabled) return
    if(nav === 'NavigateNextIcon') {
      if(query.pageNumber === 42) return
      togglePaginationHelper()
      const newNumber = query.pageNumber + 1
      setQuery({...query, pageNumber: newNumber})
      return
    }
    if(nav === 'NavigateBeforeIcon') {
      if(query.pageNumber === 1) return
      togglePaginationHelper()
      setQuery({...query, pageNumber: query.pageNumber - 1})
      return
    }
    if(number === query.pageNumber) return;
    setQuery({...query, pageNumber: number})
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
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TextField 
        onChange={ handleCharacterSearch } 
        value={ query.character } 
        id="searchCharacter"  
        label="Character"  
        variant="filled" 
        />
        <Box sx={{ m: 2, display: 'flex', gap: 2}}>
        <TextField 
        onChange={ handleSpecies } 
        value={ query.species } 
        id="searchSpecies"  
        label="Species"  
        variant="standard" 
        sx={{ maxWidth: 115 }}
        />
        <TextField 
        onChange={ handleType } 
        value={ query.type } 
        id="searchType"  
        label="Subspecies"  
        variant="standard" 
        sx={{ maxWidth: 115 }}
        />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <FormControl sx={{ m: 1, minWidth: 1/2 }}>
            <InputLabel id='Gender'>Gender</InputLabel>
            <Select sx={{ minWidth: 102 }}onChange={ handleGender } label='Gender' id='Gender' variant='outlined' value={ query.gender }>
              <MenuItem value=''>None</MenuItem>
              <MenuItem value='male'>Male</MenuItem>
              <MenuItem value='female'>Female</MenuItem>
              <MenuItem value='genderless'>Genderless</MenuItem>
              <MenuItem value='unknown'>Unknown</MenuItem>
              </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 1/2 }}>
            <InputLabel id='Status'>Status</InputLabel>
            <Select sx={{ minWidth: 102 }}onChange={ handleStatus } label='Status' id='Status' variant='outlined' value={ query.status }>
              <MenuItem value=''>None</MenuItem>
              <MenuItem value='alive'>Alive</MenuItem>
              <MenuItem value='dead'>Dead</MenuItem>
              <MenuItem value='unknown'>Unknown</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <FormControl sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
          <Button onClick={resetFields} variant='outlined' color='error'>Reset fields</Button>
          <Button variant='contained' color='success'>Search</Button>
        </FormControl>

        <Pagination onClick={ handlePaginationClick } count={ numberOfPages } color="primary" shape="rounded"  sx={{ mb: 2, mt: 2 }} disabled={ disablePagination } data-disabled={ disablePagination } /> 
        </Box>
        <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={{ xs: 2, md: 4 }}>
        {
        characters !== null ? 
          characters.map((character: any) => {
            return(
              <Grid item xs={6} sm={4} md={3} lg={2} key={uuidv4()}>
                <CharacterCard characterNameProp={character.name} characterImageProp={character.image} characterID={character.id}/>
              </Grid>
            )
          }) 
          :
          <div>Loading....</div>
      }
        </Grid>
      </Container>
    </Box>
  );
}


