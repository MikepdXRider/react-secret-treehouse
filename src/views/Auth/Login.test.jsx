import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { MemoryRouter, Route, Switch } from 'react-router-dom';
import { ProvideAuth } from '../../context/ProvideAuth';
import Login from './Login';
import Treehouse from '../Treehouse/Treehouse'

jest.mock('../../hooks/useAuth', () => {
  return {
    useAuth: function () {
      return {
        user: { email: 'test@example.com' },
        login: () => true,
      };
    },
  };
});

// Combined behavior & snapshot test
it('should allow the user to log in', async () => {
  const { container } = render(
    <ProvideAuth>
      <MemoryRouter initialEntries={["/login"]}>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Treehouse />
          </Route>
        </Switch>
      </MemoryRouter>
    </ProvideAuth>
  );

  expect(container).toMatchSnapshot();

  const emailField = screen.getByLabelText('Email');
  const passwordField = screen.getByLabelText('Password');
  const submitBtn = screen.getByRole('button', { name: 'Sign In' });
  
  fireEvent.change(emailField, {
    target: { value: 'test@example.com' },
  });
  fireEvent.change(passwordField, {
    target: { value: 'secret' },
  });
  
  expect(passwordField).toHaveValue('secret');
  expect(emailField).toHaveValue('test@example.com');

  fireEvent.click(submitBtn);

  return waitFor(() => {
    screen.getByText('Welcome to the Secret Treehouse!');
  });
});
