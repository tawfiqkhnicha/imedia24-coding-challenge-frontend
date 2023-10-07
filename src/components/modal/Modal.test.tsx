/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('Modal component', () => {
  test('renders correctly when isOpen is true', () => {
    const { getByText } = render(
      <Modal isOpen={true} onClose={() => {}}>
        <div>Modal Content</div>
      </Modal>
    );

    expect(getByText('Modal Content')).toBeInTheDocument();
  });

  test('does not render when isOpen is false', () => {
    const { container } = render(
      <Modal isOpen={false} onClose={() => {}}>
        <div>Modal Content</div>
      </Modal>
    );

    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toBeNull();
  });



});
