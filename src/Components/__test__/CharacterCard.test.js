
import { render, screen, cleanup } from '@testing-library/react'
import CharacterCard from '../CharacterCard'

test('should render CharacterCard component', () => {

  render(<CharacterCard />)
  const CharacterCard = screen.getByTestId('Card1')
  expect(CharacterCard).toBeInTheDocument()

})