import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Treehouse from './Treehouse';

const mockLogout = jest.fn();

jest.mock('../../hooks/useAuth', () => {
  return {
    useAuth: function () {
      return {
        user: { email: 'test@example.com' },
        logout: mockLogout,
      };
    },
  };
});

// Snapshot test
it('should render the treehouse homepage if logged in', () => {
  const { container } = render(
    <MemoryRouter>
      <Treehouse />
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});

// Behavior test
it('should call the logout function when clicking the sign out button', () => {
  render(
    <MemoryRouter>
      <Treehouse />
    </MemoryRouter>
  );

  const signOutButton = screen.getByRole('button', { name: 'Sign Out' });

  userEvent.click(signOutButton);
  expect(mockLogout).toHaveBeenCalledTimes(1);
});
