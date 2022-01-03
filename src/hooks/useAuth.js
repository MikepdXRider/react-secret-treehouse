import { useContext } from 'react';
import { authContext } from '../context/ProvideAuth';

/**
 * This custom hook will return an authContext, which consists of the `user` object (which is an object with an `email` property), the `login` function (which takes a user's email and password), and the `logout` function.
 *
 * @returns {{user: {email:string}, login:  (email:string, password:string) => bool, logout: () => void}} authContext
 */
export function useAuth() {
  const context = useContext(authContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within a ProvideAuth context');
  }

  return context;
}
