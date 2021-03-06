import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'

const Navbar = (props) => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><NavLink to="/profile" activeClassName={styles.active}>
          Profile
        </NavLink></li>
        <li><NavLink to="/dialogs" activeClassName={styles.active}>
          Messages
        </NavLink></li>
        <li><NavLink to="/users" activeClassName={styles.active}>
          Users
        </NavLink></li>
        <li><NavLink to="/news" activeClassName={styles.active}>
          News
        </NavLink></li>
        <li><NavLink to="/music" activeClassName={styles.active}>
          Music
        </NavLink></li>
        <li><NavLink to="/settings" activeClassName={styles.active}>
          Settings
        </NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;