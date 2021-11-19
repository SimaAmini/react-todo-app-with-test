import React from 'react';
import { render } from '@testing-library/react';
import { Wrapper } from '../components';

describe('Wrapper', () => {
  test('should render wrapper component', () => {
    const { getByTestId } = render(<Wrapper />);
    expect(getByTestId('wrapper')).toBeTruthy();
  });

  test('should render input field component and item list', () => {
    const { getByTestId } = render(<Wrapper />);
    expect(getByTestId('add-form')).toBeTruthy();
    expect(getByTestId('items')).toBeTruthy();
  });
});
