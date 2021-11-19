import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DeleteButton } from '../components';

describe('Delete button', () => {
  test('should render delete button', () => {
    const { getByTestId } = render(<DeleteButton />);
    expect(getByTestId('delete-button')).toBeTruthy();
  });

  test('should item be removed when clicking on delete button', () => {
    const deletefn = jest.fn();
    const { getByRole, getByText } = render(
      <DeleteButton onDelete={deletefn} />
    );

    const button = getByRole('button');

    fireEvent.click(button);

    expect(deletefn).toBeCalled();
  });
});
