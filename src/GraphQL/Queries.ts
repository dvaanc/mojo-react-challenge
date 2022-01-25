import React from 'react';
import { gql } from '@apollo/client';


export const GET_CHARACTERS = gql`
query GET_CHARACTERS($pageNumber: Int!) {
  characters(page: $pageNumber) {
    results {
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

// export default function Characters() {
//   const { data } = useQuery(GET_CHARACTERS);

//   return null;
// }
