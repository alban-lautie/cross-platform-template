import * as React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from './button';

describe('Button', () => {
  it('renders correctly with given text', () => {
    const { getByText } = render(<Button text="Click Me" />);
    expect(getByText('Click Me')).toBeTruthy();
  });

  it('calls the onClick handler when pressed', () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(
      <Button text="Press Me" onClick={mockOnClick} />
    );

    fireEvent.press(getByText('Press Me'));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
