import React, { useEffect, useState } from 'react'
import { useQuery, gql } from  '@apollo/client'
import { GET_CHARACTERS } from '../GraphQL/Queries'
import { Grid } from '@mui/material'
import { v4 as uuidv4 } from 'uuid'
import { experimentalStyled as styled } from '@mui/material/styles';
import CharacterCard from './CharacterCard'


interface CharactersProps { pageNumberProp: number }


export default function Characters({ pageNumberProp }: CharactersProps) {
  const [characters, setCharacters] = useState(null as null | Array<any>)
  const { error, loading, data } = useQuery(GET_CHARACTERS, {
    variables: { pageNumber: pageNumberProp }
  })
  console.log(loading)
  if(error) console.log(error)


  useEffect(() => {
    if(data) setCharacters(data.characters.results)
  }, [data])

  // this useEffect hook below is another way of just fetching all the characters with the character endpoint. 
  // this exists for the purpose of playing around with the rick and morty api

  // useEffect(() => {
  //   const fetchAllCharacters = async() => {
  //     const res = await fetch('https://rickandmortyapi.com/api/character')
  //     const data = await res.json()
  //     console.log(data)
      
  //   }
  //   fetchAllCharacters()
  // }, [])

  useEffect(() => {
    console.log(characters)
  }, [characters])

  return (
    <div>
      <Grid 
        container 
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={{ xs: 2, md: 4 }}
        >
        {
        characters !== null ? 
          characters.map((character: any) => {
            return(
              <Grid item xs={8} sm={2} md={2} lg={2} key={uuidv4()}>
                <CharacterCard characterNameProp={character.name} characterImageProp={character.image}/>
              </Grid>
            )
          }) 
          :
          <div>Loading....</div>
      }
          
        </Grid>


    </div>
  )

}
