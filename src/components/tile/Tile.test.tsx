/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import Tile from './Tile';

describe('Tile component', () => {
  test('renders children correctly', () => {
    const childText = 'Hello, world!';
    const { getByText } = render(
      <Tile>
        <div>{childText}</div>
      </Tile>
    );

    expect(getByText(childText)).toBeInTheDocument();
  });

  test('renders with custom className and style', () => {
    const childText = 'Hello, world!';
    const className = 'custom-class';
    const style = { backgroundColor: 'blue' };

    const { getByText, container } = render(
      <Tile className={className} style={style}>
        <div>{childText}</div>
      </Tile>
    );

    const tileContainer = container.firstChild;
    expect(tileContainer).toHaveClass(className);
    expect(tileContainer).toHaveStyle('background-color: blue');
    expect(getByText(childText)).toBeInTheDocument();
  });

  test('forwards additional props to TileContainer', () => {
    const dataTest = 'tile-container';

    const { container } = render(
      <Tile data-test={dataTest}>
        <div>Hello, world!</div>
      </Tile>
    );

    const tileContainer = container.firstChild;
    expect(tileContainer).toHaveAttribute('data-test', dataTest);
  });
});
