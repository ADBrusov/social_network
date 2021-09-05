import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userAvatarSmall from '../../images/userAvatar_small.jpg';

class Users extends React.Component {

  constructor (props) {
    super(props);

    if (this.props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
        this.props.setUsers(response.data.items);
      });
    }
  }

  render() {
    return (
      <ul className={styles.list}>
        {
          this.props.users.map(user => (
            <li className={styles.listItem}>
              <div>
                <img
                  className={styles.userAvatar}
                  src={user.photos.small != null ? user.photos.small : userAvatarSmall}
                  width="40"
                  height="40"
                  alt="avatar-big"/>
                {user.followed
                  ? <button className={styles.unfollowButton}
                            onClick={() => this.props.unfollowUser(user.id)}>Unfollow</button>
                  : <button className={styles.followButton}
                            onClick={() => this.props.followUser(user.id)}>Follow</button>}
              </div>
              <div className={styles.userInfo}>
                <p className={styles.userName}>{user.name}</p>
                <p>{'user.location.city + user.location.country'}</p>
                <p>{user.status}</p>
              </div>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default Users;