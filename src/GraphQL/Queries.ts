import React from 'react';
import { gql, useQuery } from '@apollo/client';

// used to fetch all characters, fetch a page of characters, or filter characters by name with query variables.
export const GET_CHARACTERS = gql`
  query GET_CHARACTERS($pageNumber: Int, $characterName: String, $gender: String, $species: String, $status: String, $type: String) {
    characters(page: $pageNumber, filter: { name: $characterName, gender: $gender, species: $species, status: $status, type: $type }) {
      info {
        pages
      }
      results {
        id
        name
        image
        status
        species
        type
        gender
        origin { 
          name 
        }
        location { 
          name 
        }
        episode { 
          episode 
        }
      }
    }
  }
`
// UNUSED
export const GET_CHARACTER = gql`
query GET_CHARACTER($characterID: Int!) {
  characters(id: $characterID) {
    info {
      pages
    }
    results {
      id
      name
      image
      status
      species
      type
      gender
      origin { 
        name 
      }
      location { 
        name 
      }
      episode { 
        episode 
      }
    }
  }
}
`
// UNUSED
export const FILTER_CHARACTERS_BY_NAME = gql`
  query FILTER_CHARACTERS_BY_NAME($characterName: String!) {
    characters(filter: { name: $characterName }) {
      results {
        name
        image
      }
    }
  }
`

export const GetCharacters = (
  pageNumberProp: number, 
  characterQueryProp: string, 
  genderProp: string, 
  speciesProp: string,
  statusProp: string,
  typeProp: string,
  skipQuery: boolean
  ) => {
  const { error, data } = 
  useQuery(
    GET_CHARACTERS, 
    { variables: { 
        pageNumber: pageNumberProp, 
        characterName: characterQueryProp,
        gender: genderProp,
        species: speciesProp,
        status: statusProp,
        type: typeProp
      },
      // skip: skipQuery
    }
    )
    if(error) throw error
  return data
}

//UNUSED
export const GetCharacter = (characterID: number) => {
  const { error, data } = 
  useQuery(
    GET_CHARACTER, 
    { variables: { characterID: characterID } }
    )
    if(error) {
      console.log(error)
    }
  return data
}
