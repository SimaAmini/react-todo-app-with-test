import React from 'react';
import { render } from '@testing-library/react';
import { Items } from '../components';

describe('Items', () => {
  test('should render items component', () => {
    const { getByTestId } = render(<Items />);
    expect(getByTestId('items')).toBeTruthy();
  });

  test('should not render anything', () => {
    const items = [];
    const { getByTestId } = render(<Items list={items} />);

    const list = getByTestId('items');

    expect(list).toBeTruthy();
    expect(list.children.length).toBe(0);
  });

  test('should render the given list', () => {
    const items = [{ title: 'task 1' }, { title: 'task 2' }];
    const { getByTestId } = render(<Items list={items} />);

    const list = getByTestId('items');

    expect(list).toBeTruthy();
    expect(list.children.length).toBe(2);
  });
});
