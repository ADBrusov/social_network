import styles from './Header.module.css';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img
        src="https://image.flaticon.com/icons/png/512/4832/4832045.png"
        width="40"
        height="40"
        alt="Лого"
      />
    </header>
  );
}

export default Header;