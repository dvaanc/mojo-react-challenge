import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { 
  Button, 
  Container, 
  Box, 
  Typography, 
  List, 
  ListItem, 
  ListItemText,
  ListSubheader
} from '@mui/material'
import { styled } from '@mui/system'
import { v4 as uuidv4 } from 'uuid'
import LoadingModal from './LoadingModal'

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
  min-width: 100px;
  min-height: 100px;
  max-height: 350px;
  max-width: 350px;
  & img {
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
    object-position: center;
  }
`
const AliveStatus = styled('div')<{ status: string }>`
  min-height: 8px;
  min-width: 8px;
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
  const isMounted = true
  const { id } = useParams();
  
  
  // grab all of character data
  useEffect(() => {
    if(isMounted) fetchCharacterData()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if(characterData) fetchEpisodes()
    }, 1500)

  }, [characterData])


  // useEffect(() => {
  //   console.log(episodes)
  // }, [episodes ])

  const fetchCharacterData = async() => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const data = await res.json()
    setCharacterData(data)
  }
  const fetchEpisodes = async() => {
    const promises: Array<any> = [...characterData.episode]
    const episodeData: Array<any> = []
    for(const item of promises) {
      const res = await fetch(item)
        res.json().then((res) => episodeData.push(res))
    }
    setEpisodes(episodeData)
  }
  return (
    <Box style={{ backgroundColor: '#24282F'}} sx={{ width: 1, padding: 1, minHeight: '100vh' }}>
      <Container maxWidth='md' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
      { characterData !== null &&
        <CustomBio>
          <Box sx={{ display: 'flex', width: 1 }}>
            <ImageContainer>
              <img draggable='false' src={characterData.image} alt={characterData.name}/>
            </ImageContainer>
            <Box sx={{ display: 'flex', flexDirection: 'column',  alignItems: 'flex-start', width: 1, ml: 1 }}>
              <Typography gutterBottom variant='h5' sx={{ width: 1, pt: 0.5, fontWeight: 'bold', color: 'info.main'}}>
                { characterData.name }
              </Typography>
              <Typography gutterBottom component="div" sx={{ height: 10, display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                Status: <AliveStatus status={ characterData.status } /> 
                { characterData.status } 
              </Typography>
              <Typography gutterBottom component="div" sx={{ height: 10, mb: 1.5, display: 'flex', whiteSpace:'nowrap'}}>
                Species: { characterData.species } 
              </Typography>
              <Typography gutterBottom variant="caption" sx={{ ml: 1 }}>
                Type: { characterData.type === '' ? 'None' : characterData.type }
              </Typography>
              <Typography gutterBottom component="div" sx={{ height: 10, mb: 1.5 }}>
                Gender: { characterData.gender }
              </Typography>
              <Typography gutterBottom> Origin: { characterData.origin.name }</Typography>
              <Box>
                <Typography component='div' sx={{ color: 'rgb(158, 158, 158)' }}>Last known location: </Typography>
                <Typography component='div'> { characterData.location.name } </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ mt: 2, maxHeight: 326, overflow: 'auto', width: 1 }}>
          <ListSubheader sx={{ backgroundColor: '#3C3E44' }}>
            
              { episodes && 
              <Typography variant='h6' align='center'>
                Episode appearances:
              </Typography>}
            </ListSubheader>
          <List sx={{ display: 'flex', flexDirection: 'column', }}>
          { episodes !== null ?
          episodes.map((item: any) => {
            return (
              <ListItem key={uuidv4()}>
                <ListItemText primary={item.episode} secondary={item.name} />
              </ListItem>
            )
          }) 
          :
          <LoadingModal show={true}/>
          }
        </List>
          </Box>
      </CustomBio>

      }
      <Link to='/'>
        <Button variant='contained' sx={{ mt: 2 }}>Back</Button>
      </Link>

      </Container>

    </Box>
  )
}
