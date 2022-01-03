import { Link } from 'react-router-dom';
import styles from './Home.css';
import treehouse from '../../assets/treehouse.png';

export default function Home() {
  return (
    <>
      <img src={treehouse} alt="Treehouse" className={styles.treehouse} />
      <h1>
        <Link to="/treehouse" className={styles.enter}>
          Enter Treehouse
        </Link>
      </h1>
      <Link to="/treehouse/members">
        See who's in the Treehouse
      </Link>
    </>
  );
}
