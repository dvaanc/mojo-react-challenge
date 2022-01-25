import React from 'react';
import { gql, useQuery } from '@apollo/client';


const GET_CHARACTERS = gql`
  query {

  }
`

export default function Characters() {
  const { data } = useQuery(GET_CHARACTERS);

  return null;
}
