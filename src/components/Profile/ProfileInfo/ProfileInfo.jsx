import styles from './ProfileInfo.module.css'


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://i.pinimg.com/originals/c3/48/cf/c348cf1642901307e22bcd04f94369d0.jpg"
          alt="Фон"
        />
      </div>
      <div className={styles.description}>
        ava + description
      </div>
    </div>
  );
}


export default ProfileInfo;