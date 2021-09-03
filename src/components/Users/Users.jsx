import styles from './Users.module.css';

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: false,
        name: "Alexander",
        status: "На собеседовании",
        location: {country: 'Russia', city: 'Moscow/Novocheboksarsk',}
      },
      {
        id: 2,
        followed: true,
        name: "Alex",
        status: "На работе",
        location: {country: 'Russia', city: 'Novocheboksarsk',}
      },
      {
        id: 3,
        followed: true,
        name: "Nikita",
        status: "На чилле, на расслабоне",
        location: {country: 'Russia', city: 'Moscow',}
      },
      {
        id: 4,
        followed: true,
        name: "Krus",
        status: "На карантине",
        location: {country: 'Russia', city: 'Moscow',}
      },
      {
        id: 5,
        followed: true,
        name: "Mini-Krus",
        status: "На учебе",
        location: {country: 'Russia', city: 'Moscow',}
      },
    ]);
  }
  return (
    <ul className={styles.list}>
      {
        props.users.map(user => (
          <li className={styles.listItem}>
            <div>
              <img
                className={styles.userAvatar}
                src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                width="40"
                height="40"
                alt="avatar-big"/>
              {user.followed
                ? <button className={styles.unfollowButton}
                          onClick={() => props.unfollowUser(user.id)}>Unfollow</button>
                : <button className={styles.followButton}
                          onClick={() => props.followUser(user.id)}>Follow</button>}
            </div>
            <div className={styles.userInfo}>
              <p className={styles.userName}>{user.name}</p>
              <p>{user.location.city + ', ' + user.location.country}</p>
              <p>{user.status}</p>
            </div>
          </li>
        ))
      };
    </ul>
  );
};

export default Users;