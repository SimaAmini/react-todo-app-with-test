import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ToggleButton } from '../components';

describe('Toggle button', () => {
  test('should render toggle button', () => {
    const { getByTestId } = render(<ToggleButton />);
    expect(getByTestId('toggle-button')).toBeTruthy();
  });

  test('should render Done when status is Done', () => {
    const isDone = true;
    const { getByText } = render(<ToggleButton isDone={isDone} />);
    expect(getByText('unDone')).toBeTruthy();
  });

  test('should render unDone when status is unDone', () => {
    const isDone = false;
    const { getByText } = render(<ToggleButton isDone={isDone} />);
    expect(getByText('Done')).toBeTruthy();
  });

  test('should render Done when status is unDone', () => {
    const isDone = true;

    const toggle = jest.fn();
    const { getByRole, getByText } = render(
      <ToggleButton isDone={isDone} onToggle={toggle} />
    );

    const button = getByRole('button');

    fireEvent.click(button);

    expect(toggle).toBeCalled();
    expect(getByText('unDone')).toBeTruthy();
  });
  test('should render unDone when status is Done', () => {
    const isDone = false;

    const toggle = jest.fn();
    const { getByRole, getByText } = render(
      <ToggleButton isDone={isDone} onToggle={toggle} />
    );

    const button = getByRole('button');

    fireEvent.click(button);

    expect(toggle).toBeCalled();
    expect(getByText('Done')).toBeTruthy();
  });
});
