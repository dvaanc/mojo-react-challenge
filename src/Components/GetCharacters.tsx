import React, { useEffect, useState } from 'react';
import { useQuery, gql } from  '@apollo/client'
import { GET_CHARACTERS } from '../GraphQL/Queries';
export default function GetCharacters() {
  const [characters, setCharacters] = useState(null as null | Array<any>)
  const { error, loading, data } = useQuery(GET_CHARACTERS)
  console.log(loading)
  if(error) console.log(error)


  useEffect(() => {
    if(!loading && data) setCharacters(data)
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
    if(characters) console.log(characters)
  }, [characters])
  return <div></div>;
}
