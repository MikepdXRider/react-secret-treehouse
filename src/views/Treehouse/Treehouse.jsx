import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import secret from '../../assets/top-secret.png';
import styles from './Treehouse.css';

export default function Treehouse() {
  const history = useHistory();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout(() => history.push('/'));
  };

  return (
    <>
      <h1>Welcome to the Secret Treehouse!</h1>
      <p>You are signed in as {user.email}</p>
      <Link to="/treehouse/members">View the Treehouse Members</Link>
      <button
        aria-label="Sign Out"
        type="button"
        className={styles.signOut}
        onClick={handleLogout}
      >
        Sign out
      </button>
      <img src={secret} alt="Top secret treehouse image" />
    </>
  );
}
