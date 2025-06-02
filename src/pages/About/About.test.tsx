import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

describe('About', () => {
  test('renders the about page title', () => {
    render(<About />);
    const linkElement = screen.getByText(/About Page/i);
    expect(linkElement).toBeInTheDocument();
  });
}); 