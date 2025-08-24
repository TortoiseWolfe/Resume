import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../contexts/ThemeContext';
import { ThemeToggle } from '../UI/ThemeToggle';

const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

describe('ThemeToggle', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should render theme toggle button', () => {
    render(
      <TestWrapper>
        <ThemeToggle />
      </TestWrapper>
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-label');
  });

  it('should start with dark theme by default', () => {
    render(
      <TestWrapper>
        <ThemeToggle />
      </TestWrapper>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Switch to light mode');
  });

  it('should toggle theme when clicked', () => {
    render(
      <TestWrapper>
        <ThemeToggle />
      </TestWrapper>
    );

    const button = screen.getByRole('button');

    // Initially dark mode
    expect(button).toHaveAttribute('aria-label', 'Switch to light mode');

    // Click to toggle to light mode
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-label', 'Switch to dark mode');

    // Click to toggle back to dark mode
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-label', 'Switch to light mode');
  });

  it('should show gear icon in dark mode and sun icon in light mode', () => {
    render(
      <TestWrapper>
        <ThemeToggle />
      </TestWrapper>
    );

    const button = screen.getByRole('button');

    // In dark mode, should show gear icon (has gear class)
    expect(button.querySelector('[class*="gear"]')).toBeInTheDocument();

    // Toggle to light mode
    fireEvent.click(button);

    // In light mode, should not show gear icon
    expect(button.querySelector('[class*="gear"]')).not.toBeInTheDocument();
  });

  it('should update document theme attribute', () => {
    render(
      <TestWrapper>
        <ThemeToggle />
      </TestWrapper>
    );

    const button = screen.getByRole('button');

    // Should start with dark theme
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');

    // Toggle to light
    fireEvent.click(button);
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');

    // Toggle back to dark
    fireEvent.click(button);
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });
});
