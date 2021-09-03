import {connect} from "react-redux";
import Users from "./Users";
import {followUserActionCreator, setUsersActionCreator, unfollowUserActionCreator} from "../../redux/usersPageReducer";


const mapStateToProps = (state) => ({users: state.usersPage.users});
const mapDispatchToProps = (dispatch) => {
  return {
    followUser: (userID) => dispatch(followUserActionCreator(userID)),
    unfollowUser: (userID) => dispatch(unfollowUserActionCreator(userID)),
    setUsers: (users) => dispatch(setUsersActionCreator(users)),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Users);