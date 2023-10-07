/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import Image from './Image';

describe('Image component', () => {
  test('renders with required props', () => {
    const src = 'image.jpg';
    const loading = 'lazy';
    const alt = 'Test Image';

    const { getByAltText } = render(<Image src={src} loading={loading} alt={alt} />);

    expect(getByAltText(alt)).toBeInTheDocument();
    expect(getByAltText(alt)).toHaveAttribute('src', src);
    expect(getByAltText(alt)).toHaveAttribute('loading', loading);
  });

  test('renders with optional height and width props', () => {
    const src = 'image.jpg';
    const loading = 'eager';
    const alt = 'Test Image';
    const height = 100;
    const width = 200;

    const { getByAltText } = render(<Image src={src} loading={loading} alt={alt} height={height} width={width} />);

    const imageElement = getByAltText(alt);

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', src);
    expect(imageElement).toHaveAttribute('loading', loading);
    expect(imageElement).toHaveAttribute('height', String(height));
    expect(imageElement).toHaveAttribute('width', String(width));
  });

  test('renders with default loading prop', () => {
    const src = 'image.jpg';
    const alt = 'Test Image';

    const { getByAltText } = render(<Image src={src} alt={alt} />);

    expect(getByAltText(alt)).toHaveAttribute('loading', 'eager');
  });
});
