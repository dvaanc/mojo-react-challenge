

- fix errors
- install materialUI, react-router-dom typescript and types
- Add tsconfig json
- Converted files to ts files
- Had to bugfix permission errors with linux
- Migrated apollo boost and apollo react hooks to apollo client due to issue with typescript. 


- Learned to make a query for rickandmorty api with graphql
- Made some changes with GraphQL setup, seperate query in its own file and getters into Components folder
- Used the playground to make the query
- Add query 
- Add GetCharacters component to fetch characters, add it to state for use later.
- Used a theme creator https://bareynol.github.io/mui-theme-creator/#Card
- messed around with MUI
- need to create custom styled component for CharacterCards

- add normalise css
- add pagination click
- add pagination
- add pageNumber state
- add textfield
- styled the page 
- refactor code
- add search query by character name
- add dynamic router
- add styling for character card
- add useEffect hook to chain fetches

- NOTE need to remove chain fetches, instead useContext to get character infomartion instead

- add additional filter options
- need to add search button so it doesnt fire off too many useQueries (typing to fast triggers an error)

- spent awhile trying to fix the issue with fetching data from the array of endpoints
- issue with typing in random words in Species and type causing application to break
Live preview: https://dvaanc.github.io/mojo-react-challenge/

- Characters
  - List characters and display their name and image - DONE
  - Allowing searching for characters based on their name - DONE
  - Link each character to their details page - DONE
- Character Details
  - Display all of the characters information - DONE
  - List the episodes that the character appears in -  DONE

### Advanced

- Add pagination to the Characters page - DONE
- Allowing filtering of characters based on gender, species, status, and type - DONE
- Write a unit test for one of your presentational components - WIP
