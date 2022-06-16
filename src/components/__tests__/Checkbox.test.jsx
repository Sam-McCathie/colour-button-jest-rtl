import {render, screen} from '@testing-library/react';
import Checkbox from '../Checkbox';

test('checkbox its not checked by default', () => {
  render(<Checkbox />);
  const checkbox = screen.getByLabelText('toggle-checkbox');
  expect(checkbox).not.toBeChecked();
});
