/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import Grid from './Grid';

test('renders Grid component with children', () => {
  const childText = 'Hello, world!';
  
  const { getByText } = render(
    <Grid>
      <div>{childText}</div>
    </Grid>
  );

  // Assert
  expect(getByText(childText)).toBeInTheDocument();
});

test('renders Grid component with custom className', () => {
  // Arrange
  const customClassName = 'bg-dark';

  // Act
  const { container } = render(
    <Grid className={customClassName}>
      <div>Hello, world!</div>
    </Grid>
  );

  // Assert
  // eslint-disable-next-line testing-library/no-node-access
  expect(container.firstChild).toHaveClass(customClassName);
});
