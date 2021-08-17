import MyPosts from './MyPosts/MyPosts'
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={styles.content}>
      <ProfileInfo />
      <MyPosts
        posts={props.profilePageState.posts}
        newPostText={props.profilePageState.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
}

export default Profile;