import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  test('renders the home page title', () => {
    render(<Home />);
    const linkElement = screen.getByText(/Home Page/i);
    expect(linkElement).toBeInTheDocument();
  });
}); 