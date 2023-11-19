// References/Sources:
// https://testing-library.com/docs/queries/about/
// https://testing-library.com/docs/react-testing-library/example-intro
// https://legacy.reactjs.org/docs/testing-recipes.html
// https://www.geeksforgeeks.org/how-to-change-the-text-of-a-label-using-javascript/
// https://www.geeksforgeeks.org/html-label-tag/
// https://docs.google.com/presentation/d/1UAjkIFYueoDjZf5JoK8uRD3Q-sO-Q6S8b2tALfOFIX4/edit#slide=id.p1
// https://www.tutorialspoint.com/how-to-delete-a-git-branch-remotely-and-locally


// import necessary react testing library helpers here
import {render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
// import the Counter component here
import Counter from '../components/Counter'

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />)
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByText('Counter')).toBeInTheDocument()
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByTestId('count').textContent).toEqual("0")
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  userEvent.click(screen.getByText('+'))

  expect(screen.getByTestId('count').textContent).toEqual("1")

});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  userEvent.click(screen.getByText('-'))

  expect(screen.getByTestId('count').textContent).toEqual("-1")
});
