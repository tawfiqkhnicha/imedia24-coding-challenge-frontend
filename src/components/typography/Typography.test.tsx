/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import Typography from './Typography';

describe('Typography component', () => {
  test('renders text correctly', () => {
    const text = 'Hello, world!';
    const { getByText } = render(<Typography text={text} />);

    expect(getByText(text)).toBeInTheDocument();
  });

  test('renders with custom className and style', () => {
    const text = 'Hello, world!';
    const className = 'custom-class';
    const style = { color: 'blue' };

    const { getByText, container } = render(
      <Typography text={text} className={className} style={style} />
    );

    const paragraph = getByText(text);
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveClass(className);
    expect(container.firstChild).toHaveStyle('color: blue');
  });

});
