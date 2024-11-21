import { Sidebar } from './Sidebar';
import {
  renderWithTranslations
} from '@/shared/lib/tests/renderWithTranslations';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Sidebar', () => {
  it('should render', () => {
    renderWithTranslations(<Sidebar />);

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  it('should be hidden after click on the toggle button', async () => {
    renderWithTranslations(<Sidebar />);

    const toggleButton = screen.getByTestId('sidebar-toggle-button');
    expect(toggleButton).toBeInTheDocument();

    await userEvent.click(toggleButton);

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
