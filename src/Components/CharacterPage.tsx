import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Container, Box, TextField, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { GetCharacter } from '../GraphQL/Queries';

const CustomBio = styled('div')`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: auto;
  overflow-y: hidden;
  background-color: #3C3E44;
  color: #fff;
  border-radius: 6px;
`
const ImageContainer = styled('div')`
  min-width: 150px;
  min-height: 150px;
  max-height: 300px;
  max-width: 300px;
  & img {
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
    object-position: center;
  }
`
// rgb(158, 158, 158)
// rgb(214, 61, 46) none repeat scroll 0% 0%
// rgb(85, 204, 68) none repeat scroll 0% 0%;
  // background: rgb(214, 61, 46) none repeat scroll 0% 0%;
const AliveStatus = styled('div')<{ status: string }>`
  height: 8px;
  width: 8px;
  margin-left: 6px;
  margin-right: 6px;
  margin-bottom: 4px;
  background: ${ props => props.status === 'Alive' ? 
    'rgb(85, 204, 68) none repeat scroll 0% 0%' : 'rgb(214, 61, 46) none repeat scroll 0% 0%'};
  border-radius: 50%;
`
export default function CharacterPage() {
  const [characterData, setCharacterData] = useState(null as any)
  // had to create a seperate state of episodes due to data only giving end points for each episodes, 
  // will need to loop over the entire episoddes array from characterData to fetch the episode field from each endpoint
  const [episodes, setEpisodes] = useState(null as any)
  const { id } = useParams();
  
  // grab all of character data
  useEffect(() => {
    const fetchCharacter = async() => {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
      const data = await res.json()
      setCharacterData(data)
    }
    fetchCharacter()
  }, [])
  useEffect(() => {
    const fetchEpisodes = async() => {
      const rawEpisodeLinks: Array<any> = [...characterData.episode]
      const episodeData: Array<any> = []
      rawEpisodeLinks.forEach((item) => {
        const res = fetch(item).then((res) => {
          episodeData.push(res.json())
        })
      })
      setEpisodes(episodeData)
    }
    if(characterData !== null) fetchEpisodes()
  }, [characterData])
  // useEffect(() => {
  //   if(characterData) console.log(characterData)
  // }, [characterData])
  useEffect(() => {
    if(episodes) {
      episodes.forEach((item: any) => {
        console.log(item)
      })
    }
  }, [episodes])
  return (
    <Box style={{ backgroundColor: '#24282F'}} sx={{ width: 1, padding: 5, minHeight: '100vh' }}>
      <Container maxWidth='md' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      { characterData !== null ? 
        <CustomBio>
          <Box sx={{ display: 'flex', width: 1 }}>
            <ImageContainer>
              <img draggable='false' src={characterData.image} alt={characterData.name}/>
            </ImageContainer>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column',  alignItems: 'flex-start', 
              width: 1,
              ml: 3
              }}>
              <Typography gutterBottom variant='h5' sx={{ width: 1, pt: 2, fontWeight: 'bold'}}>
                { characterData.name }
              </Typography>
              <Typography gutterBottom component="div" sx={{ height: 10, display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                Status: <AliveStatus status={ characterData.status } /> 
                { characterData.status } - { characterData.species } { characterData.gender }
              </Typography>
              <Typography gutterBottom variant="caption" sx={{ ml: 1 }}>
                { characterData.type === '' ? 'Subspecies: None' : `Subspecies: ${characterData.type}` }
              </Typography>
              <Typography gutterBottom>Origin: { characterData.origin.name }</Typography>
              <Box sx={{ mb: 2, mt: 1 }}>
                <Typography component='div' sx={{ color: 'rgb(158, 158, 158)' }}>Last known location: </Typography>
                <Typography component='div'> { characterData.location.name } </Typography>
              </Box>
            </Box>
          </Box>
          <Box>
          <ul>
          {/* { episodes !== null ?
            episodes.forEach((item: any) => {
              const data = item.json()
              return (
                <li>{data}</li>
              )
            })
            :
            'loading..'
          } */}
        </ul>
          </Box>
      </CustomBio>
      :
      <div>Loading...</div>

      }
      </Container>
    </Box>
  )
}
