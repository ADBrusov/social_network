import {NavLink} from 'react-router-dom';
import styles from './Dialog.module.css';


const Dialog = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <li>
      <NavLink to={path} className={styles.link} activeClassName={styles.activeLink}>
        {props.name}
      </NavLink>
    </li>
  );
}


export default Dialog;