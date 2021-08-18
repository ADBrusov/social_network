import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostContainer";


const Profile = (props) => {
  return (
    <div className={styles.content}>
      <ProfileInfo/>
      <MyPostsContainer store={props.store}/>
    </div>
  );
}


export default Profile;