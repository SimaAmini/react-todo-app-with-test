import React from 'react';
import { render } from '@testing-library/react';
import { Item } from '../components';
import '@testing-library/jest-dom/extend-expect';

describe('Item', () => {
  test('should render item component', () => {
    const data = { title: 'task 1' };
    const { getByTestId } = render(<Item data={data} />);
    expect(getByTestId('item')).toBeTruthy();
  });

  test('should render toggle button and delete button inside', () => {
    const data = { title: 'task 1' };
    const { getByTestId } = render(<Item data={data} />);
    expect(getByTestId('toggle-button')).toBeTruthy();
    expect(getByTestId('delete-button')).toBeTruthy();
  });

  test('should render title ', () => {
    const data = { title: 'task 1' };
    const { getByText } = render(<Item data={data} />);
    expect(getByText(data.title)).toBeTruthy();
  });
  test('should render title crossed out if isDone is true ', () => {
    const data = { title: 'task 1', isDone: true };
    const { getByTestId } = render(<Item data={data} />);
    expect(getByTestId('title-display')).toHaveStyle(
      `text-decoration: line-through`
    );
  });
  test('should render title normal if isDone is false ', () => {
    const data = { title: 'task 1', isDone: false };
    const { getByTestId } = render(<Item data={data} />);
    expect(getByTestId('title-display')).toHaveStyle(`text-decoration: none`);
  });
});
