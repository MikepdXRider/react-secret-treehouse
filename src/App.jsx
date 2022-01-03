import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { ProvideAuth } from './context/ProvideAuth';
import Login from './views/Auth/Login';
import Home from './views/Home/Home';
import Treehouse from './views/Treehouse/Treehouse';
import styles from './App.css';
import TreehouseMembers from './views/Treehouse/TreehouseMembers';

export default function App() {
  return (
    <main className={styles.main}>
      <ProvideAuth>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/treehouse/members">
              <TreehouseMembers />
            </PrivateRoute>
            <PrivateRoute path="/treehouse">
              <Treehouse />
            </PrivateRoute>
          </Switch>
        </Router>
      </ProvideAuth>
    </main>
  );
}
