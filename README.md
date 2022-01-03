# Secret Treehouse

## Demo

[https://alchemy-react-secret-treehouse.netlify.app](https://alchemy-react-secret-treehouse.netlify.app)

## Get Started

Use [this template](https://github.com/alchemycodelab/react-secret-treehouse) to get started.

### Learning Objectives

- Use private routes to enforce auth
- Retain URL if redirected by auth failure
- Redirect to an auth page if no user detected

### Description

The Secret Treehouse is a place where a user can log in and see the other members of the treehouse. It demonstrates how you can create a `<PrivateRoute>` component that combines the functionality of React Router's `<Route>` and `<Redirect>` components and determines which one to use based on our app's state (which is stored in a React Context).

However, it's a bit buggy in its current form! We need to make some adjustments to make sure everything works.

**NOTE: After making the necessary fixes, the pre-existing tests should pass.**

### Acceptance Criteria

- The fields on the login form update when typed in
- The login form allows users to sign in based on the credentials stored in the `.env` file
  - If the credentials matched (ie. `auth.login` returned `true`), then redirect to the URL stored in `location.state.from`
  - If `auth.login` fails, set an error message to display to the user
- Only authenticated (signed in) users can view the `/treehouse/members` page
- Existing tests pass

### Rubric

| Task                                  | Points |
| ------------------------------------- | ------ |
| Login form fixed                      | 4      |
| `/treehouse/members` route is private | 4      |
| Existing tests pass                   | 2      |
