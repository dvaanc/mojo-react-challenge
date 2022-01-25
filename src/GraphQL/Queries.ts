import React from 'react';
import { gql } from '@apollo/client';


export const GET_CHARACTERS = gql`
query{
  characters {
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
