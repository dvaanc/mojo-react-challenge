// import React, { useEffect, useState } from 'react'
// import { GetCharacters } from '../GraphQL/Queries'


// export const useFetch =  async(pageNumber: number, characterQuery: string, isSearchbarEmpty: boolean ) => {
//   const [characterData, setCharacterData] = useState(null as any)
//   const data = await GetCharacters(pageNumber, characterQuery)
//   useEffect(() => {
//     if(data) setCharacterData(data)
//     console.log(data)
//   }, [data])
//     // useEffect(() => {
//     //   if(isSearchbarEmpty) setCharacterData(GetCharacters(pageNumber))
//     // }, [pageNumber, isSearchbarEmpty, characterQuery])
//     // return [characterData]
// }
// // const [characters] = useFetch(1, '', true)