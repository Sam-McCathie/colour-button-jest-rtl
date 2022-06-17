import {render, screen, fireEvent} from '@testing-library/react';
import Button from '../Button';

test('button should start off with a red background', () => {
  render(<Button />);
  // find an element with a role of cutton and a text of "Change to blue"
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});

  expect(colorButton).toHaveStyle({backgroundColor: 'red'});
});

test('button should turn blue when clicked', () => {
  render(<Button />);
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});

  // Simulate a button click
  fireEvent.click(colorButton);

  // expect the background to be blue
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'});
  expect(colorButton).toHaveTextContent('Change to red');

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor: 'red'});
  expect(colorButton).toHaveTextContent('Change to blue');
});
