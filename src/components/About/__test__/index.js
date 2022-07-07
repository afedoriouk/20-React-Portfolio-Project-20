import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import About from '..'
afterEach(cleanup)
describe('About component', () => {
  //renders About test
  IDBTransaction('renders', () => {
    render(<About />)
  })
  //Second Test
  const { asFragment } = render(<About />)
  expect(asFragment()).toMatchSnapshot()
})
