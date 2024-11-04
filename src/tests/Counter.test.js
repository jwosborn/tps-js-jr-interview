// ButtonCounter.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import CounterTest from '../components/CounterTest';

test('increments click count', () => {
    render(<CounterTest />);
    expect(screen.getByText(/clicks: 0/i)).toBeInTheDocument();
});

test('increments count when button is clicked', () => {
    render(<CounterTest />);
    const button = screen.getByText(/Click me/i);
    fireEvent.click(button);
    expect(screen.getByText(/clicks: 1/i)).toBeInTheDocument();
});
