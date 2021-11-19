import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AddForm } from '../components';
import userEvent from '@testing-library/user-event';

describe('Input field', () => {
  test('should render Input field component', () => {
    const { getByTestId } = render(<AddForm />);
    expect(getByTestId('add-form')).toBeTruthy();
  });

  test('should render input and button', () => {
    const { getByRole } = render(<AddForm />);
    expect(getByRole('textbox')).toBeTruthy();
    expect(getByRole('button')).toBeTruthy();
  });

  test('submit button\'s render should be "Submit"', () => {
    const { getByText } = render(<AddForm />);
    expect(getByText(/submit/i)).toBeTruthy();
  });

  test('Should not submit form when input is empty', () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(<AddForm onSubmit={onSubmit} />);

    const input = getByTestId('title');
    const button = getByTestId('button');

    fireEvent.change(input, {
      target: { value: '' },
    });

    fireEvent.click(button);

    expect(onSubmit).toBeCalledTimes(0);
  });
  test('Should submit form by click on submit botton', () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(<AddForm onSubmit={onSubmit} />);

    const input = getByTestId('title');
    const button = getByTestId('button');

    fireEvent.change(input, {
      target: { value: 'task 1' },
    });

    fireEvent.click(button);

    expect(onSubmit).toBeCalled();
  });

  test('Should submit when pressing enter', () => {
    const handleSubmit = jest.fn();
    const { getByTestId } = render(<AddForm onSubmit={handleSubmit} />);

    const input = getByTestId('title');

    userEvent.type(input, 'task 1{enter}');

    expect(handleSubmit).toHaveBeenCalled();
  });

  test('Should clear input after submit', () => {
    const handleSubmit = jest.fn();
    const { getByTestId } = render(<AddForm onSubmit={handleSubmit} />);

    const input = getByTestId('title');

    userEvent.type(input, 'task 1{enter}');

    expect(handleSubmit).toHaveBeenCalled();
    expect(input.value).toBe('');
  });
});
