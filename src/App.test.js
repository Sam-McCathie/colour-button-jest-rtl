import {render, screen, fireEvent} from '@testing-library/react';
import App from './App';

test('checkbox should enable and disable the button', () => {
  render(<App />);
  const button = screen.getByRole('button', {name: 'Change to blue'});
  const checkbox = screen.getByLabelText('toggle-checkbox');

  // first click
  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(button).toBeDisabled();
  expect(button).toHaveStyle({backgroundColor: 'grey'});

  // second click -> return to default
  fireEvent.click(checkbox);

  expect(checkbox).not.toBeChecked();
  expect(button).toBeEnabled();
  expect(button).not.toHaveStyle({backgroundColor: 'grey'});
});
