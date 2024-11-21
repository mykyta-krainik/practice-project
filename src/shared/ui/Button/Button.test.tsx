import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button', () => {
  it('should be in the document', () => {
    render(<Button>Click me</Button>);

    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should have no styling with the CLEAN theme', () => {
    render(<Button theme={ButtonTheme.CLEAN}>Click me</Button>);

    expect(screen.getByText('Click me')).toHaveClass('button');
  });
});
