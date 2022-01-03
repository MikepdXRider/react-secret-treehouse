import { Link } from 'react-router-dom';
import styles from './TreehouseMembers.css';
import members from '../../assets/secret-treehouse-members.jpeg';

export default function TreehouseMembers() {
  return (
    <>
      <Link to="/treehouse">Go back to the Treehouse</Link>
      <img src={members} alt="Top secret treehouse members" className={styles.members} />
      <ul>
        <li>John</li>
        <li>Paul</li>
        <li>George</li>
        <li>Ringo</li>
      </ul>
    </>
  );
}
