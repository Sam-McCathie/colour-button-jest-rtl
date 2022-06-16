import { render, screen } from '@testing-library/react';
import Default from '../Default';

// test method has two args ("description", test function)
// a test will fail if any errors are thrown while running the function
test('renders learn react link', () => {
  render(<Default />); // creates a virtual DOM for with a component as the arg.
  const linkElement = screen.getByRole("link", {name :/react/i}); // accesses virtual dom via "screen" global
  // Assertion/s (below) -> determind if a test will pass or fail. (always start )
  expect(linkElement).toBeInTheDocument();
});

  /* Assertion structure
  expect = jest gloval, starts the assertion
  (argument) = subject of the assertion.
  .matcher() = type of assertion this matcher comfrom jest-DOM -> matcher is the assertion type
*/

