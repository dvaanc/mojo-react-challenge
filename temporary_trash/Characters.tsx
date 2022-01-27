// import React, { useEffect, useState } from 'react'
// import { Grid } from '@mui/material'
// import { v4 as uuidv4 } from 'uuid'


// import CharacterCard from '../src/Components/CharacterCard'
//   // pageNumberProp: number 
//   // characterQueryProp: string
//   // isSearchbarEmptyProp: boolean
// interface CharactersProps { 

//   charactersArrayProp: null | Array<any>
// }


// export default function Characters({ charactersArrayProp }: CharactersProps) {
//   const [characters, setCharacters] = useState(null as null | Array<any>)
//   useEffect(() => {
//     setCharacters(charactersArrayProp)
//   }, [charactersArrayProp])
//   // const [characters, setCharacters] = useState(null as null | Array<any>)
//   // const data = GetCharacters(pageNumberProp, characterQueryProp)
//   // useEffect(() => {
//   //   console.log(data.characters.info.pages)
//   //   if(data) setCharacters(data.characters.results)
//   // }, [data])

//   // this useEffect hook below is another way of just fetching all the characters with the character endpoint. 
//   // this exists for the purpose of playing around with the rick and morty api

//   // useEffect(() => {
//   //   const fetchAllCharacters = async() => {
//   //     const res = await fetch('https://rickandmortyapi.com/api/character')
//   //     const data = await res.json()
//   //     console.log(data)
      
//   //   }
//   //   fetchAllCharacters()
//   // }, [])

//   useEffect(() => {
//     console.log(characters)
//   }, [characters])

//   return (
//     <div>
//       <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={{ xs: 2, md: 4 }}>
//         {
//         characters !== null ? 
//           characters.map((character: any) => {
//             return(
//               <Grid item xs={6} sm={4} md={3} lg={2} key={uuidv4()}>
//                 <CharacterCard characterNameProp={character.name} characterImageProp={character.image} characterID={character.id}/>
//               </Grid>
//             )
//           }) 
//           :
//           <div>Loading....</div>
//       }
          
//         </Grid>


//     </div>
//   )

// }
