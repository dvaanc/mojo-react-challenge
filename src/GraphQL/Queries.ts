import React from 'react';
import { gql, useQuery } from '@apollo/client';

// used to fetch all characters, fetch a page of characters, or filter characters by name with query variables.
export const GET_CHARACTERS = gql`
  query GET_CHARACTERS($pageNumber: Int, $characterName: String) {
    characters(page: $pageNumber, filter: { name: $characterName }) {
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

export const GetCharacters = (pageNumberProp: number, characterQueryProp: string) => {
  const { error, data } = 
  useQuery(
    GET_CHARACTERS, 
    { variables: { pageNumber: pageNumberProp, characterName: characterQueryProp } }
    )
    if(error) throw error
  return data
}

export const GetCharacter = (characterID: number) => {
  const { error, data } = 
  useQuery(
    GET_CHARACTER, 
    { variables: { characterID: characterID } }
    )
    if(error) throw error
  return data
}
